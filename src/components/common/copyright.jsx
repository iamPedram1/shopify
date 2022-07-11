import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const CopyRight = (props) => {
  return (
    <Typography color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link to="https://mui.com/">Shopify</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default CopyRight;
