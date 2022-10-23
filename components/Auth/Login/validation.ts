import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
    name: yup
        .string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .max(40)
        .required("Name is a required field"),
    email: yup
        .string()
        .email("Email must be a valid email")
        .required("Email is a required field"),
});
