const express = require('express');
const router = express.Router();
const {createJob , singleJob ,updateJob, showJobs} =require('../controllers/jobsController');
const { isAuthenticated , isAdmin } = require('../middleware/auth');

// Jobs Routes

// Creating a Route to Post/Create the Job (Only Admin Can Create Post )
router.post('/job/create', isAuthenticated, isAdmin, createJob);

// Creating a Route to Get the Job By Id
router.get('/job/:id',singleJob);

// Creating a Route to Update the Job By Id(Only Admin Can Update Post )
router.put('/job/update/:job_id', isAuthenticated, isAdmin, updateJob);

// Creating a Route to Show the Job By Id
router.get('/jobs/show',showJobs);

module.exports = router;
