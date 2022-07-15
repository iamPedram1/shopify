import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../store/state/products";
import ItemCard from "./common/home/itemCard";
import Filter from "./common/home/filter";
import Categories from "./common/home/categories";
import _ from "lodash";

const Home = () => {
  // Local state and Redux Store
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [showCategory, setShowCategory] = useState(false);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.entities.products);

  // ComponentDidMount
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  const filtered = showCategory ? category : products;

  // Event Handlers
  const handleSort = (sortBy, ascOrDesc, isNested = false) => {
    if (sortBy === "nothing") return setSortedData([]);
    const sorted = _.orderBy(
      filtered,
      (item) => (isNested ? item.rating[sortBy] : item[sortBy]),
      ascOrDesc
    );
    setSortedData(sorted);
  };
  console.log("Sort", sortBy);
  // Render
  return (
    <>
      <Box sx={{ margin: "2rem 5rem 0" }}>
        <Grid container spacing={2} justifyContent="flex-start">
          <Filter
            sortBy={sortBy}
            setSortBy={setSortBy}
            handleSort={handleSort}
          />
          <Categories
            setSortedBy={setSortBy}
            setCategory={setCategory}
            setShowCategory={setShowCategory}
            setSortedData={setSortedData}
          />
        </Grid>
      </Box>
      <Box sx={{ margin: "2rem 5rem" }}>
        <Grid
          container
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {sortedData.length === 0
            ? filtered.map((item) => <ItemCard key={item.id} item={item} />)
            : sortedData.map((item) => <ItemCard key={item.id} item={item} />)}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
