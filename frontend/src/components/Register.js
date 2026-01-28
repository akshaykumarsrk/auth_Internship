import { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Box } from "@mui/material";
import API from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/register", form);
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <Card
        sx={{
          width: 400,
          padding: 3,
          borderRadius: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Create Account 🚀
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              variant="outlined"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <TextField
              fullWidth
              label="Email Address"
              type="email"
              margin="normal"
              variant="outlined"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                py: 1.2,
                fontSize: "1rem",
                borderRadius: 3,
                background: "linear-gradient(90deg, #667eea, #764ba2)",
              }}
            >
              Register
            </Button>
          </form>

          <Typography align="center" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <span
              style={{ color: "#667eea", cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
