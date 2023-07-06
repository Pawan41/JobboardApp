const express = require('express');
const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');
const router = new express.Router();

//Creating an api for Signup
router.signup = async (req, res, next) => {
    //Checking the value coming from the front end
    console.log(req.body);

    // Get the Data from body
    const { email } = req.body;

    // Check User Email Exit or Not
    const UserEmailExist = await User.findOne({ email });

    //if User Email Exit Throw an Error 
    if (UserEmailExist) {
        return next(new ErrorResponse("E-mail already registred", 400));
    } else {
        try {
            const user = await User.create(req.body);

            //Sending a Response to FrontEnd
            res.status(201).json({ success: true, user })
        } catch (error) {
            next(error);
        }
    }

}

//Creating an api for Signup
router.signin = async (req, res, next) => {
try {
        console.log(req.body);
        const { email, password } = req.body;

        //validation
        if (!email) {
            return next(new ErrorResponse("please add an email", 403));
        }
        if (!password) {
            return next(new ErrorResponse("please add a password", 403));
        }

        //Check user Email Exit or Not
        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorResponse("invalid credentials", 400));
        }
        //Check password Exit or Not
        const isMatched = await user.comparePassword(password);
        if (!isMatched) {
            return next(new ErrorResponse("invalid credentials", 400));
        }

        sendTokenResponse(user, 200, res);

    } catch (error) {
        next(error);
    }
}

const sendTokenResponse = async (user, codeStatus, res) => {
    const token = await user.getJwtToken();
    res
        .status(codeStatus)
        .cookie('token', token, { maxAge: 60 * 60 * 1000, httpOnly: true })
        .json({ 
            success: true,
            role: user.role
        })
}

//Creating an api for Logout
router.logout = (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "logged out"
    })
}

//User Profile
router.userProfile = async (req, res, next) => {
   
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json({
        success: true,
        user
    })
}

module.exports = router;