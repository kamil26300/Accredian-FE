import { AppBar, Toolbar, Button } from "@mui/material";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="max-w-7xl mx-auto w-full justify-between">
        <img src={logo} alt="Accredian" className="h-8" />
        <div className="flex items-center gap-4">
          <Button variant="contained" color="primary">
            Contact Expert
          </Button>
          <Button variant="outlined">Explore</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
