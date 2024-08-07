require('dotenv').config(); // Load environment variables from .env file
const express = require("express");
const app = express();
const z = require("zod"); // Library for schema validation
const { User } = require("./db"); // Mongoose User model
const jwt = require("jsonwebtoken"); // Library for handling JWT tokens

// Constants
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Validation schemas
const phoneNumberSchema = z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format");
const emailSchema = z.string().email("Invalid email format");
const nameSchema = z.string().min(1, "Name cannot be empty").max(100, "Name is too long");

// Password validation schema
const passwordSchema = z.string().min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character");

// Function to parse DD/MM/YYYY dates
const parseDate = (dateString) => {
  const parts = dateString.split("/");
  if (parts.length !== 3) return NaN;
  const [day, month, year] = parts.map(part => parseInt(part, 10));
  return new Date(year, month - 1, day);
};

// Function to format date as DD/MM/YYYY
const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

// DOB validation schema
const dobSchema = z.string().refine((date) => !isNaN(parseDate(date)), {
  message: "Invalid date of birth",
});

// Monthly salary validation schema
const monthlySalarySchema = z.number().min(0, "Salary must be a positive number");

// Function to calculate age from DOB
const calculateAge = (dob) => {
  const birthDate = parseDate(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

// Function to calculate Purchase Power
const calculatePurchasePower = (monthlySalary) => {
  // Assuming Purchase Power amount is calculated as 10 times the monthly salary
  return monthlySalary * 10;
};

// Signup input validation schema
const signupInput = z.object({
  phoneNumber: phoneNumberSchema,
  email: emailSchema,
  name: nameSchema,
  dob: dobSchema,
  monthlySalary: monthlySalarySchema,
  password: passwordSchema,
});

// Borrow input validation schema
const borrowInput = z.object({
  amount: z.number().min(1, "Borrow amount must be greater than 0")
});

// Function to calculate monthly repayment amount
const calculateMonthlyRepayment = (principal, rate, tenure) => {
  const monthlyRate = rate / 12 / 100;
  const numPayments = tenure * 12;
  const monthlyRepayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
  return monthlyRepayment;
};

// User signup endpoint
app.post("/signup", async function(req, res) {
  const body = req.body;
  const result = signupInput.safeParse(body);

  // Validation check
  if (!result.success) {
    return res.status(403).json({
      message: "The given inputs are not valid",
      errors: result.error.errors
    });
  }

  // Age check
  if (calculateAge(body.dob) < 20) {
    return res.status(403).json({
      message: "You are less than 20 years"
    });
  }

  // Salary check
  if (body.monthlySalary < 25000) {
    return res.status(403).json({
      message: "Your salary is less than 25000"
    });
  }

  // Check for existing user
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(411).json({
      message: "Existing User"
    });
  }

  // Set registration date to current date in DD/MM/YYYY format
  const registrationDate = formatDate(new Date());

  // Create new user
  const user = await User.create({
    phoneNumber: body.phoneNumber,
    email: body.email,
    name: body.name,
    registrationDate: registrationDate,
    dob: body.dob,
    monthlySalary: body.monthlySalary,
    password: body.password,
  });
  const userId = user._id;

  // Generate JWT token
  const token = jwt.sign({ userId }, JWT_SECRET);

  // Send response
  res.status(200).json({
    message: "Signup successful",
    token: token
  });
});

// User login endpoint
const signinInput = z.object({
  email: emailSchema,
  password: passwordSchema,
});

app.post("/login", async function(req, res) {
  const body = req.body;
  const result = signinInput.safeParse(body);

  // Validation check
  if (!result.success) {
    return res.status(403).json({
      message: "The given inputs are not valid",
      errors: result.error.errors
    });
  }

  // Check user credentials
  const user = await User.findOne({ email: body.email, password: body.password });

  if (user) {
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    // Send response
    return res.status(200).json({
      token
    });
  }

  // Send error response
  res.status(403).json({
    message: "Error while logging in"
  });
});

// Get user details endpoint
app.get("/user", async function(req, res) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({
      message: "No token provided"
    });
  }

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Prepare user data for response
    const userData = {
      purchasePower: calculatePurchasePower(user.monthlySalary),
      phoneNumber: user.phoneNumber,
      email: user.email,
      registrationDate: user.registrationDate,
      dob: user.dob,
      monthlySalary: user.monthlySalary
    };

    // Send response
    res.status(200).json(userData);
  } catch (error) {
    res.status(403).json({
      message: "Invalid token"
    });
  }
});

// Borrow money endpoint
app.post("/borrow", async function(req, res) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({
      message: "No token provided"
    });
  }

  const body = req.body;
  const result = borrowInput.safeParse(body);

  // Validation check
  if (!result.success) {
    return res.status(403).json({
      message: "The given inputs are not valid",
      errors: result.error.errors
    });
  }

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const borrowAmount = body.amount;
    const tenure = 1; // Tenure in years, can be modified as needed
    const interestRate = 8; // Annual interest rate in percent

    // Calculate new purchase power and monthly repayment
    const newPurchasePower = calculatePurchasePower(user.monthlySalary) - borrowAmount;
    const monthlyRepayment = calculateMonthlyRepayment(borrowAmount, interestRate, tenure);

    // Update user's purchase power
    user.purchasePower = newPurchasePower;
    await user.save();

    // Send response
    res.status(200).json({
      purchasePower: newPurchasePower,
      monthlyRepayment: monthlyRepayment.toFixed(2)
    });
  } catch (error) {
    res.status(403).json({
      message: "Invalid token"
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
