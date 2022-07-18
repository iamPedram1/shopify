import { Typography } from "@mui/material";
import Link from "next/link";

const CopyRight = (props) => {
  return (
    <Typography color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link href="https://mui.com/">Shopify</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default CopyRight;
