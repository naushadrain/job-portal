import React, { useState } from "react";

const PostJob = () => {
  const [job, setJob] = useState({ title: "", company: "", location: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Job Posted: ${job.title}`);
  };

  return (
    <div className="col-md-8 offset-md-2">
      <h3>Post a New Job</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Job Title</label>
          <input type="text" className="form-control"
            onChange={(e) => setJob({ ...job, title: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label>Company Name</label>
          <input type="text" className="form-control"
            onChange={(e) => setJob({ ...job, company: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label>Location</label>
          <input type="text" className="form-control"
            onChange={(e) => setJob({ ...job, location: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control"
            onChange={(e) => setJob({ ...job, description: e.target.value })} required />
        </div>
        <button className="btn btn-primary w-100">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
