import React from "react";
import { useAuth } from "../context/AuthContext";
import { Box, Typography, Button, Card } from "@mui/material";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Welcome, {user?.email}!</Typography>
      <Typography variant="subtitle1">Role: {user?.role}</Typography>

      <Button
        variant="contained"
        color="error"
        sx={{ mt: 2 }}
        onClick={logout}
      >
        Logout
      </Button>

      {user?.role === "ADMIN" && (
        <Card sx={{ mt: 4, p: 3, backgroundColor: "#f0f4ff" }}>
          <Typography variant="h5">Admin Panel</Typography>
          <Typography>Manage users, view stats, etc.</Typography>
        </Card>
      )}

      {user?.role === "USER" && (
        <Card sx={{ mt: 4, p: 3, backgroundColor: "#f4f4f4" }}>
          <Typography variant="h5">User Panel</Typography>
          <Typography>View your profile here.</Typography>
        </Card>
      )}
    </Box>
  );
}
