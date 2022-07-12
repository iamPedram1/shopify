import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  Grid,
  Box,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../store/products";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.entities.products);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  products.map((item) => console.log("item", item));
  return (
    <>
      <Box sx={{ margin: "2rem 5rem" }}>
        <Grid
          container
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {products[0] &&
            products[0].map((item) => (
              <Grid item>
                <div
                  className="card"
                  style={{ width: "18rem", height: "400px" }}
                >
                  <img
                    src={item.image}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    {/* <p className="card-text">{item.description}</p> */}
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>

                {/* <Card sx={{ width: 345, height: 700 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{ height: "250px", objectFit: "contain" }}
                    image={item.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card> */}
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
