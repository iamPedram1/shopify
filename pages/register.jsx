import {
  Avatar,
  Button,
  FormControlLabel,
  Grid,
  Box,
  Typography,
  Container,
  Checkbox,
} from "@mui/material";
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import Link from "next/link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CopyRight from "../components/common/copyright";
import InputField from "../components/common/inputField";
import http from "../services/httpService";
import config from "../config.json";
import { titleCase } from "./../services/service";

const schema = Yup.object({
  firstName: Yup.string()
    .required("First Name cannot be Empty")
    .min(3, "First Name Cannot be less than 3 Character ")
    .max(30, "First Name Cannot be more than 30 Character"),
  lastName: Yup.string()
    .required("Last Name cannot be Empty")
    .min(3, "Last Name Cannot be less than 3 Character ")
    .max(30, "Last Name Cannot be more than 30 Character"),
  email: Yup.string()
    .required("Email Cannot be Empty")
    .min(3, "Email Cannot be less than 3 Character")
    .max(30, "Email Cannot be more than 30 Character")
    .email("Invalid Email"),
  password: Yup.string()
    .required("Password Cannot be Empty")
    .min(6, "Password Cannot be less than 6 Character")
    .max(15, "Passowrd Cannot be more than 15 character"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { dirtyFields } = useFormState({
    control,
  });

  // Event Handler

  const SignUp = async (user) => {
    try {
      await http.post(config.apiEndPoint + "/register/", user);
    } catch (error) {
      if (error && error.response.status === 400) {
        toast.error(titleCase(error.response.data.email));
      }
    }
  };

  const onSubmit = (data) =>
    SignUp({
      email: data["email"].toLowerCase(),
      password: data["password"],
      name: data["firstName"],
    });

  //Render
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ backgroundColor: "#fff", marginBottom: "3rem" }}
    >
      <ToastContainer />
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputField
                name="firstName"
                errors={errors}
                fieldTouched={dirtyFields}
                label="First Name"
                reactHookFormRegister={register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="lastName"
                errors={errors}
                fieldTouched={dirtyFields}
                label="Last Name"
                reactHookFormRegister={register}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                name="email"
                errors={errors}
                fieldTouched={dirtyFields}
                label="Email"
                reactHookFormRegister={register}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                name="password"
                errors={errors}
                type="password"
                fieldTouched={dirtyFields}
                label="Password"
                reactHookFormRegister={register}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox {...register("receiveNews")} color="primary" />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-start">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CopyRight sx={{ mt: 5, pb: 5 }} />
    </Container>
  );
};

export default Register;
