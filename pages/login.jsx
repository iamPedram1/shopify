import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import config from "../config.json";
import http from "../services/httpService";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CopyRight from "../components/common/copyright";
import InputField from "./../components/common/inputField";
import { titleCase } from "./../services/service";

//Validation Schema
const schema = Yup.object({
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

if (typeof window === "object") {
  if (localStorage.getItem("token") !== null) {
    window.location = "/";
  }
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { dirtyFields } = useFormState({
    control,
  });

  const SignIn = async (user) => {
    try {
      const { data } = await http.post(config.apiEndPoint + "login/", user);
      localStorage.setItem("token", data.token);
      window.location = "/";
    } catch (error) {
      if (error && error.response.status === 400) {
        toast.error(
          titleCase(error.response.data.password || error.response.data.email)
        );
      }
    }
  };

  const onSubmit = (data) =>
    SignIn({
      email: data["email"].toLowerCase(),
      password: data["password"],
    });

  return (
    <Container component="main" maxWidth="xs" sx={{ backgroundColor: "#fff" }}>
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
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <InputField
            name="email"
            errors={errors}
            fieldTouched={dirtyFields}
            label="Email"
            reactHookFormRegister={register}
          />
          <InputField
            name="password"
            type="password"
            errors={errors}
            fieldTouched={dirtyFields}
            label="Password"
            reactHookFormRegister={register}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CopyRight sx={{ mt: 5, pb: 5 }} />
    </Container>
  );
};
export default Login;
