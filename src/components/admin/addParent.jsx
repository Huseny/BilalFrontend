import Sidebar from "./sidebar";
import {
  generateUsername,
  generatePassword,
} from "../../utils/generateUsername";
import { useState } from "react";
import { ParentCredentialsModal } from "./Modals";

function AddParent() {
  const [name, setName] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = () => {
    setCredentials({
      username: generateUsername(name),
      password: generatePassword(6),
    });
    setShowModal(true);
  };
  return (
    <>
      <Sidebar />
      <section className="home-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="mt-md-3 mb-5 card col-md-6">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h2 className="m-0 font-weight-bold text-primary">
                  تسجيل الوالدين
                </h2>
              </div>
              <div className="card-body">
                <div>
                  <div className="form-group">
                    <label htmlFor="parentName">الاسم الكامل</label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control"
                      id="parentName"
                      placeholder="أدخل الاسم الكامل للوالد"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="parentGender">جنس</label>
                    <select className="form-control" id="parentGender" required>
                      <option value="">اختر الجنس</option>
                      <option value="Male">ذكر</option>
                      <option value="Female">أنثى</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="parentPhone">رقم الهاتف</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="parentPhone"
                      placeholder="أدخل رقم الهاتف"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="parentEmail">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="form-control"
                      id="parentEmail"
                      aria-describedby="emailHelp"
                      placeholder="أدخل البريد الإلكتروني"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="parentAddress">عنوان</label>
                    <textarea
                      className="form-control"
                      id="parentAddress"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <div className="py-2 text-center">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="btn btn-primary"
                    >
                      أرسل
                    </button>
                    <ParentCredentialsModal
                      show={showModal}
                      handleClose={handleCloseModal}
                      credentials={credentials}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    قائمة الوالدين المسجلين
                  </h6>
                </div>
                <div className="table-responsive p-3">
                  <table
                    className="table align-items-center table-flush table-hover"
                    id="dataTableHover"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th>#</th>
                        <th>الاسم الكامل</th>
                        <th>جنس</th>
                        <th>رقم التليفون</th>
                        <th>البريد الإلكتروني</th>
                        <th>عنوان</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>حسين يوسف</td>
                        <td>ذكر</td>
                        <td>0978251888</td>
                        <td>husenyusuf876@gmail.com</td>
                        <td>Addis Ababa</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>حسين يوسف</td>
                        <td>ذكر</td>
                        <td>0978251888</td>
                        <td>husenyusuf876@gmail.com</td>
                        <td>Addis Ababa</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AddParent;
