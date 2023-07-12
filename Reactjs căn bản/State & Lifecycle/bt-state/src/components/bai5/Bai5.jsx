import React, { useState } from "react";
import "./Bai5.css";
const Bai5 = () => {
  const [studentList, setStudentList] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [isValid, setIsValid] = useState(false);
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    checkInvalidForm();
  };

  const handleSelect = (studentSelected, index) => {
    setForm({ ...studentSelected });
    setIndexSelected(index);
  };

  const checkInvalidForm = () => {
    const { name, phone, email } = form;
    setIsValid(name && phone && email);
  };

  const handleSubmit = () => {
    if (isValid) {
      const newList = [...studentList];
      if (indexSelected > -1) {
        newList.splice(indexSelected, 1, form);
      } else {
        newList.push(form);
      }
      setStudentList(newList);
      setForm({ name: "", phone: "", email: "" });
      setIsValid(false);
      setIndexSelected(-1);
    }
  };

  const handleDelete = (index) => {
    const newList = [...studentList];
    newList.splice(index, 1);
    setStudentList(newList);
  };

  return (
    <div>
      <h1>Student List</h1>
      <div>
        <label>Name: </label>
        <input name="name" value={form.name} onChange={handleChange} />
      </div>
      <div>
        <label>Phone: </label>
        <input
          type="number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input name="email" value={form.email} onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>
                <button onClick={() => handleSelect(student, index)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bai5;
