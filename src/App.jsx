import React from 'react';
import getSampleJdJSON from './jobData';
import JobCard from './components/JobCard';

const App = () => {
  const jobData = getSampleJdJSON();
  console.log(jobData)

  return (
    <div className="app">
      {jobData.map(job =>
      <JobCard key={job.jdUid} job={job} />
      )}
    </div>
  );
};

export default App;
