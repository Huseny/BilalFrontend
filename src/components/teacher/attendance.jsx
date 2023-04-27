import { useEffect, useState } from "react";
import "./styles/attendance.css";

async function fetchSections(setFetchedSections) {
  try {
    const response = await fetch(
      "http://localhost:3000/student/getallsections",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setFetchedSections(data);
  } catch (error) {
    console.log(error);
  }
}

async function fetchStudentsBySection(setStudents, section) {
  try {
    const response = await fetch(
      "http://localhost:3000/student/getstudentsbysection",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sectionName: section,
        }),
      }
    );
    const data = await response.json();
    setStudents(data);
  } catch (error) {
    console.log(error);
  }
}

function Attendance() {
  const [fetchedSections, setFetchedSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState([]);
  const [students, setStudents] = useState([]);
  const [checkedStudents, setCheckedStudents] = useState([]);

  useEffect(() => {
    fetchSections(setFetchedSections);
  }, []);

  useEffect(() => {
    fetchStudentsBySection(setStudents, selectedSection);
  }, [selectedSection, fetchedSections]);

  const handleClassSelection = (e) => {
    setSelectedSection(e.target.value);
  };

  const handleAttendanceChecked = (e) => {
    const studentId = e.target.id;
    if (e.target.checked) {
      setCheckedStudents((prevState) => [...prevState, studentId]);
    } else {
      setCheckedStudents((prevState) =>
        prevState.filter((id) => id !== studentId)
      );
    }
  };

  async function saveAttendance() {
    try {
      const response = await fetch(
        "http://localhost:3000/student/saveattendance",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sectionName: selectedSection,
            presentStudents: checkedStudents,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id="home" className="home-section">
      <div className="container">
        <h1 className="text-center">Welcome Admin</h1>
        <div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className=" col-md-2">
                      <h6 className="text-secondary">Choose your class:</h6>
                    </div>
                    <div className=" col-md-3">
                      <select
                        id="studentclassName"
                        value={selectedSection}
                        onChange={handleClassSelection}
                        required
                        name="classNameId"
                        className="form-control mb-3"
                      >
                        <option className="text-center">
                          --Choose the Section--
                        </option>
                        {fetchedSections.map((section) => {
                          return (
                            <option
                              key={section._id}
                              value={section.sectionName}
                              className="text-center"
                            >
                              {section.sectionName}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <h6 className="m-0 font-weight-bold text-danger">
                    Note:
                    <i>
                      Click on the checkboxes besides each student to take
                      attendance!
                    </i>
                  </h6>
                </div>
                <div className="table-responsive p-3">
                  <table className="table align-items-center table-flush table-hover">
                    <thead className="thead-light">
                      <tr>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>className</th>
                        <th>Check</th>
                      </tr>
                    </thead>

                    <tbody>
                      {students.map((student) => (
                        <tr key={student._id}>
                          <td>{student.firstName}</td>
                          <td>{student.middleName}</td>
                          <td>{student.lastName}</td>
                          <td>{student.studentAge}</td>
                          <td>{student.studentClass}</td>
                          <td>
                            <label
                              className="checkbox-container"
                              htmlFor={student._id}
                            >
                              <input
                                name="check"
                                id={student._id}
                                type="checkbox"
                                className="form-control"
                                data-id={student._id}
                                onClick={handleAttendanceChecked}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                  <button
                    id="takeAttendace"
                    name="save"
                    className="btn btn-primary"
                    onClick={saveAttendance}
                  >
                    Take Attendance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="done">
        <div className="done">
          <div className="card mb-4">
            <div className="card-header py-3 text-center">
              <h5>Attendance taken succesfully</h5>
              <br />
              <div className="text-center">
                <button id="closeSuccess" className="btn btn-warning mx-1">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Attendance;
