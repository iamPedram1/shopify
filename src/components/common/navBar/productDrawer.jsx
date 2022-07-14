import {
  Grid,
  Box,
  IconButton,
  Button,
  Typography,
  Card,
  Chip,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {
  showCount,
  handleAddItem,
  handleRemoveItem,
} from "./../../../services/service";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const ProductDrawer = (anchor, toggleDrawer, cart) => {
  const shoppingCart = useSelector((state) => state.entities.shoppingCart);
  console.log("Shopping Cart", shoppingCart);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: 378,
        padding: "1rem 0",
        margin: "1rem ",
      }}
    >
      <IconButton
        sx={{ margin: "1rem 0 0" }}
        onClick={toggleDrawer(anchor, false)}
      >
        <CloseIcon />
      </IconButton>
      <Grid
        container
        rowSpacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {cart.length !== 0 ? (
          cart.map((item, index) => (
            <Grid item key={index}>
              <Card sx={{ width: 300, boxShadow: "0 0 0 1px #c3c3c3" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  sx={{ objectFit: "contain" }}
                  alt="product"
                />
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    <Grid container alignItems="center">
                      <AttachMoneyIcon
                        sx={{ position: "relative", bottom: "1px" }}
                      />
                      {item.price}
                    </Grid>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleAddItem(item, dispatch)}
                      >
                        <AddIcon />
                      </Button>
                    </Grid>
                    <Grid item>
                      <Chip
                        variant="outlined"
                        label={item.count}
                        color="secondary"
                        icon={<ShoppingCartIcon fontSize="small" />}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleRemoveItem(item, dispatch)}
                      >
                        <RemoveIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Box sx={{ margin: "5rem 0" }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <h1>No Item in Cart</h1>
              </Grid>
              <Grid item>
                <LocalMallOutlinedIcon
                  sx={{ fontSize: "8rem", color: "orange" }}
                />
              </Grid>
            </Grid>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default ProductDrawer;
