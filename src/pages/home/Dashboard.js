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
  { Slno: "Jan", Firstname: 40, Lastname: "Test", Email: "My name",Phone: "My name" },
  { name: "Feb", value: 30, lastname: "Test", firstname: "My name" },
  { name: "Mar", value: 50, lastname: "Test", firstname: "My name" },
  { name: "Apr", value: 80, lastname: "Test", firstname: "My name" },
  { name: "May", value: 60, lastname: "Test", firstname: "My name" },
  { name: "May", value: 60, lastname: "Test", firstname: "My name" },
];

const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 200 },
];

// Alternate row colors
const rowClass = (data: any, index: number) => {
  return { "row-white": index % 2 === 0, "row-grey": index % 2 !== 0 };
};

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
                  {stat.change}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ marginTop: 4 }}>
            <Grid item xs={12} md={8}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Visitors History
                        </Typography>
                    </Grid>
                    <Grid item>
                        {/* Global Search Input */}
                        <span className="p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText
                                value={globalFilter}
                                onChange={(e) => setGlobalFilter(e.target.value)}
                                placeholder="Search..."
                            />
                        </span>
                    </Grid>
                </Grid>

              <ResponsiveContainer minWidth="150%" height={"auto"}>
                <div className="card">
                  <DataTable
                    value={barData}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: "50rem" }}
                    globalFilter={globalFilter} // Apply the global filter here.

                  >
                    <Column
                      field="name"
                      header="Sl No"
                      style={{ width: "10%" }}
                      sortable
                    ></Column>
                    <Column
                      field="value"
                      header="Firstname"
                      style={{ width: "10%" }}
                      sortable
                    ></Column>
                    <Column
                      field="lastname"
                      header="Lastname"
                      style={{ width: "10%" }}
                      sortable
                    ></Column>
                    <Column
                      field="firstname"
                      header="Email"
                      style={{ width: "10%" }}
                      sortable
                    ></Column>
                    <Column
                      field="firstname"
                      header="Phone"
                      style={{ width: "10%" }}
                      sortable
                    ></Column>
                    <Column
                      field="firstname"
                      header="Date"
                      style={{ width: "10%" }}
                      sortable
                    ></Column>
                    <Column
                      field="firstname"
                      header="CheckIN"
                      style={{ width: "10%" }}
                      sortable
                    ></Column>
                    <Column
                      field="firstname"
                      header="Check Out"
                      style={{ width: "10%" }}
                      sortable
                    ></Column>
                  </DataTable>
                </div>
              </ResponsiveContainer>
            
          
        </Grid>
      </Grid>

      {/* Development Activity and Charts */}
      {/* <Grid container spacing={3} sx={{ marginTop: 4 }}>
       
        <Grid item xs={12} md={8}>
         
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
        </Grid> */}

      {/* Right: Bar Charts */}
      {/* <Grid item xs={12} md={4}>
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
         </Grid>*/}
    </Box>
  );
};

export default Dashboard;
