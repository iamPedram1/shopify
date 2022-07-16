import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../store/state/products";
import { paginate } from "../services/service";
import { localStorageReceived } from "../store/state/shoppingCart";
import ItemCard from "./common/home/itemCard";
import Filter from "./common/home/filter";
import Categories from "./common/home/categories";
import SelectPagination from "./common/home/selectPagination";
import Pagination from "./common/home/pagination";
import _ from "lodash";

const Home = () => {
  // Local state and Redux Store
  const [sortBy, setSortBy] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const [showCategory, setShowCategory] = useState(false);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const { currentPage, products, pageSize } = useSelector(
    (state) => state.entities
  );

  // ComponentDidMount
  useEffect(() => {
    dispatch(loadProducts());
    // Get Cart Data From Local Storage
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data !== null) {
      dispatch(localStorageReceived(data));
    }
  }, []);

  const dataToPaginate = showCategory ? category : products;
  const paginated =
    sortedData.length !== 0
      ? paginate(sortedData, currentPage, pageSize)
      : paginate(dataToPaginate, currentPage, pageSize);

  // Event Handlers
  const handleSort = (sortBy, ascOrDesc, isNested = false) => {
    if (sortBy === "nothing") return setSortedData([]);
    const sorted = _.orderBy(
      dataToPaginate,
      (item) => (isNested ? item.rating[sortBy] : item[sortBy]),
      ascOrDesc
    );
    setSortedData(sorted);
  };

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
          <SelectPagination />
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
          {paginated.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </Grid>
        {paginated.length > 0 && (
          <Pagination
            data={sortedData.length !== 0 ? sortedData : dataToPaginate}
          />
        )}
      </Box>
    </>
  );
};

export default Home;
