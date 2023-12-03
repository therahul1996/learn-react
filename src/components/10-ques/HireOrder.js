// HireOrder.js
import React, { useState } from 'react';
import JobItem from './JobItem';

const HireOrder = () => {
  const [selectedJobs, setSelectedJobs] = useState([]);

  const handleJobSelect = (jobId) => {
    if (selectedJobs.includes(jobId)) {
      setSelectedJobs(selectedJobs.filter(id => id !== jobId));
    } else {
      setSelectedJobs([...selectedJobs, jobId]);
    }
  };

  const jobData = [
    { id: 1, title: 'Software Developer', description: 'Write awesome code.' },
    { id: 2, title: 'Graphic Designer', description: 'Create stunning visuals.' },
    { id: 3, title: 'Project Manager', description: 'Coordinate teams and projects.' },
  ];

  return (
    <div>
      <h1>Hire Order</h1>
      {jobData.map(job => (
        <JobItem
          key={job.id}
          job={job}
          isSelected={selectedJobs.includes(job.id)}
          onSelect={handleJobSelect}
        />
      ))}
      <div>
        <h2>Selected Jobs:</h2>
        <ul>
          {selectedJobs.map(selectedJobId => (
            <li key={selectedJobId}>
              {jobData.find(job => job.id === selectedJobId).title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HireOrder;
