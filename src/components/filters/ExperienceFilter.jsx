import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const experiences = [
  { label: '0' },{ label: '1' },{ label: '2' },
  { label: '3' },{ label: '4' },{ label: '5' },
  { label: '6' },{ label: '7' },{ label: '8' },
  { label: '9' },{ label: '10' },{ label: '11' },{label: '12'}
];

const ExperienceFilter = ({ setSelectedExperience }) => {
  return (
    <Autocomplete
      disablePortal
      id="experience"
      options={experiences}
      sx={{ width: 200 }}
      onChange={(event, value) => setSelectedExperience(value)}
      renderInput={(params) => <TextField {...params} label="Experience" />}
    />
  );
};

export default ExperienceFilter;
