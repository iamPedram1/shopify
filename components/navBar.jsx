import { useState, useEffect } from "react";
import {
  AppBar,
  Grid,
  Box,
  IconButton,
  Badge,
  Drawer,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ProductDrawer from "./common/navBar/productDrawer";
import MenuDrawer from "./common/navBar/menuDrawer";
import styles from "../styles/Navbar.module.css";
import jwtDecode from "jwt-decode";

const navBarItems = [
  { name: "Home", to: "/" },
  { name: "Register", to: "/register" },
  { name: "Login", to: "/login" },
  { name: "About Me", to: "/about-me" },
  { name: "Wishlist", to: "/wishlist" },
];
const navBarItems2 = [
  { name: "Home", to: "/" },
  { name: "About Me", to: "/about-me" },
  { name: "Wishlist", to: "/wishlist" },
  { name: "Logout", to: "/log-out" },
];

const NavBar = () => {
  // Local State , And Redux
  const [loggedIn, setLoggedIn] = useState(false);
  const [drawerDirection, setDrawerDirection] = useState({
    right: false,
    left: false,
  });
  const { shoppingCart } = useSelector((state) => state.entities);

  // CDM
  useEffect(() => {
    const token = localStorage.getItem("token") || null;
    if (token !== null) {
      const decode = jwtDecode(token);
      if (decode && decode.name) {
        setLoggedIn(true);
      }
    }
  }, []);

  // Event Handlers
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerDirection({ ...drawerDirection, [anchor]: open });
  };

  //Render

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
                className={styles.desktop__navbar}
              >
                {loggedIn
                  ? navBarItems2.map((item) => (
                      <Grid item key={item.name}>
                        <Link href={item.to}>
                          <a className={styles.navbar__item}>{item.name}</a>
                        </Link>
                      </Grid>
                    ))
                  : navBarItems.map((item) => (
                      <Grid item key={item.name}>
                        <Link href={item.to}>
                          <a className={styles.navbar__item}>{item.name}</a>
                        </Link>
                      </Grid>
                    ))}
              </Grid>
              {/* Mobile NavBar */}
              <Grid item className={styles.mobile__navbar}>
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
                  <Typography variant="h4">Shopify</Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    sx={{ color: "#fff" }}
                    onClick={toggleDrawer("left", true)}
                  >
                    <Badge
                      badgeContent={
                        shoppingCart.length !== 0 ? shoppingCart.length : "0"
                      }
                      color="error"
                    >
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
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
          {MenuDrawer("right", toggleDrawer, navBarItems)}
        </Drawer>
      </div>
      <div>
        <Drawer
          anchor="left"
          open={drawerDirection["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {ProductDrawer("left", toggleDrawer)}
        </Drawer>
      </div>
    </>
  );
};

export default NavBar;
