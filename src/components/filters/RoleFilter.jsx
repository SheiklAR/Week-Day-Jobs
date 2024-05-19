import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const roles = [
  { label: 'Frontend' },
  { label: 'Backend' },
  { label: 'IOS' },
  { label: 'Flutter' },
  { label: 'React Native' },
  { label: 'Android' },
  { label: 'Tech Lead' },
];

const RoleFilter = ({ setSelectedRole }) => {
  return (
    <Autocomplete
      disablePortal
      id="roles"
      options={roles}
      sx={{ width: 200 }}
      onChange={(event, value) => setSelectedRole(value)}
      renderInput={(params) => <TextField {...params} label="Role" />}
    />
  );
};

export default RoleFilter;
