const express = require("express");
const User = require("../models/UserModel");
const sendToken = require("../utils/sendToken")

//register User
exports.register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(401).json({
        message: "user Found",
      });
    }

    const user = await User.create({
      email,
      password,
      name,
    });

    res.status(201).json({
      message: "user registered succesfully",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

//Login User
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }

    const checkPassword = await user.comparePassword(password);

    if (!checkPassword) {
      return res.status(401).json({
        message: "incorrect Password",
      });
    }

sendToken(user,200,res)

   
  } catch (err) {
    console.log(err);
  }
};
