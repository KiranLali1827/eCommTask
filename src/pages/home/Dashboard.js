import React from "react";
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
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

// Hardcoded data
const stats = [
  { label: "New Tickets", value: 43, change: "+6%", positive: true },
  { label: "Closed Today", value: 17, change: "-3%", positive: false },
  { label: "New Replies", value: 7, change: "+9%", positive: true },
  { label: "Followers", value: "27.3k", change: "+3%", positive: true },
  { label: "Daily Earnings", value: "$95", change: "-2%", positive: false },
  { label: "Products", value: 621, change: "-1%", positive: false },
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

const barData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 50 },
  { name: "Apr", value: 80 },
  { name: "May", value: 60 },
];

const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 200 },
];

const Dashboard = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
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
                  {stat.change}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Development Activity and Charts */}
      <Grid container spacing={3} sx={{ marginTop: 4 }}>
        {/* Left: Line Chart + Activity */}
        <Grid item xs={12} md={8}>
          {/* Line Chart */}
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Development Activity
              </Typography>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#1976d2"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Activity Table */}
          <Card sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Activity
              </Typography>
              <List>
                {activity.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>{item.user.charAt(0)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.user}
                        secondary={
                          <>
                            <Typography
                              component="span"
                              variant="body2"
                              color="textPrimary"
                            >
                              {item.commit}
                            </Typography>
                            <Typography
                              component="span"
                              variant="body2"
                              sx={{ marginLeft: 1 }}
                            >
                              {item.date}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    {index < activity.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Right: Bar Charts */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Chart Title
              </Typography>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Chart Title
              </Typography>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
