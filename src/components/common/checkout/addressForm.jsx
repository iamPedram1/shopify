import * as React from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object({
  firstName: Yup.string()
    .required("First Name cannot be Empty")
    .min(3, "First Name Cannot be less than 3 Character ")
    .max(30, "First Name Cannot be more than 30 Character"),
  lastName: Yup.string()
    .required("Last Name cannot be Empty")
    .min(3, "Last Name Cannot be less than 3 Character ")
    .max(30, "Last Name Cannot be more than 30 Character"),
  address1: Yup.string()
    .required("Address Cannot be Empty")
    .min(10, "Address Cannot be less than 3 Character")
    .max(30, "Address Cannot be more than 30 Character"),
  address2: Yup.string()
    .min(10, "Address Cannot be less than 3 Character")
    .max(30, "Address Cannot be more than 30 Character"),
  city: Yup.string()
    .required("City Cannot be Empty")
    .min(3, "City Cannot be less than 6 Character")
    .max(15, "City Cannot be more than 15 character"),
  state: Yup.string()
    .required("State Cannot be Empty")
    .min(3, "State Cannot be less than 6 Character")
    .max(15, "State Cannot be more than 15 character"),
  zip: Yup.string()
    .required("Zipcode Cannot be Empty")
    .min(3, "Zipcode Cannot be less than 6 Character")
    .max(15, "Zipcode Cannot be more than 15 character"),
  country: Yup.string()
    .required("Country Cannot be Empty")
    .min(3, "Country Cannot be less than 6 Character")
    .max(15, "Country Cannot be more than 15 character"),
});

export default function AddressForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
    resolver: yupResolver(schema),
  });

  const { dirtyFields } = useFormState({
    control,
  });
  const onSubmit = (data) => console.log(data, "ERRORS", errors);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              {...register("firstName")}
              id="firstName"
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
              {...register("lastName")}
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
              {...register("address1")}
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              {...register("address2")}
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              {...register("city")}
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              {...register("state")}
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              {...register("zip")}
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              {...register("country")}
              id="country"
              name="country"
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
      </form>
    </React.Fragment>
  );
}
