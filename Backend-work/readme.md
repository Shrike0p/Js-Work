
# User Borrowing Application

This application allows users to sign up, log in, view their user details, and borrow money. The application calculates the user's purchase power, and monthly repayment amounts based on the borrowing amount and an interest rate.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
# API Endpoints
## 1. User Signup

**Endpoint**: POST /signup

**Description**: Allows a new user to sign up.

**Request Body**:
```
{
  "phoneNumber": "string",
  "email": "string",
  "name": "string",
  "dob": "string",
  "monthlySalary": "number",
  "password": "string"
}
```
![image](https://github.com/user-attachments/assets/c79b99aa-6f5a-414a-b046-4300b6394780)

**Response:**
- 200 OK on successful signup with a token.
- 403 Forbidden if the input validation fails.
- 411 Length Required if the user already exists.


## 2. User Login
**Endpoint**: POST /login

**Description**: Allows an existing user to log in.

**Request Body**:
```
{
  "email": "string",
  "password": "string"
}
```
![image](https://github.com/user-attachments/assets/c61fa227-bd1b-4e8b-93a2-e3658d71cc68)

**Response**:

- 200 OK on successful login with a token.
- 403 Forbidden if the input validation fails or if login fails.


## 3. Get User Details
**Endpoint**: GET /user

**Description**: Retrieves the details of the logged-in user.

**Headers**:
- Authorization: Bearer your_jwt_token

![image](https://github.com/user-attachments/assets/46887b08-2eb2-4581-9f33-fcb950c9a5ad)

**Response**:

- 200 OK with user details.
- 403 Forbidden if the token is invalid.
- 404 Not Found if the user is not found.

## 4. Borrow Money
**Endpoint**: POST /borrow

**Description**: Allows the user to borrow money from the application. Updates the purchase power amount and calculates the monthly repayments.

**Headers**:

- Authorization: Bearer your_jwt_token

**Request Body**:
```
{
  "amount": "number"
}
```
![image](https://github.com/user-attachments/assets/140b5497-ae07-4c7e-b387-0d87059cc3d0)

**Response**:
- 200 OK with updated purchase power and monthly repayment amount.
- 403 Forbidden if the token is invalid or if the input validation fails.
- 404 Not Found if the user is not found.

# MongoDB Dashboard
![image](https://github.com/user-attachments/assets/7b8a8661-7380-4b8d-92ab-c67e938397cf)

# Utility Functions
**calculateAge(dob)**
Calculates the age of the user based on the date of birth (dob).

**calculatePurchasePower(monthlySalary)**
Calculates the purchase power amount based on the user's monthly salary.

**calculateMonthlyRepayment(principal, rate, tenure)**
Calculates the monthly repayment amount based on the borrowed amount (principal), annual interest rate (rate), and tenure in years.

**Environment Variables**
DATABASE_URL: MongoDB connection string.
JWT_SECRET: Secret key for signing JWT tokens.


