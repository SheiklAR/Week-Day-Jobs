import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const roles = [
  { label: 'Frontend' },
  { label: 'Backend' },
  { label: 'IOS' },
  { label: 'Flutter' },
  { label: 'React Native' },
  { label: 'Android' },
  { label: 'Tech Lead' },
];

export default function RoleFilter({ setSelectedRole, selectedRole }) {
  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={roles}
      getOptionLabel={(option) => option.label}
      value={selectedRole}
      onChange={(event, value) => setSelectedRole(value)}
      filterSelectedOptions
      sx={{ width: 200 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Roles"
          placeholder="Select roles"
        />
      )}
    />
  );
}
