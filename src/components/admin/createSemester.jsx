import Sidebar from "./sidebar";
import {
  CreateSemesterModal,
  EditSemesterModal,
  DeleteSemesterModal,
} from "./Modals";
import { useState } from "react";
function CreateSemester() {
  const [semesterInfo, setSemesterInfo] = useState({
    name: "",
    startDate: "",
    endDate: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCloseModal = () => setShowSuccessModal(false);

  const handleSubmit = () => {
    setShowSuccessModal(true);
  };

  const handleClosEditModal = () => setShowEditModal(false);
  const handleClosDeleteModal = () => setShowDeleteModal(false);

  const handleEdit = () => {
    setShowEditModal(true);
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
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
                  إنشاء الجدول الأكاديمي جديد
                </h2>
              </div>
              <div className="card-body">
                <div>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="semesterName"
                      className="form-control-label fw-bold"
                    >
                      اسم الفصل الدراسي
                      <span className="text-danger ml-2">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="semesterName"
                      placeholder="اسم الفصل الدراسي"
                      id="semesterName"
                      value={semesterInfo.name}
                      onChange={(e) =>
                        setSemesterInfo({
                          ...semesterInfo,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="startDate" className="form-label fw-bold">
                      تاريخ البدء<span className="text-danger ml-2">*</span>
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      className="form-control"
                      value={semesterInfo.startDate}
                      onChange={(event) =>
                        setSemesterInfo({
                          ...semesterInfo,
                          startDate: event.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="endDate" className="form-label fw-bold">
                      تاريخ الانتهاء
                      <span className="text-danger ml-2">*</span>
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      className="form-control"
                      value={semesterInfo.endDate}
                      onChange={(event) =>
                        setSemesterInfo({
                          ...semesterInfo,
                          endDate: event.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <button
                    id="createBtn"
                    name="save"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    احفظ
                  </button>
                  <CreateSemesterModal
                    info={semesterInfo}
                    show={showSuccessModal}
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
                      جميع الفصول الدراسية
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
                          <th>اسم الفصل الدراسي</th>
                          <th>تاريخ البدء</th>
                          <th>تاريخ الانتهاء</th>
                          <th>تغيير</th>
                          <th>حذف</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Semester 1</td>
                          <td>23-08-2023</td>
                          <td>23-10-2023</td>
                          <td>
                            <i
                              onClick={handleEdit}
                              className="fas fa-fw fa-edit"
                            ></i>
                          </td>
                          <td>
                            <i
                              onClick={handleDelete}
                              className="fas fa-fw fa-trash"
                            ></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EditSemesterModal
          show={showEditModal}
          semesterId={0}
          handleClose={handleClosEditModal}
        />
        <DeleteSemesterModal
          show={showDeleteModal}
          semesterId={0}
          handleClose={handleClosDeleteModal}
        />
      </section>
    </>
  );
}

export default CreateSemester;
