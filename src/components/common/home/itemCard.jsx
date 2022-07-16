import { Grid, Button, Chip } from "@mui/material";
import {
  titleCase,
  counter,
  handleAddItem,
  handleRemoveItem,
} from "./../../../services/service";
import { useDispatch, useSelector } from "react-redux";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ItemCard = ({ item }) => {
  // Local and Redux State
  const dispatch = useDispatch();
  const { shoppingCart } = useSelector((state) => state.entities);

  // Render
  return (
    <>
      <Grid item>
        <div
          style={{ width: "370px", height: "500px", position: "relative" }}
          className="card text-black"
        >
          <img
            src={item.image}
            style={{ width: "100%", height: "40%", objectFit: "contain" }}
            className="card-img-top"
            alt="product"
          />
          <div
            style={{ position: "absolute", bottom: "30px", width: "100%" }}
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
    </>
  );
};

export default ItemCard;
