const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User= require('../models/usermodel')

//@desc register new  user
// @route POST /api/users
//@access public
const registerUser = asyncHandler(async(req, res) => {


  res.json({ message: "Register User" });
});
//@desc Authenticate a user
// @route POST/api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

//@desc Get User Data
// @route GET /api/users/me
//@access public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User Data" });
});


module.exports = {
    registerUser,
    loginUser,
    getMe
};
