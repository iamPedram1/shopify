import { useState } from "react";
import {
  AppBar,
  Grid,
  Box,
  IconButton,
  Badge,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navBarItems = [
  { name: "Home", to: "/" },
  { name: "Register", to: "/register" },
  { name: "Login", to: "/login" },
  { name: "About Us", to: "/about-us" },
];

const NavBar = () => {
  const [drawerDirection, setDrawerDirection] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerDirection({ ...drawerDirection, [anchor]: open });
  };
  const list = (anchor) => (
    <>
      <Box sx={{ width: 250, padding: "1rem 0" }}>
        <Grid
          container
          rowSpacing={2}
          direction="column"
          alignItems="flex-start"
        >
          <IconButton
            sx={{ margin: "1rem 0 0" }}
            onClick={toggleDrawer(anchor, false)}
          >
            <CloseIcon />
          </IconButton>
          {navBarItems.map((item, index) => (
            <Grid item key={index}>
              <NavLink
                className="drawer__menu"
                to={item.to}
                onClick={toggleDrawer(anchor, false)}
              >
                {item.name}
              </NavLink>
            </Grid>
          ))}
          <Grid item sx={{ width: "100%" }}>
            <Divider />
          </Grid>
          <Grid item sx={{ padding: "1rem", width: "100%" }}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h3">Shopify</Typography>
              </Grid>
              <Grid item>
                <ShopOutlinedIcon sx={{ fontSize: "10rem" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#000" }}>
        <Box margin="0.5rem 1rem">
          <Grid
            container
            direction="row-reverse"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              {/* Desktop NavBar */}
              <Grid
                container
                columnSpacing={4}
                direction="row-reverse"
                alignItems="center"
                className="desktop__navbar"
              >
                {navBarItems.map((item, index) => (
                  <Grid item key={index}>
                    <NavLink className="navbar__item" to={item.to}>
                      {item.name}
                    </NavLink>
                  </Grid>
                ))}
              </Grid>
              {/* Mobile NavBar */}
              <Grid item className="mobile__navbar">
                <IconButton
                  onClick={toggleDrawer("right", true)}
                  sx={{ color: "#fff" }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container columnSpacing={2} alignItems="end">
                <Grid item>
                  <IconButton sx={{ color: "#fff" }}>
                    <Badge badgeContent={4} color="error">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="h4">Shopify</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </AppBar>

      <div>
        <Drawer
          anchor="right"
          open={drawerDirection["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </div>
    </>
  );
};

export default NavBar;
