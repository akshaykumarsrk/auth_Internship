import { Card, CardContent, Typography } from "@mui/material";

export default function AdminPanel() {
  return (
    <Card sx={{ margin: 4, padding: 2 }}>
      <CardContent>
        <Typography variant="h4">Admin Dashboard</Typography>
        <Typography>Only ADMIN users can see this page 🎯</Typography>
      </CardContent>
    </Card>
  );
}
