import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

const Bai3 = () => {
  const handleFormSubmit = (formValues, formik) => {
    // Handle form submission here
    alert("Sent successfully!!!");
    formik.resetForm();
  };

  const emailSchema = Yup.object().shape({
    to: Yup.string()
      .required("Required")
      .matches(
        /^[a-zA-Z0-9+.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address"
      ),
    title: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    file: Yup.mixed().required("Required"),
  });

  return (
    <div style={{ width: 500 }}>
      <h1>Mail form</h1>
      <Formik
        initialValues={{
          to: "",
          title: "",
          message: "",
          file: undefined,
        }}
        onSubmit={handleFormSubmit}
        validationSchema={emailSchema}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <div>
                <label>To: </label>
                <Field type="text" name="to" />
                <ErrorMessage name="to" component="div" className="error" />
              </div>
              <div>
                <label>Title: </label>
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" className="error" />
              </div>
              <div>
                <label>Message: </label>
                <Field as="textarea" name="message" />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label>Upload File: </label>
                <input
                  type="file"
                  name="file"
                  onChange={(event) =>
                    setFieldValue("file", event.currentTarget.files[0])
                  }
                />
                <ErrorMessage name="file" component="div" className="error" />
              </div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Bai3;
