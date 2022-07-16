import { useState } from "react";
import { Grid, InputLabel, FormControl, MenuItem, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { titleCase } from "./../../../services/service";
import { pageChanged } from "../../../store/state/currentPage";

const Categories = ({
  setCategory,
  setShowCategory,
  setSortedData,
  setSortedBy,
}) => {
  // Redux Store
  const [selectCategory, setSelectCategory] = useState("");
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.entities);

  // Event Handler
  const getCategories = () => {
    let categories = [];
    products.forEach((item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    });
    return categories;
  };
  const handleChange = ({ target }) => {
    const { value } = target;
    if (value === "nothing") return setShowCategory(false);
    const categories = products.filter((item) => item.category === value);
    setSelectCategory(value);
    setShowCategory(true);
    setCategory(categories);
    dispatch(pageChanged(1));
    setSortedBy("nothing");
    setSortedData([]);
  };
  return (
    <Grid item xs={8} sm={6} md={4}>
      <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
        <InputLabel>Catagory</InputLabel>
        <Select value={selectCategory} onChange={handleChange} label="Category">
          <MenuItem value="nothing">
            <em>None</em>
          </MenuItem>
          {getCategories().map((item, index) => (
            <MenuItem key={index} value={item}>
              {titleCase(item)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default Categories;
