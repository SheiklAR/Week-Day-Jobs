import React, {useState} from 'react';
import getSampleJdJSON from './jobData';
import JobCard from './components/JobCard';
import RoleFilter from './components/filters/RoleFilter';
import ExperienceFilter from './components/filters/ExperienceFilter';

const App = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const jobData = getSampleJdJSON();
  
  let filteredJobs = jobData

  if (selectedRole) { 
    filteredJobs = filteredJobs.filter(job => job.jobRole.toLowerCase() === selectedRole.label.toLowerCase())
  }

  if (selectedExperience) { 
    filteredJobs = filteredJobs.filter(job => job.minExp <= parseInt(selectedExperience.label))
  }

  return (
    <>
      <div className="filtersContainer">
        <RoleFilter setSelectedRole={setSelectedRole} />
        <ExperienceFilter setSelectedExperience={setSelectedExperience} />
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
