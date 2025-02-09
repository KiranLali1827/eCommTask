// import {
//   Box,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
// } from "@mui/material";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
// } from "recharts";
// import Dashboardtable from "./Dashboardtable";
// import DashboardCards from "./DashboardCards";
// import AnalyticsDashboard from "./AnalyticsDashboard";

// const lineData = [
//   { name: "Jan", value: 400 },
//   { name: "Feb", value: 300 },
//   { name: "Mar", value: 500 },
//   { name: "Apr", value: 700 },
//   { name: "May", value: 200 },
// ];

// const Dashboard = () => {

//   return (
//     <Box sx={{ padding: 4, backgroundColor: "#f4f6f8", minHeight: "auto" }}>
//       {/* Header */}
//       <Typography variant="h4" sx={{ marginBottom: 4 }}>
//         Dashboard
//       </Typography>

//       {/* Stats Grid */}
//       <div>
//         <DashboardCards />
//       </div>

//       <br></br>
//       <br></br>
//       <Grid item xs={12} md={8}>
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           Sales Activity
//         </Typography>
//         <Card>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={200}>
//               <LineChart data={lineData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line
//                   type="monotone"
//                   dataKey="value"
//                   stroke="grey"
//                   strokeWidth={2}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </Grid>
//       <br></br>

//       <Grid item xs={12} md={8}>
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           Bring Pie Chart Here
//         </Typography>
//         {/* <Dashboardtable /> */}
//         <AnalyticsDashboard />
//       </Grid>
//       <br></br>

//       <Grid item xs={12} md={8}>
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           Visitors Data
//         </Typography>
//         <Dashboardtable />
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;

//Global filters
// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   IconButton,
//   Popover,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Button,
// } from "@mui/material";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
// } from "recharts";
// import Dashboardtable from "./Dashboardtable";
// import DashboardCards from "./DashboardCards";
// import AnalyticsDashboard from "./AnalyticsDashboard";

// const lineData = [
//   { name: "Jan", value: 400 },
//   { name: "Feb", value: 300 },
//   { name: "Mar", value: 500 },
//   { name: "Apr", value: 700 },
//   { name: "May", value: 200 },
// ];

// const Dashboard = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [activity, setActivity] = useState("");
//   const [month, setMonth] = useState("");
//   const [year, setYear] = useState("");
//   const [customDates, setCustomDates] = useState({ start: "", end: "" });

//   const handleFilterClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleFilterClose = () => {
//     setAnchorEl(null);
//   };

//   const handleApplyFilter = () => {
//     // Implement the logic to handle filter application
//     console.log("Filters Applied:", { activity, month, year, customDates });
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "filter-popover" : undefined;

//   return (
//     <Box sx={{ padding: 4, backgroundColor: "#f4f6f8", minHeight: "auto" }}>
//       {/* Header */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Typography variant="h4" sx={{ marginBottom: 4 }}>
//           Dashboard
//         </Typography>
//         <IconButton onClick={handleFilterClick} aria-describedby={id}>
//           <FilterListIcon />
//         </IconButton>
//         <Popover
//           id={id}
//           open={open}
//           anchorEl={anchorEl}
//           onClose={handleFilterClose}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "right",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//         >
//           <Box sx={{ p: 2, width: 300 }}>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               Filters
//             </Typography>
//             <FormControl fullWidth sx={{ mb: 2 }}>
//               <InputLabel>Activity</InputLabel>
//               <Select
//                 value={activity}
//                 onChange={(e) => setActivity(e.target.value)}
//               >
//                 <MenuItem value="sales">Sales Activity</MenuItem>
//                 <MenuItem value="customers">Customer Activity</MenuItem>
//               </Select>
//             </FormControl>
//             <FormControl fullWidth sx={{ mb: 2 }}>
//               <InputLabel>Month</InputLabel>
//               <Select value={month} onChange={(e) => setMonth(e.target.value)}>
//                 <MenuItem value="January">January</MenuItem>
//                 <MenuItem value="February">February</MenuItem>
//                 <MenuItem value="March">March</MenuItem>
//                 <MenuItem value="April">April</MenuItem>
//                 <MenuItem value="May">May</MenuItem>
//                 {/* Add remaining months */}
//               </Select>
//             </FormControl>
//             <FormControl fullWidth sx={{ mb: 2 }}>
//               <InputLabel>Year</InputLabel>
//               <Select value={year} onChange={(e) => setYear(e.target.value)}>
//                 <MenuItem value="2022">2022</MenuItem>
//                 <MenuItem value="2023">2023</MenuItem>
//                 <MenuItem value="2024">2024</MenuItem>
//                 {/* Add more years if needed */}
//               </Select>
//             </FormControl>
//             <Box display="flex" gap={2} mb={2}>
//               <TextField
//                 label="Start Date"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//                 value={customDates.start}
//                 onChange={(e) =>
//                   setCustomDates((prev) => ({ ...prev, start: e.target.value }))
//                 }
//                 fullWidth
//               />
//               <TextField
//                 label="End Date"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//                 value={customDates.end}
//                 onChange={(e) =>
//                   setCustomDates((prev) => ({ ...prev, end: e.target.value }))
//                 }
//                 fullWidth
//               />
//             </Box>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleApplyFilter}
//               fullWidth
//             >
//               Apply
//             </Button>
//           </Box>
//         </Popover>
//       </Box>

