import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import "./Bai2.css";
const Bai2 = () => {
  const [books, setBooks] = useState([]);
  const [updatingIndex, setUpdatingIndex] = useState(-1);

  const handleFormSubmit = (formValues, formik) => {
    if (updatingIndex >= 0) {
      const updatedBooks = [...books];
      updatedBooks[updatingIndex] = {
        title: formValues.title,
        quantity: formValues.quantity,
      };
      setBooks(updatedBooks);
      setUpdatingIndex(-1);
    } else {
      const newBook = {
        title: formValues.title,
        quantity: formValues.quantity,
      };
      setBooks([...books, newBook]);
    }
    formik.resetForm();
  };

  const handleEdit = (index, formik) => {
    setUpdatingIndex(index);
    const book = books[index];
    formik.setFieldValue("title", book.title);
    formik.setFieldValue("quantity", book.quantity);
  };

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
    if (index === updatingIndex) {
      setUpdatingIndex(-1);
    }
  };

  const bookSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    quantity: Yup.number().required("Required").typeError("Must be a number"),
  });

  return (
    <div style={{ width: 500 }}>
      <h1>Library</h1>
      <Formik
        initialValues={{
          title: "",
          quantity: "",
        }}
        onSubmit={handleFormSubmit}
        validationSchema={bookSchema}
      >
        {() => (
          <Form>
            <div>
              <div>
                <label>Title: </label>
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" className="error" />
              </div>
              <div>
                <label>Quantity: </label>
                <Field type="number" name="quantity" />
                <ErrorMessage
                  name="quantity"
                  component="div"
                  className="error"
                />
              </div>
              <button type="submit">
                {updatingIndex >= 0 ? "Update" : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Quantity</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bai2;
