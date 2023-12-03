// JobItem.js
import React from 'react';

const JobItem = ({ job, isSelected, onSelect }) => {
  return (
    <div
      style={{
        border: isSelected ? '2px solid green' : '1px solid gray',
        padding: '10px',
        margin: '10px',
      }}
      onClick={() => onSelect(job.id)}
    >
      <h3>{job.title}</h3>
      <p>{job.description}</p>
    </div>
  );
};

export default JobItem;