//       {/* Stats Grid */}
//       <div>
//         <DashboardCards />
//       </div>

//       <br />
//       <br />
//       <Grid item xs={12} md={8}>
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           Sales Activity
//         </Typography>
//         <Card>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={200}>
//               <LineChart data={lineData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line
//                   type="monotone"
//                   dataKey="value"
//                   stroke="grey"
//                   strokeWidth={2}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </Grid>
//       <br />
//       <Grid item xs={12} md={8}>
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           Bring Pie Chart Here
//         </Typography>
//         <AnalyticsDashboard />
//       </Grid>
//       <br />
//       <Grid item xs={12} md={8}>
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           Visitors Data
//         </Typography>
//         <Dashboardtable />
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;

//Filters beside Sales Activity
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  Popover,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import Dashboardtable from "./Dashboardtable";
import DashboardCards from "./DashboardCards";
import AnalyticsDashboard from "./AnalyticsDashboard";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Salesactivity from "./Salesactivity";


const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 200 },
];

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activity, setActivity] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [customDates, setCustomDates] = useState({ start: "", end: "" });

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleApplyFilter = () => {
    console.log("Filters Applied:", { activity, month, year, customDates });
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "filter-popover" : undefined;
  

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f4f6f8", minHeight: "auto" }}>
      {/* Header */}
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Dashboard
      </Typography>

      {/* Stats Grid */}
      <div>
        <DashboardCards />
      </div>

      <br />
      <br />

      {/* Sales Activity */}
      <Grid item xs={12} md={8}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginBottom: 2 }}
        >
          <Typography variant="h6" fontWeight="bold">
            Sales Activity
          </Typography>
          <IconButton onClick={handleFilterClick} aria-describedby={id}>
            <FilterListIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleFilterClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box sx={{ p: 2, width: 300 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Filters
              </Typography>
              {/* Activity Dropdown */}
              <FormControl fullWidth sx={{ mb: 2 }}>
                <Select
                  displayEmpty
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  renderValue={(selected) =>
                    selected ? selected : "Select Activity"
                  }
                >
                  <MenuItem value="" disabled>
                    Select Activity
                  </MenuItem>
                  <MenuItem value="sales">Sales Activity</MenuItem>
                  <MenuItem value="customers">Customer Activity</MenuItem>
                </Select>
              </FormControl>

              {/* Month Dropdown */}
              <FormControl fullWidth sx={{ mb: 2 }}>
                <Select
                  displayEmpty
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  renderValue={(selected) =>
                    selected ? selected : "Select Month"
                  }
                >
                  <MenuItem value="" disabled>
                    Select Month
                  </MenuItem>
                  <MenuItem value="January">January</MenuItem>
                  <MenuItem value="February">February</MenuItem>
                  <MenuItem value="March">March</MenuItem>
                  <MenuItem value="April">April</MenuItem>
                  <MenuItem value="May">May</MenuItem>
                  {/* Add remaining months */}
                </Select>
              </FormControl>

              {/* Year Dropdown */}
              <FormControl fullWidth sx={{ mb: 2 }}>
                <Select
                  displayEmpty
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  renderValue={(selected) =>
                    selected ? selected : "Select Year"
                  }
                >
                  <MenuItem value="" disabled>
                    Select Year
                  </MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2024">2024</MenuItem>
                  {/* Add more years if needed */}
                </Select>
              </FormControl>

              {/* Divider */}
              <Box sx={{ textAlign: "center", my: 1 }}>
                <Typography variant="body1">--- or ---</Typography>
              </Box>

              {/* Custom Dates Section */}
              <Box display="flex" gap={2} mb={2}>
                <TextField
                  label=""
                  placeholder="Start Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={customDates.start}
                  onChange={(e) =>
                    setCustomDates((prev) => ({
                      ...prev,
                      start: e.target.value,
                    }))
                  }
                  fullWidth
                />
                <TextField
                  label=""
                  placeholder="End Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={customDates.end}
                  onChange={(e) =>
                    setCustomDates((prev) => ({
                      ...prev,
                      end: e.target.value,
                    }))
                  }
                  fullWidth
                />
              </Box>

              {/* Apply Button */}
              <Button
                variant="contained"
                color="primary"
                onClick={handleApplyFilter}
                fullWidth
              >
                Apply
              </Button>
            </Box>
          </Popover>
        </Box>

        {/* Sales Chart */}
        {/* <Card>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="grey"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card> */}
        <Salesactivity />
      </Grid>

      <br />
      <Grid item xs={12} md={8}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Bring Pie Chart Here
        </Typography>
        <AnalyticsDashboard />
      </Grid>
      <br />
      <Grid item xs={12} md={8}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Visitors Data
        </Typography>
        <Dashboardtable />
      </Grid>
    </Box>
  );
};

export default Dashboard;
