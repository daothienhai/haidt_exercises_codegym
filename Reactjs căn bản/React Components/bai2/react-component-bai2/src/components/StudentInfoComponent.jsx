import React, { Component } from "react";
import "./StudentInfoComponent.css";
class StudentInfoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { id: 1, name: "Nguyễn Văn A", age: 30, address: "Hà Nội" },
        { id: 2, name: "Đào Thiện Hải", age: 29, address: "Ninh Bình" },
        { id: 3, name: "Lê Ngọc Huyền", age: 27, address: "Hòa Bình" },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>List sinh viên</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentInfoComponent;
