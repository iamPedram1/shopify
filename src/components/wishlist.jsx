import { Grid, Box, Button, Chip, Tooltip, IconButton } from "@mui/material";
import {
  titleCase,
  counter,
  handleAddItem,
  handleRemoveItem,
} from "../services/service";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  itemAdded,
  itemRemoved,
  wishDataReceived,
} from "../store/state/wishlist";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist, shoppingCart } = useSelector((store) => store.entities);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist"));
    if (data !== null) {
      dispatch(wishDataReceived(data));
    }
  }, []);

  return (
    <>
      <Box sx={{ margin: "2rem 0" }}>
        {wishlist.length === 0 ? (
          <Box sx={{ marginTop: "7rem" }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <h1>Your Wishlist is Empty...!</h1>
              </Grid>
              <Grid item>
                <MoveToInboxIcon sx={{ fontSize: "20rem" }} />
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {wishlist.map((item) => (
              <Grid key={item.id} item>
                <div
                  style={{
                    width: "370px",
                    height: "500px",
                    position: "relative",
                  }}
                  className="card text-black"
                >
                  {wishlist.includes(item) ? (
                    <Tooltip title="Remove From Wishlist" arrow placement="top">
                      <IconButton
                        onClick={() => dispatch(itemRemoved(item))}
                        sx={{ width: "30px", height: "30px" }}
                      >
                        <StarIcon sx={{ color: "orange" }} />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Add to Wishlist" arrow placement="top">
                      <IconButton
                        onClick={() => dispatch(itemAdded(item))}
                        sx={{ width: "30px", height: "30px" }}
                      >
                        <StarBorderIcon sx={{ color: "orange" }} />
                      </IconButton>
                    </Tooltip>
                  )}

                  <img
                    src={item.image}
                    style={{
                      width: "100%",
                      height: "40%",
                      objectFit: "contain",
                    }}
                    className="card-img-top"
                    alt="product"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "30px",
                      width: "100%",
                    }}
                    className="card-body"
                  >
                    <div className="text-center">
                      <h5 className="card-title">{item.title}</h5>
                    </div>
                    <div className="mt-3">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Rating</span>
                        <span>
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
                        </span>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span>Category</span>
                        <span>{titleCase(item.category)}</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between  total font-weight-bold mb-1">
                      <span>Price</span>
                      <span>
                        <Grid
                          container
                          spacing={0.7}
                          direction="row"
                          alignItems="center"
                        >
                          <Grid item>
                            <AttachMoneyIcon />
                          </Grid>
                          <Grid item>{item.price}</Grid>
                        </Grid>
                      </span>
                    </div>
                    <Grid
                      container
                      sx={{ position: "relative", top: "20px" }}
                      spacing={2}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {counter(item, shoppingCart) === 0 ? (
                        <Grid item>
                          <Button
                            variant="contained"
                            endIcon={<ShoppingCartIcon />}
                            onClick={() => handleAddItem(item, dispatch)}
                          >
                            Add To Cart
                          </Button>
                        </Grid>
                      ) : (
                        <>
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
                              label={counter(item, shoppingCart)}
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
                        </>
                      )}
                    </Grid>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Wishlist;
