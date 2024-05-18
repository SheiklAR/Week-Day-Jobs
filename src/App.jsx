import React from 'react';
import getSampleJdJSON from './jobData';
import JobCard from './components/JobCard';

const App = () => {
  const jobData = getSampleJdJSON();
  const job = jobData[0]
  console.log(jobData)

  return (
    <div className="app">
      <JobCard key={job.jdUid} job={job} />
    </div>
  );
};

export default App;
