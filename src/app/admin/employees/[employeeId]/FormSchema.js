import * as yup from "yup";

export const formSchema = yup.object().shape({
  employee_name: yup
    .string()
    .required("*required")
    .min(2, "Name length must be greater than 2"),
  email: yup.string().email().required("*required"),
  position: yup.string().required("*required"),
  contact: yup
    .string()
    .length(10, "Must be 10 digit number")
    .required("*required"),
  pin: yup
    .string()
    .length(4)
    .matches(/^\d+$/, "Pin must contain only digits")
    .required("*required"),
});
export const defaultFormSchema = {
  employee_name: "",
  email: "",
  position: "",
  contact: "",
  pin: "",
};
