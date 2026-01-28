import { useState, useContext } from "react";
import { TextField, Button, Card, CardContent, Typography, Box } from "@mui/material";
import API from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", form);
      login(res.data.token); // Save token and role in context
      alert("Login successful!");
      navigate("/dashboard"); // Redirect after login
    } catch (err) {
      alert("Invalid credentials! Please try again.");
    }
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
            Welcome Back 👋
          </Typography>

          <form onSubmit={handleSubmit}>
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
              Login
            </Button>
          </form>

          <Typography align="center" sx={{ mt: 2 }}>
            Don't have an account?{" "}
            <span
              style={{ color: "#667eea", cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
