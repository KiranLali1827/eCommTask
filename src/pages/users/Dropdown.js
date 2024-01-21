import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {
  const [Type, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Employee Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Type}
          label="Employee Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Employee</MenuItem>
          <MenuItem value={30}>User</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
