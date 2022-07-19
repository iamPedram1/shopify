import * as React from "react";
import produce from "immer";
import { useDispatch } from "react-redux";
import { paymentDetailsChanged } from "../../../store/state/checkout";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export default function PaymentForm() {
  const [details, setDetails] = React.useState({
    cardName: "",
    cardNumber: "",
    expireDate: "",
    cvv: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e, propertyName) => {
    const clone = produce(details, (draft) => {
      draft[propertyName] = e.target.value;
    });
    setDetails(clone);
    dispatch(paymentDetailsChanged(clone));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            onBlur={(e) => handleChange(e, "cardName")}
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            onBlur={(e) => handleChange(e, "cardNumber")}
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            onBlur={(e) => handleChange(e, "expireDate")}
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            onBlur={(e) => handleChange(e, "cvv")}
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
