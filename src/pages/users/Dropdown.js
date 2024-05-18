import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// export default function Dropdown() {

 const Dropdown = ({ handleDataChange }) => {
  // const [Type, setAge] = useState('')

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  // const [inputValue, setInputValue] = useState('Admin');
  
  const handleChange = (event) => {
   // setInputValue(event.target.value);
    handleDataChange(event.target.value);
   // console.log("inputValue", event.target.value)
  };


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role *</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={"Admin"}>Admin</MenuItem>
          <MenuItem value={"Employee"}>Employee</MenuItem>
          <MenuItem value={"User"}>User</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Dropdown;