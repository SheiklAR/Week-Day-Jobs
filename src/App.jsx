import React, {useState} from 'react';
import getSampleJdJSON from './jobData';
import JobCard from './components/JobCard';
import RoleFilter from './components/filters/RoleFilter';
import ExperienceFilter from './components/filters/ExperienceFilter';
import SalaryFilter from './components/filters/SalaryFilter';

const App = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedSalary, setSelectedSalary] = useState(null);

  const jobData = getSampleJdJSON();
  
  let filteredJobs = jobData

  if (selectedRole) { 
    filteredJobs = filteredJobs.filter(job => job.jobRole.toLowerCase() === selectedRole.label.toLowerCase())
  }

  if (selectedExperience) { 
    filteredJobs = filteredJobs.filter(job => job.minExp <= parseInt(selectedExperience.label))
  }

  if (selectedSalary) { 
    filteredJobs = filteredJobs.filter(job => job.minJdSalary >= parseInt(selectedSalary.label))
  }

  return (
    <>
      <div className="filtersContainer">
        <RoleFilter setSelectedRole={setSelectedRole} />
        <ExperienceFilter setSelectedExperience={setSelectedExperience} />
        <SalaryFilter setSelectedSalary={setSelectedSalary} />
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
