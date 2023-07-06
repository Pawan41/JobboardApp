const express = require('express');
const router = express.Router();
const { allUsers ,singleUser,editUser,deleteUser,createUserJobsHistory } = require('../controllers/userController');
const { isAuthenticated ,isAdmin} =require('../middleware/auth');

/* --- User Routes */

//Creating an Routes to GetAll Users
router.get('/allUsers',isAuthenticated, isAdmin, allUsers);

//Creating an Routes to Get Single User By Id
router.get('/user/:id',isAuthenticated, singleUser);

//Creating an Routes to Get Edit User By Id
router.put('/user/edit/:id',isAuthenticated, editUser);

//Creating an Routes to Get Delete User By Id (Only Admin can Delete User)
router.delete('/admin/user/delete/:id',isAuthenticated,isAdmin, deleteUser);

//Creating an Routes to Create Jobs History
router.post('/user/jobshistory',isAuthenticated,createUserJobsHistory);

module.exports = router;