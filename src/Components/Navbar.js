import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#808080"}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ mr: 2 }}>
              <IconButton size="large" color="inherit">
                <Menu />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
            Welcome
            </Typography>
            <Button color="inherit" startIcon={<HomeIcon />} component={Link} to="/Todo">
             Todo
            </Button>
            <Button color="inherit" startIcon={<InfoIcon />} component={Link} to="/Ternaryy">
              Ternary
            </Button>
            <Button color="inherit" startIcon={<MailOutlineIcon />} component={Link} to="/Logical">
            Logical
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="sm" sx={{ marginTop: '80px', padding: '20px' }}>
      </Container>
     
    </>
  );
};

export default Navbar;
