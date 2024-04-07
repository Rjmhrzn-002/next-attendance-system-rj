import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  email: yup.string().email().required("*required"),
  pin: yup
    .string()
    .length(4)
    .matches(/^\d+$/, "Pin must contain only digits")
    .required("*required"),
});

export const defaultUserValue = {
  email: "",
  pin: "",
};
