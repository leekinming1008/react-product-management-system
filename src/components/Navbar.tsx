import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ marginLeft: 0 }}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ANGUS INVENTORY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavButton link="/" name="Home" />
            <NavButton link="/addProduct" name="Add Product" />
            <NavButton link="/favorites" name="Favorites" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
