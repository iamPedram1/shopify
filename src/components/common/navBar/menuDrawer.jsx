import { Grid, Box, IconButton, Typography, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";

const MenuDrawer = (anchor, toggleDrawer, navBarItems) => {
  return (
    <Box sx={{ width: 378, padding: "1rem 0" }}>
      <Grid container rowSpacing={2} direction="column" alignItems="flex-start">
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
  );
};

export default MenuDrawer;
