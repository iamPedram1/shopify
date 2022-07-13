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
import { loadProducts } from "../store/state/products";
import ItemCard from "./common/itemCard";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.entities.products);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  console.log(products);
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
          {products &&
            products.map((item) => <ItemCard key={item.id} item={item} />)}
        </Grid>
      </Box>
    </>
  );
};

export default Home;

{
  /* <Card sx={{ width: 345, height: 700 }}>
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
                </Card> */
}
