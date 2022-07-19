import * as React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PaymentForm from "./../components/common/checkout/paymentForm";
import AddresForm from "./../components/common/checkout/addressForm";
import ReviewForm from "./../components/common/checkout/reviewForm";
import CopyRight from "../components/common/copyright";
import { useSelector } from "react-redux";

const steps = ["Shipping address", "Payment details", "Review your order"];

const theme = createTheme();

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <ReviewForm />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  // Local State , Redux Setup
  const { products, checkout } = useSelector((item) => item.entities);
  const { shipping, payment } = checkout;
  const [activeStep, setActiveStep] = React.useState(0);
  const router = useRouter();

  React.useEffect(() => {
    if (products.length === 0) {
      router.push("/");
    }
  }, []);

  const includes = (data) => {
    if (data === "shipping") {
      console.log(shipping.firstName);
      if (shipping.firstName === undefined || shipping.firstName.length < 1)
        return false;
      if (shipping.lastName === undefined || shipping.lastName.length < 1)
        return false;
      if (shipping.address === undefined || shipping.address.length < 1)
        return false;
      if (shipping.city === undefined || shipping.city.length < 1) return false;
      if (shipping.country === undefined || shipping.country.length < 1)
        return false;
      return true;
    } else {
      if (payment.cardName === undefined || payment.cardName.length < 1)
        return false;
      if (payment.cardNumber === undefined || payment.cardNumber.length < 1)
        return false;
      if (payment.expireDate === undefined || payment.expireDate.length < 1)
        return false;
      if (payment.cvv === undefined || payment.cvv.length < 1) return false;
      return true;
    }
  };

  // Event Handlers
  const handleNext = () => {
    if (activeStep === 0) {
      if (shipping.length === 0) return;
      if (shipping.length !== 0) {
        if (includes("shipping") === false) return;
      }
    }
    if (activeStep === 1) {
      if (payment.length === 0) return;
      if (payment.length !== 0) {
        if (includes() === false) return;
      }
    }
    console.log("Ejra Shod");
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  // Render
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    type="submit"
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
        <CopyRight />
      </Container>
    </ThemeProvider>
  );
}
