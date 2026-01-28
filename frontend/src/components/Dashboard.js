import React from "react";
import { useAuth } from "../context/AuthContext";
import { Box, Typography, Button, Card, Grid } from "@mui/material";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 2,
          background: "linear-gradient(90deg, #4f46e5, #6366f1)",
          color: "white",
          textAlign: "center",
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Welcome, {user?.email}!
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          Role: {user?.role}
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{ mt: 2 }}
          onClick={logout}
        >
          Logout
        </Button>
      </Box>

      {/* Panels */}
      <Grid container spacing={3}>
        {user?.role === "ADMIN" && (
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 3,
                backgroundColor: "#e0e7ff",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                Admin Panel
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Manage users, view statistics, configure settings.
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Manage Users
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    View Reports
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Settings
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        )}

        {user?.role === "USER" && (
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 3,
                backgroundColor: "#f4f4f4",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                User Panel
              </Typography>
              <Typography sx={{ mb: 2 }}>
                View your profile, orders, and notifications here.
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Profile Info
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Orders
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Notifications
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
