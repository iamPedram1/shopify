import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  IconButton,
  Button,
  Tooltip,
  Typography,
  Card,
  Chip,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";
import {
  handleAddItem,
  handleRemoveItem,
  calcTotalPrice,
} from "./../../../services/service";
import CloseIcon from "@mui/icons-material/Close";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const ProductDrawer = (anchor, toggleDrawer) => {
  // Redux Setup
  const { shoppingCart } = useSelector((state) => state.entities);
  const dispatch = useDispatch();
  //
  const totalPrice = calcTotalPrice(shoppingCart);
  // Render
  return (
    <Box
      sx={{
        width: 378,
      }}
    >
      <Box sx={{ backgroundColor: "dodgerblue", padding: "0.3rem 0" }}>
        <IconButton
          sx={{ margin: "0.3rem 0 0 0.5rem", color: "#fff" }}
          onClick={toggleDrawer(anchor, false)}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ padding: "1rem 0 5rem" }}>
        <Grid
          container
          rowSpacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {shoppingCart.length !== 0 ? (
            shoppingCart.map((item, index) => (
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
                    <Typography variant="h6" component="div">
                      <Grid
                        container
                        spacing={0.5}
                        direction="row"
                        alignItems="center"
                      >
                        <Grid item>
                          <PeopleOutlineIcon
                            sx={{
                              margin: "0 5px",
                            }}
                          />
                          {item.rating.count}
                        </Grid>
                        <Grid item>/</Grid>
                        <Grid item>
                          <StarBorderIcon
                            sx={{
                              marginRight: "5px",
                              color: "orange",
                              position: "relative",
                              bottom: "3px",
                            }}
                          />
                          {item.rating.rate}
                        </Grid>
                      </Grid>
                    </Typography>
                    <Typography variant="h6" component="div">
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
      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          width: 378,
          backgroundColor: "dodgerblue",
          color: "white",
          padding: "1rem 0",
        }}
      >
        <Box
          sx={{
            padding: "0 1rem",
          }}
        >
          <Grid container justifyContent="space-between" alignItems="flex-end">
            <Grid item>
              <h5>Total: {totalPrice}$ </h5>
            </Grid>
            <Grid item>
              {totalPrice < 0.1 ? (
                <Tooltip
                  title="Your Shopping Cart Is Empty"
                  placement="top"
                  arrow
                >
                  <div>
                    <button
                      disabled
                      type="button"
                      className="btn btn-danger"
                      onClick={toggleDrawer(anchor, false)}
                    >
                      Check-Out
                    </button>
                  </div>
                </Tooltip>
              ) : (
                <Link to="/check-out">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={toggleDrawer(anchor, false)}
                  >
                    Check-Out
                  </button>
                </Link>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDrawer;
