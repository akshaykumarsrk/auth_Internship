import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, role, logout } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Auth System
        </Typography>

        {!token && <Button color="inherit" component={Link} to="/login">Login</Button>}
        {!token && <Button color="inherit" component={Link} to="/register">Register</Button>}

        {token && <Button color="inherit" component={Link} to="/profile">Profile</Button>}

        {role === "ADMIN" && (
          <Button color="inherit" component={Link} to="/admin">Admin Panel</Button>
        )}

        {token && <Button color="inherit" onClick={logout}>Logout</Button>}
      </Toolbar>
    </AppBar>
  );
}
