import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CopyRight from "./common/copyright";
import InputField from "./common/inputField";

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
  const onSubmit = (data) => console.log(data, "ERRORS", errors);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
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
              <Link to="/register">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CopyRight sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
export default Login;
