import React from "react";
import { Grid, InputLabel, FormControl, MenuItem, Select } from "@mui/material";

const Filter = ({ sortBy, setSortBy, handleSort }) => {
  const handleChange = ({ target }) => {
    const { value } = target;
    setSortBy(value);
    const valueNsortPath = value.split("-");
    valueNsortPath[0] === "rate" || valueNsortPath[0] === "count"
      ? handleSort(valueNsortPath[0], valueNsortPath[1], true)
      : handleSort(valueNsortPath[0], valueNsortPath[1]);
  };

  return (
    <Grid item xs={6} sm={6} md={4}>
      <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
        <InputLabel>Filter By</InputLabel>
        <Select value={sortBy} label="Filter By" onChange={handleChange}>
          <MenuItem value="nothing">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"price-desc"}>Highest Price</MenuItem>
          <MenuItem value={"price-asc"}>Lowest Price</MenuItem>
          <MenuItem value={"rate-desc"}>Highest Star</MenuItem>
          <MenuItem value={"rate-asc"}>Lowest Star</MenuItem>
          <MenuItem value={"count-desc"}>Most Popular</MenuItem>
          <MenuItem value={"count-asc"}>Least Popular</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default Filter;
