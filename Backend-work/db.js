require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 100,
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  registrationDate: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  monthlySalary: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
