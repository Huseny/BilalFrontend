import { useState } from "react";
import Sidebar from "./sidebar";
import "./styles/attendance.css";

function Attendance() {
  const [isTaken, setIsTaken] = useState(false);

  // useEffect(() => {
  //   async function fetchWhatever() {
  //     setFetchedSections(await fetchSections());
  //   }
  //   fetchWhatever();
  // }, []);

  // useEffect(() => {
  //   async function whatever() {
  //     setStudents(await fetchStudentsBySection(selectedSection));
  //   }
  //   whatever();
  // }, [selectedSection]);

  const handleAttendanceChecked = (e, studentId) => {
    // if (e.target.checked) {
    //   setCheckedStudents((prevState) => [...prevState, studentId]);
    // } else {
    //   setCheckedStudents((prevState) =>
    //     prevState.filter((id) => id !== studentId)
    //   );
    // }
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
                          required
                          name="classNameId"
                          className="form-control mb-3"
                        >
                          <option value="" className="text-center">
                            --اختر الفصل--
                          </option>
                          <option value="123">Ibn Mes'ud</option>
                          <option value="123">Ibn Abbas</option>
                          <option value="123">Ibn Kathir</option>
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
                        <tr>
                          <td>1</td>
                          <td>Amir Ahmedin</td>
                          <td>10</td>
                          <td>Ibn Abbas</td>
                          <td>
                            <label
                              className="checkbox-container"
                              htmlFor="whatever"
                            >
                              <input
                                name="check"
                                id="whatever"
                                type="checkbox"
                                className="form-control"
                                onClick={(e) => handleAttendanceChecked(e, "0")}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Abdulmelik Ambaw</td>
                          <td>18</td>
                          <td>Ibn Mes'ud</td>
                          <td>
                            <label
                              className="checkbox-container"
                              htmlFor="whatever2"
                            >
                              <input
                                name="check"
                                id="whatever2"
                                type="checkbox"
                                className="form-control"
                                onClick={(e) => handleAttendanceChecked(e, "0")}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Ahmed Yusuf</td>
                          <td>20</td>
                          <td>Ibn Kathir</td>
                          <td>
                            <label
                              className="checkbox-container"
                              htmlFor="whatever3"
                            >
                              <input
                                name="check"
                                id="whatever3"
                                type="checkbox"
                                className="form-control"
                                onClick={(e) => handleAttendanceChecked(e, "0")}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Husen Yusuf</td>
                          <td>20</td>
                          <td>Ibn Mes'ud</td>
                          <td>
                            <label
                              className="checkbox-container"
                              htmlFor="whatever4"
                            >
                              <input
                                name="check"
                                id="whatever4"
                                type="checkbox"
                                className="form-control"
                                onClick={(e) => handleAttendanceChecked(e, "0")}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <button
                      onClick={() => setIsTaken(true)}
                      name="save"
                      className="btn btn-primary"
                    >
                      Take Attendance
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isTaken && (
          <section>
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
        )}
      </section>
    </>
  );
}

export default Attendance;
