const express = require("express");
const {handleGetAllJobs, handlePostJobs, handleDeleteJobs, handleEditJobs} = require("./controller")
const router = express.Router();

router.route("/getjobs").get(handleGetAllJobs);
router.route("/postjobs").post(handlePostJobs);
router.route("/editjobs/:id").post(handleEditJobs);
router.route("/deletejobs/:id").get(handleDeleteJobs);

module.exports = router;