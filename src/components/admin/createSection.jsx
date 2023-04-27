import Sidebar from "./sidebar";
import { EditSectionModal, DeleteSectionModal } from "./Modals";
import { useState } from "react";
function CreateSection() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
      <section class="home-section">
        <div id="content-wrapper" className="d-flex flex-column">
          <div className="container-fluid" id="container-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h2 className="m-0 font-weight-bold text-primary">
                      إنشاء فصل جديد
                    </h2>
                  </div>
                  <div className="card-body">
                    <div>
                      <div className="form-group mb-3">
                        <label
                          htmlFor="sectionName"
                          className="form-control-label"
                        >
                          اسم الفصل<span class="text-danger ml-2">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="sectionName"
                          placeholder="اسم الفصل"
                          id="sectionName"
                        />
                      </div>
                      <button
                        id="createBtn"
                        name="save"
                        className="btn btn-primary"
                      >
                        احفظ
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card mb-4">
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          جميع الفصول
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
                              <th>اسم الفصل</th>
                              <th>تاريخ الإنشاء</th>
                              <th>تغيير</th>
                              <th>حذف</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Ibn Mes'ud</td>
                              <td>23-08-2023</td>
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
          </div>
        </div>
        <EditSectionModal
          show={showEditModal}
          sectionId={0}
          handleClose={handleClosEditModal}
        />
        <DeleteSectionModal
          show={showDeleteModal}
          sectionId={0}
          handleClose={handleClosDeleteModal}
        />
      </section>
    </>
  );
}

export default CreateSection;