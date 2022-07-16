import { Grid, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Pagination as MuiPagination } from "@mui/material";
import { pageChanged } from "../../../store/state/currentPage";
import _ from "lodash";
const Pagination = ({ data }) => {
  // Redux Setup
  const dispatch = useDispatch();
  const { pageSize, currentPage } = useSelector((state) => state.entities);

  // Calculate Pagination Pages
  const pageNumber = Math.ceil(data.length / pageSize);

  //Event Handler
  const handlePageChange = (value) => {
    dispatch(pageChanged(value));
  };

  // Render
  return (
    <>
      <Box sx={{ margin: "2rem 0 4rem" }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <MuiPagination
              variant="outlined"
              color="primary"
              page={currentPage}
              disabled={pageNumber === 1}
              onChange={(e, value) => handlePageChange(value)}
              count={pageNumber}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Pagination;
