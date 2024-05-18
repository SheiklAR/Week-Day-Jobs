import React from 'react';
import SimplePopper from './Popper';

const JobCard = ({ job }) => {
  const { 
    jdUid,
    jobDetailsFromCompany: description, 
    logoUrl, 
    companyName, 
    jobRole, 
    location, 
    minJdSalary, 
    maxJdSalary, 
    minExp, 
    maxExp 
  } = job;

  const subdescription = description.substring(0, 350);

  return (
    <div className="card">
      <div className="inner-card">
        <div className="company">
          <Header
            logoUrl={logoUrl}
            companyName={companyName}
            jobRole={jobRole}
            location={location}
          />
          <Salary minJdSalary={minJdSalary} maxJdSalary={maxJdSalary} />
          <Description description={description} subdescription={subdescription} />
          <Experience minExp={minExp} maxExp={maxExp} />
          <EasyApplyButton />
          <UnlockReferralsButton />
        </div>
      </div>
    </div>
  );
};

const Header = ({ logoUrl, companyName, jobRole, location }) => (
  <div className="cardTop">
    <img src={logoUrl} className="logo" alt={`${companyName} logo`} />
    <div>
      <div className="name">
        <div className="companyName">{companyName}</div>
        <div className="position">{jobRole}</div>
        <div className="location">{location}</div>
      </div>
    </div>
  </div>
);

const Salary = ({ minJdSalary, maxJdSalary }) => (
  <div className="salary">
    {minJdSalary != null ? (
      <div>Estimated Salary: ${minJdSalary}-${maxJdSalary}</div>
    ) : (
      <div>Maximum Estimated Salary: ${maxJdSalary}</div>
    )}
    <span className="material-symbols-outlined">check_box</span>
  </div>
);

const Description = ({ description, subdescription }) => (
  <div className="about">
    <div className="about-company">About Company:</div>
    <div className="about-us">
      <p className="bottom-overflow-fade">{subdescription}</p>
      <div className="see-more">
        <SimplePopper description={description} />
      </div>
    </div>
  </div>
);

const Experience = ({ minExp, maxExp }) => (
  <div>
    <div className="experience">Experience</div>
    <div className="exp-year">{minExp ? `${minExp}-${maxExp}` : 0} years</div>
  </div>
);

const EasyApplyButton = () => (
  <div className="button">
    <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', color: '#F9DB78' }}>
      electric_bolt
    </span>
    <span style={{ verticalAlign: 'middle' }}>Easy Apply</span>
  </div>
);

const UnlockReferralsButton = () => (
  <div id="button">
    Unlock referrals asks
  </div>
);

export default JobCard;
