import React, {useState} from 'react';
import getSampleJdJSON from './jobData';
import JobCard from './components/JobCard';
import RoleFilter from './components/filters/RoleFilter';

const App = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const jobData = getSampleJdJSON();
  
  let filteredJobs = jobData

  if (selectedRole) { 
    filteredJobs = jobData.filter(job => job.jobRole.toLowerCase() === selectedRole.label.toLowerCase())
  }

  return (
    <>
      <div className="filtersContainer">
        <RoleFilter setSelectedRole={setSelectedRole}/>
      </div>  
      <div className="cardContainer">
        {filteredJobs.map(job =>
          <JobCard key={job.jdUid} job={job} />
        )}
      </div>
    </>
  );
};

export default App;
