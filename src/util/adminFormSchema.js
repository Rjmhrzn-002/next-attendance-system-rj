import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("*required"),
  password: yup
    .string()
    .required("*required")
    .matches(
      /^(?=.*[!"#$%&'()*+,./:;<=>?@\[\]^_`{|}~])(.{4,})$/,
      "Must contain at least one symbol and be at least 4 characters long"
    ),
});

export const defaultLoginValue = {
  username: "",
  password: "",
};
