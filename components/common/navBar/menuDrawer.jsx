import { Grid, Box, IconButton, Typography, Divider } from "@mui/material";
import Link from "next/link";
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
        {navBarItems.map((item) => (
          <Grid key={item.name} item>
            <Link className="drawer__menu" href={item.to}>
              <a
                onClick={toggleDrawer(anchor, false)}
                style={{ margin: "0 2rem", fontWeight: "bold" }}
              >
                {item.name}
              </a>
            </Link>
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
              <ShopOutlinedIcon sx={{ fontSize: "10rem", color: "#FFA500" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuDrawer;
