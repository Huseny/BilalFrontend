import { useState } from "react";
import {
  generatePassword,
  generateUsername,
} from "../../utils/generateUsername";
import { TeacherCredentialsModal } from "./Modals";
import Sidebar from "./sidebar";

function AddTeacher() {
  const [teacherInfo, setTeacherInfo] = useState({
    name: "",
    email: "",
    phoneNo: "",
    address: "",
  });
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = () => {
    setCredentials({
      username: generateUsername(teacherInfo.name),
      password: generatePassword(6),
    });
    setShowModal(true);
  };
  return (
    <>
      <Sidebar />
      <section className="home-section">
        <div className="">
          <div className="row justify-content-center">
            <div className="mt-md-3 mb-5 card col-md-6">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h2 className="m-0 font-weight-bold text-primary">
                  تسجيل المعلمين
                </h2>
              </div>
              <div className="card-body">
                <div>
                  <div className="form-group">
                    <label htmlFor="teacherName">الاسم الكامل</label>
                    <input
                      onChange={(e) =>
                        setTeacherInfo({ ...teacherInfo, name: e.target.value })
                      }
                      type="text"
                      className="form-control"
                      id="teacherName"
                      placeholder="أدخل الاسم الكامل للمعلم"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="teacherPhone">رقم الهاتف</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="teacherPhone"
                      placeholder="أدخل رقم الهاتف"
                      required
                      onChange={(e) =>
                        setTeacherInfo({
                          ...teacherInfo,
                          phoneNo: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="teacherEmail">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="form-control"
                      id="teacherEmail"
                      placeholder="أدخل البريد الإلكتروني"
                      required
                      onChange={(e) =>
                        setTeacherInfo({
                          ...teacherInfo,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="teacherAddress">عنوان</label>
                    <textarea
                      className="form-control"
                      id="teacherAddress"
                      rows="3"
                      required
                      onChange={(e) =>
                        setTeacherInfo({
                          ...teacherInfo,
                          address: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <div className="py-2 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      أرسل
                    </button>
                  </div>
                  <TeacherCredentialsModal
                    credentials={credentials}
                    show={showModal}
                    handleClose={handleCloseModal}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      قائمة المعلمين المسجلين
                    </h6>
                  </div>

                  <div className="table-responsive p-3">
                    <table className="table align-items-center table-flush table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th>#</th>
                          <th>الاسم الكامل</th>
                          <th>رقم الهاتف</th>
                          <th>البريد الإلكتروني</th>
                          <th>عنوان</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>حسين يوسف</td>
                          <td>0978251888</td>
                          <td>husenyusuf876@gmail.com</td>
                          <td>Addis Ababa, Ethiopia</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>حسين يوسف</td>
                          <td>0978251888</td>
                          <td>husenyusuf876@gmail.com</td>
                          <td>Addis Ababa, Ethiopia</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AddTeacher;
