import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import API from "../api/axiosConfig";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    API.get("/profile").then(res => setProfile(res.data));
  }, []);

  if (!profile) return null;

  return (
    <Card sx={{ maxWidth: 500, margin: "40px auto", padding: 2 }}>
      <CardContent>
        <Typography variant="h4">User Profile</Typography>
        <Typography><b>Name:</b> {profile.name}</Typography>
        <Typography><b>Email:</b> {profile.email}</Typography>
        <Typography><b>Role:</b> {profile.role}</Typography>
      </CardContent>
    </Card>
  );
}
