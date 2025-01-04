import { InputText } from "primereact/inputtext";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import Dashboardtable from "./Dashboardtable";

// Hardcoded data
const stats = [
  { label: "Customers", value: 621, change: "-1%", positive: false },
  { label: "Total Visors", value: 43, change: "+6%", positive: true },
  { label: "Today vistors", value: 17, change: "-3%", positive: false },
  { label: "Youtube", value: 7, change: "+9%", positive: true },
  { label: "Facebook", value: "27.3k", change: "+3%", positive: true },
  { label: "Friends", value: "$95", change: "-2%", positive: false },
];

const activity = [
  {
    user: "Ronald Bradley",
    commit: "Initial commit",
    date: "May 6, 2018",
  },
  {
    user: "Russell Gibson",
    commit: "Main structure",
    date: "April 22, 2018",
  },
  {
    user: "Beverly Armstrong",
    commit: "Left sidebar adjustments",
    date: "April 15, 2018",
  },
];

// eslint-disable-next-line no-sparse-arrays
const barData = [
  {
    Slno: "1",
    Firstname: "Kiran",
    Lastname: "Lali",
    Email: "Kiran@gmail.com",
    Phone: "+91 8877664433",
    Date: "2024-12-30",
    Checkin: "10AM",
    Checkout: "11AM",
  },
  {
    Slno: "2",
    Firstname: "Sakshi",
    Lastname: "Lali",
    Email: "Sakshigmail.com",
    Phone: "+91 9877664433",
    Date: "2024-10-02",
    Checkin: "12PM",
    Checkout: "11AM",
  },
  ,
  {
    Slno: "3",
    Firstname: "Huduga",
    Lastname: "Hiremath",
    Email: "Huduga@gmail.com",
    Phone: "+91 7677664433",
    Date: "2024-12-05",
    Checkin: "10AM",
    Checkout: "5PM",
  },
  {
    Slno: "4",
    Firstname: "Ganga",
    Lastname: "Venkatgiri",
    Email: "Gangagmail.com",
    Phone: "+91 8877664433",
    Date: "2024-11-01",
    Checkin: "9AM",
    Checkout: "6PM",
  },
  {
    Slno: "5",
    Firstname: "Pritam",
    Lastname: "LNU",
    Email: "Pritamgmail.com",
    Phone: "+91 8877664433",
    Date: "2024-12-10",
    Checkin: "10AM",
    Checkout: "11AM",
  },
  {
    Slno: "6",
    Firstname: "Nandini",
    Lastname: "LNU",
    Email: "Nandhinigmail.com",
    Phone: "+91 8877664433",
    Date: "2024-09-06",
    Checkin: "6AM",
    Checkout: "11AM",
  },
];

const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 200 },
];

const Dashboard = () => {
  const [globalFilter, setGlobalFilter] = useState(""); // State for global filter.

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f4f6f8", minHeight: "auto" }}>
      {/* Header */}
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Dashboard
      </Typography>

      {/* Stats Grid */}
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Card sx={{ textAlign: "center" }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {stat.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: stat.positive ? green[500] : red[500],
                    fontWeight: "bold",
                  }}
                >
                  {/* {stat.change} */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br></br>
      <br></br>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Sales Activity
        </Typography>
        <Card>
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
        </Card>
      </Grid>
      <br></br>

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
