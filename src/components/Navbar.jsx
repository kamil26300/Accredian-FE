import { AppBar, Toolbar, Button } from "@mui/material";
import logo from "../assets/logo.png";

const Navbar = () => {
  const courses = [
    "Professional Certificate Program in Product Management",
    "PG Certificate Program in Strategic Product Management",
    "Executive Program in Data Driven Product Management",
    "Executive Program in Product Management and Digital Transformation",
    "Executive Program in Product Management",
    "Advanced Certification in Product Management",
    "Executive Program in Product Management and Project Management",
  ];

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="max-w-7xl mx-auto w-full justify-between">
        <img src={logo} alt="Accredian" className="h-8" />
        <div className="flex items-center gap-4">
          <Button variant="outlined">Login</Button>
          <Button variant="contained" color="primary">
            Try for free
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
