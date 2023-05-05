import Sidebar from "./sidebar";
import {
  generateUsername,
  generatePassword,
} from "../../utils/generateUsername";
import { useState, useEffect } from "react";
import { ParentRegistrationModal } from "./Modals/parent";
import { addParentRequest, getParents } from "../../utils/addParent";

function AddParent() {
  const [parentDetails, setParentDetails] = useState({
    username: "",
    password: "",
    fullName: "",
    sex: "",
    phoneNo: "",
    email: "",
    address: "",
  });
  const [parents, setParents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    async function fetchParents() {
      let fetchedParents = await getParents();
      setParents(fetchedParents);
    }
    fetchParents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setParentDetails({
      ...parentDetails,
      username: generateUsername(parentDetails.fullName),
      password: generatePassword(6),
    });
    try {
      await addParentRequest(
        parentDetails.username,
        parentDetails.password,
        parentDetails.fullName,
        parentDetails.sex,
        parentDetails.phoneNo,
        parentDetails.email,
        parentDetails.address
      );
      setShowModal(true);
      setParents([...parents, parentDetails]);
    } catch (err) {
      console.error(err);
    }
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
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="parentName">الاسم الكامل</label>
                    <input
                      onChange={(e) =>
                        setParentDetails({
                          ...parentDetails,
                          fullName: e.target.value,
                        })
                      }
                      type="text"
                      className="form-control"
                      id="parentName"
                      placeholder="أدخل الاسم الكامل للوالد"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="parentGender">جنس</label>
                    <select
                      className="form-control"
                      id="parentGender"
                      required
                      onChange={(e) =>
                        setParentDetails({
                          ...parentDetails,
                          sex: e.target.value,
                        })
                      }
                    >
                      <option value="">اختر الجنس</option>
                      <option value="ذكر">ذكر</option>
                      <option value="أنثى">أنثى</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="parentPhone">رقم الهاتف</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="parentPhone"
                      placeholder="أدخل رقم الهاتف"
                      onChange={(e) =>
                        setParentDetails({
                          ...parentDetails,
                          phoneNo: e.target.value,
                        })
                      }
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
                      required
                      placeholder="أدخل البريد الإلكتروني"
                      onChange={(e) =>
                        setParentDetails({
                          ...parentDetails,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="parentAddress">عنوان</label>
                    <textarea
                      className="form-control"
                      id="parentAddress"
                      rows="3"
                      required
                      onChange={(e) =>
                        setParentDetails({
                          ...parentDetails,
                          address: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <div className="py-2 text-center">
                    <button type="submit" className="btn btn-primary">
                      أرسل
                    </button>
                    <ParentRegistrationModal
                      show={showModal}
                      handleClose={handleCloseModal}
                      info={parentDetails}
                    />
                  </div>
                </form>
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
                  <table className="table align-items-center table-flush table-hover">
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
                      {parents.length > 0 &&
                        parents.map((parent) => (
                          <tr key={parent._id}>
                            <td>{parents.indexOf(parent) + 1}</td>
                            <td>{parent.fullName}</td>
                            <td>{parent.sex}</td>
                            <td>{parent.phoneNo}</td>
                            <td>{parent.email}</td>
                            <td>{parent.address}</td>
                          </tr>
                        ))}
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
