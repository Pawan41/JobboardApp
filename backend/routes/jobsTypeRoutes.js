const express = require('express');
const router = express.Router();
const {createJobType ,allJobsType ,updateJobType,deleteJobType } =require('../controllers/jobsTypeController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

// Job Type Routes

// Creating a Route To Post the all Job Type
router.post('/type/create', isAuthenticated, isAdmin, createJobType)

// Creating a Route To Fetch the all Job Type
router.get('/type/jobs', allJobsType)

// Creating a Route To Update Job Type
router.put('/type/update/:type_id', isAuthenticated, isAdmin, updateJobType)

// Creating a Route To Delete Job Type
router.delete('/type/delete/:type_id', isAuthenticated, isAdmin, deleteJobType)

module.exports = router;
