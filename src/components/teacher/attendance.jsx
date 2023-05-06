import { useEffect, useState } from "react";
import { getClassById } from "../../utils/createClass";
import Sidebar from "./sidebar";
import "./styles/attendance.css";
import {
  fetchSections,
  fetchStudentsBySection,
} from "../../utils/fetchSections";

function Attendance() {
  const [fetchedSections, setFetchedSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");
  const [students, setStudents] = useState([]);
  const [checkedStudents, setCheckedStudents] = useState([]);

  useEffect(() => {
    async function fetchWhatever() {
      setFetchedSections(await fetchSections());
    }
    fetchWhatever();
  }, []);

  useEffect(() => {
    async function whatever() {
      setStudents(await fetchStudentsBySection(selectedSection));
    }
    whatever();
  }, [selectedSection]);

  const handleAttendanceChecked = (e, studentId) => {
    if (e.target.checked) {
      setCheckedStudents((prevState) => [...prevState, studentId]);
    } else {
      setCheckedStudents((prevState) =>
        prevState.filter((id) => id !== studentId)
      );
    }
  };

  return (
    <>
      <Sidebar />
      <section id="home" className="home-section">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card mt-3 mb-4">
                  <div className="card-header py-3">
                    <div className="row">
                      <div className="col-md-2"></div>
                      <div className=" col-md-2">
                        <h6 className="text-secondary">اختر فصل دراسي:</h6>
                      </div>
                      <div className="form-group">
                        <select
                          onChange={(e) => setSelectedSection(e.target.value)}
                          required
                          name="classNameId"
                          className="form-control mb-3"
                        >
                          <option value="" className="text-center">
                            --اختر الفصل--
                          </option>
                          {fetchedSections.map((section) => {
                            return (
                              <option
                                key={section._id}
                                value={section._id}
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
                      ملحوظة:
                      <i>انقر فوق مربعات الاختيار بجانب كل طالب لأخذ الحضور!</i>
                    </h6>
                  </div>
                  <div className="table-responsive p-3">
                    <table className="table align-items-center table-flush table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th>#</th>
                          <th>الاسم الكامل</th>
                          <th>عمر</th>
                          <th>فصل</th>
                          <th>حقق</th>
                        </tr>
                      </thead>

                      <tbody>
                        {students &&
                          students.length > 0 &&
                          students.map(async (student, index) => (
                            <tr key={student._id}>
                              <td>{index + 1}</td>
                              <td>{student.fullName}</td>
                              <td>{student.age}</td>
                              <td>
                                {
                                  (await getClassById(student.chooseClass))
                                    .className
                                }
                              </td>
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
                                    onClick={(e) =>
                                      handleAttendanceChecked(e, student._id)
                                    }
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <br />
                    <button name="save" className="btn btn-primary">
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
    </>
  );
}

export default Attendance;
