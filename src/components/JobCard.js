import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => (
  <div className="card shadow-sm h-100">
    <div className="card-body">
      <h5 className="card-title">{job.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
      <p className="card-text">
        <strong>Location:</strong> {job.location}<br />
        <strong>Salary:</strong> {job.salary}
      </p>
      <Link to={`/job/${job.id}`} className="btn btn-primary btn-sm">View Details</Link>
    </div>
  </div>
);

export default JobCard;
