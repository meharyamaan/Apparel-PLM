// Routes Configuration
const express = require('express');
const router = express.Router();
const FileController = require('../controllers/readFileController');



/////////////////////////////////////////////////
/////////// User
////////////////////////////////////////////////////
router.route('/keyprocess/:projectId/:cardName').get(FileController.KeyProcessDetails)
router.route('/orderdetails/:projectId').get(FileController.orderDetails)
router.route('/orders/:email').get(FileController.OrderList)
router.route('/singleOrder/:orderId').get(FileController.singleOrder)

/////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


// Profile Managment /////////////////////////////
const controller = require('../controllers/appController.js');
const UserRegisterModel = require('../controllers/emailverification.js');
const nodemailer = require('nodemailer');
//////////////////////////////////////////////////




///// Routes of Profile Managmet ///////////////////////
router.post('/register', UserRegisterModel.registerUser);
router.get('/api/get-user-email', controller.get_User_Email);
router.route('/fetchUserData').get(controller.fetchUserData);
router.route('/login').post(controller.login);
router.route('/updateUserData').post(controller.updateUserData)
router.post('/resetPassword', controller.ResetPassword);
router.route('/googleLogin').post(controller.googleLogin);
///////////////////////////////////////////////////////



module.exports = router;
