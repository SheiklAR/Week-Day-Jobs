import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const salaries = [
  { label: '10' },
  { label: '20' },
  { label: '30' },
  { label: '40' },
  { label: '50' },
  { label: '60' },
];

const SalaryFilter = ({ setSelectedSalary }) => {
  return (
    <Autocomplete
      disablePortal
      id="salary"
      options={salaries}
      sx={{ width: 200 }}
      onChange={(event, value) => setSelectedSalary(value)}
      renderInput={(params) => <TextField {...params} label="Salary" />}
    />
  );
};

export default SalaryFilter;
