import { Grid, MenuItem, FormControl, Select, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { pageChanged } from "../../../store/state/currentPage";
import { pageSizeChanged } from "../../../store/state/pageSize";

const SelectPagination = () => {
  // Redux
  const dispatch = useDispatch();
  const { pageSize } = useSelector((state) => state.entities);
  // Event Handler
  const handleChange = ({ target }) => {
    dispatch(pageSizeChanged(target.value));
    dispatch(pageChanged(1));
  };

  return (
    <>
      <Grid item xs={8} sm={6} md={4}>
        <FormControl sx={{ width: "100%", backgroundColor: "#fff" }}>
          <InputLabel>Item Per Page</InputLabel>
          <Select
            value={pageSize}
            label="Item Per Page"
            onChange={handleChange}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={999}>All</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default SelectPagination;
