import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
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

const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 200 },
];

const Dashboard = () => {

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
          Bring Pie Chart Here
        </Typography>
        {/* <Dashboardtable /> */}
        <AnalyticsDashboard />
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
