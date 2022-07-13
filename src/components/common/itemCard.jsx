import { Grid } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function titleCase(str) {
  let splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

const ItemCard = ({ item }) => {
  return (
    <>
      <Grid item>
        <div
          style={{ width: "370px", height: "500px", position: "relative" }}
          className="card text-black"
        >
          <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
          <img
            src={item.image}
            style={{ width: "100%", height: "40%", objectFit: "contain" }}
            className="card-img-top"
            alt="Apple Computer"
          />
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">{item.title}</h5>
            </div>
            <div>
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
              <div className="d-flex justify-content-between mb-2">
                <span>Category</span>
                <span>{titleCase(item.category)}</span>
              </div>
            </div>
            <div className="d-flex justify-content-between  total font-weight-bold mb-2">
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
            <div
              style={{ position: "absolute", bottom: "10px" }}
              className="d-flex justify-content-between align-items-center mt-3 mb-1"
            >
              <button type="button" className="btn btn-primary">
                <ShoppingCartIcon />
              </button>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default ItemCard;
