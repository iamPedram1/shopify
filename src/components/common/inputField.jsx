import { TextField } from "@mui/material";

const InputField = ({
  name,
  reactHookFormRegister,
  label,
  errors,
  type = "text",
  sx,
  multiline = false,
  fieldTouched,
}) => {
  return (
    <>
      <TextField
        sx={sx || { width: "100%", backgroundColor: "#fff" }}
        margin="normal"
        type={type}
        error={fieldTouched[name] && errors[name] ? true : false}
        multiline={multiline}
        label={label}
        helperText={fieldTouched[name] && errors[name] && errors[name].message}
        autoComplete="on"
        {...reactHookFormRegister(name)}
      />
    </>
  );
};

export default InputField;
