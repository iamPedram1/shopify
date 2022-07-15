import { useState } from "react";
import { Grid, InputLabel, FormControl, MenuItem, Select } from "@mui/material";
import { useSelector } from "react-redux";
import { titleCase } from "./../../../services/service";

const Categories = ({
  setCategory,
  setShowCategory,
  setSortedData,
  setSortedBy,
}) => {
  // Redux Store
  const [selectCategory, setSelectCategory] = useState("");

  const products = useSelector((state) => state.entities.products);

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
    setSelectCategory(value);
    setShowCategory(true);
    const categories = products.filter((item) => item.category === value);
    setCategory(categories);
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
