import React, {useState} from 'react';
import getSampleJdJSON from './jobData';
import JobCard from './components/JobCard';
import RoleFilter from './components/filters/RoleFilter';
import ExperienceFilter from './components/filters/ExperienceFilter';
import SalaryFilter from './components/filters/SalaryFilter';

const App = () => {
  const [selectedRole, setSelectedRole] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedSalary, setSelectedSalary] = useState(null);

  const jobData = getSampleJdJSON();

  
  let filteredJobs = jobData
  
  if (selectedRole.length > 0) {
    filteredJobs = filteredJobs.filter(job =>
      selectedRole.some(role =>
        role.label.toLowerCase() === job.jobRole.toLowerCase()
      )
    );
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
        <RoleFilter setSelectedRole={setSelectedRole} selectedRole={selectedRole} />
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

