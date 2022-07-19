import * as React from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import produce from "immer";
import { useDispatch } from "react-redux";
import { shippingDetailsChanged } from "../../../store/state/checkout";

export default function AddressForm() {
  const [details, setDetails] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });
  const dispatch = useDispatch();
  // Event Handler
  const handleChange = (e, propertyName) => {
    const clone = produce(details, (draft) => {
      draft[propertyName] = e.target.value;
    });
    setDetails(clone);
    dispatch(shippingDetailsChanged(clone));
  };
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            onBlur={(e) => handleChange(e, "firstName")}
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onBlur={(e) => handleChange(e, "lastName")}
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onBlur={(e) => handleChange(e, "address")}
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={(e) => handleChange(e, "city")}
            label="City"
            fullWidth
            autoComplete="shipping"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={(e) => handleChange(e, "zip")}
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onBlur={(e) => handleChange(e, "country")}
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </>
  );
}
