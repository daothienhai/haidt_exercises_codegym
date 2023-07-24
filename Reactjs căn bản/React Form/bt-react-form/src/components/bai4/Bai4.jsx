import { Formik, Field, Form, ErrorMessage } from "formik";
import healthDeclarationSchema from "./validateFormBai4";
import React from "react";

const Bai4 = () => {
  const handleFormSubmit = (formValues, formik) => {
    // Handle form submission here
    alert("Khai báo thành công!");
    formik.resetForm();
  };

  return (
    <div style={{ width: 500 }}>
      <h1>Tờ khai y tế</h1>
      <Formik
        initialValues={{
          fullName: "",
          idNumber: "",
          yearOfBirth: "",
          gender: "",
          nationality: "",
          company: "",
          department: "",
          hasHealthInsurance: false,
          province: "",
          district: "",
          ward: "",
          address: "",
          phone: "",
          email: "",
        }}
        onSubmit={handleFormSubmit}
        validationSchema={healthDeclarationSchema}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <div>
                <label>Họ tên: </label>
                <Field type="text" name="fullName" />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label>Số hộ chiếu/CMND: </label>
                <Field type="text" name="idNumber" />
                <ErrorMessage
                  name="idNumber"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label>Năm sinh: </label>
                <Field type="number" name="yearOfBirth" />
                <ErrorMessage
                  name="yearOfBirth"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label>Giới tính: </label>
                <Field as="select" name="gender">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="gender" component="div" className="error" />
              </div>
              <div>
                <label>Quốc tịch: </label>
                <Field type="text" name="nationality" />
                <ErrorMessage
                  name="nationality"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label>Công ty làm việc: </label>
                <Field type="text" name="company" />
              </div>
              <div>
                <label>Bộ phận làm việc: </label>
                <Field type="text" name="department" />
              </div>
              <div>
                <label>Có thẻ bảo hiểm y tế: </label>
                <Field type="checkbox" name="hasHealthInsurance" />
              </div>
              <div>
                <label>Tỉnh thành: </label>
                <Field type="text" name="province" />
                <ErrorMessage
                  name="province"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label>Quận/huyện: </label>
                <Field type="text" name="district" />
                <ErrorMessage
                  name="district"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label>Phường/xã: </label>
                <Field type="text" name="ward" />
                <ErrorMessage name="ward" component="div" className="error" />
              </div>
              <div>
                <label>Số nhà, phố, tổ dân phố/thôn/đội: </label>
                <Field type="text" name="address" />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label>Điện thoại: </label>
                <Field type="text" name="phone" />
                <ErrorMessage name="phone" component="div" className="error" />
              </div>
              <div>
                <label>Email: </label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Bai4;
