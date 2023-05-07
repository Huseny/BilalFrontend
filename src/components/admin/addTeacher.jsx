import { useEffect } from "react";
import { useState } from "react";
import { CreateTeacher, GetTeachers } from "../../utils/addTeacher";
import {
  generatePassword,
  generateUsername,
} from "../../utils/generateUsername";
import { TeacherCredentialsModal } from "./Modals/teacher";
import Sidebar from "./sidebar";

function AddTeacher() {
  const [teacherInfo, setTeacherInfo] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    phoneNo: "",
    address: "",
  });
  const [teachers, setTeachers] = useState([]);
  const [created, setCreated] = useState(false);

  useEffect(() => {
    async function fetchTeachers() {
      setTeachers(await GetTeachers());
    }
    fetchTeachers();
  }, [created]);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const username = generateUsername(teacherInfo.name);
      const password = generatePassword(6);
      await CreateTeacher(username, password, teacherInfo);
      setTeacherInfo({
        ...teacherInfo,
        username: username,
        password: password,
      });
      setTeachers({ ...teachers, teacherInfo });
      setCreated(!created);
      setShowModal(true);
    } catch (err) {
      console.log(err);
    }
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
                <form onSubmit={(e) => handleSubmit(e)}>
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
                    <button type="submit" className="btn btn-primary">
                      أرسل
                    </button>
                  </div>
                  <TeacherCredentialsModal
                    teacherInfo={teacherInfo}
                    show={showModal}
                    handleClose={handleCloseModal}
                  />
                </form>
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
                        {teachers.length > 0 &&
                          teachers.map((teacher) => (
                            <tr key={teacher._id}>
                              <td>{teachers.indexOf(teacher) + 1}</td>
                              <td>{teacher.ustazName}</td>
                              <td>{teacher.phoneNo}</td>
                              <td>{teacher.email}</td>
                              <td>{teacher.address}</td>
                            </tr>
                          ))}
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
