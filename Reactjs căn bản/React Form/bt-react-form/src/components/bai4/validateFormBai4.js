import * as Yup from "yup";

const healthDeclarationSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  idNumber: Yup.string().required("Required"),
  yearOfBirth: Yup.number()
    .required("Required")
    .min(1900, "Year of birth must be greater than 1900"),
  gender: Yup.string(),
  nationality: Yup.string().required("Required"),
  company: Yup.string(),
  department: Yup.string(),
  hasHealthInsurance: Yup.boolean(),
  province: Yup.string().required("Required"),
  district: Yup.string().required("Required"),
  ward: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string()
    .required("Required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    ),
});
export default healthDeclarationSchema;
