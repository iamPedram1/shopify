import * as React from "react";
import { Typography, List, ListItem, ListItemText, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../../services/service";
export default function ReviewForm() {
  const { shoppingCart, checkout } = useSelector((item) => item.entities);
  const { payment, shipping } = checkout;

  const addresses = [shipping.country, , shipping.city, shipping.zip];
  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: payment["cardName"] },
    { name: "Card number", detail: payment["cardNumber"] },
    { name: "Expiry date", detail: payment["expireDate"] },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {shoppingCart.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.title}
              secondary={`Amount: ${product["count"]}`}
            />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {calcTotalPrice(shoppingCart)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {shipping.firstName + " " + shipping.lastName}
          </Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={5}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
