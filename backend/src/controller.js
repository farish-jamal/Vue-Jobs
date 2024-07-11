const Job = require("./model");

exports.handleGetAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    if (jobs.length === 0) {
      return res.json({ message: "No Job Found" });
    }
    return res.status(200).json({ message: 'Job Fetched successfully', jobs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "err " + error });
  }
};

exports.handlePostJobs = async (req, res) => {
  const {
    role,
    location,
    description,
    salary,
    companyName,
    companyDescription,
    companyEmail,
    companyPhone,
    opportunity,
  } = req.body;
  try {
    const job = await Job.create({
      role,
      location,
      description,
      salary,
      companyName,
      companyDescription,
      companyEmail,
      companyPhone,
      opportunity,
    });
    res.status(201).json({ message: 'Job posted successfully', job });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "err " + error });
  }
};

exports.handleEditJobs = async (req, res) => {
 const jobId = req.params.id;
 const updateFields = req.body;

 try {
   const updatedJob = await Job.findByIdAndUpdate(
     jobId,
     updateFields,
     { new: true, runValidators: true }
   );
   if (!updatedJob) {
     return res.status(404).json({ message: 'Job posting not found' });
   }
   res.status(200).json({ message: 'Job updated successfully', job: updatedJob });
 } catch (error) {
   console.log(error);
   res.status(500).json({ message: 'Error: ' + error });
 }
};

exports.handleDeleteJobs = async (req, res) => {
 const jobId = req.params.id;

 try {
   const deletedJob = await Job.findByIdAndDelete(jobId);
   if (!deletedJob) {
     return res.status(404).json({ message: 'Job posting not found' });
   }
   res.status(200).json({ message: 'Job deleted successfully' });
 } catch (error) {
   console.log(error);
   res.status(500).json({ message: 'Error: ' + error });
 }
};
