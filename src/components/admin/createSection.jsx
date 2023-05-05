import Sidebar from "./sidebar";
import {
  CreateSectionModal,
  EditSectionModal,
  DeleteSectionModal,
} from "./Modals/section";
import { useState } from "react";
import { createClassRequest, getSections } from "../../utils/createClass";
import { useEffect } from "react";
function CreateSection() {
  const [sectionName, setSectionName] = useState("");
  const [sectionId, setSectionId] = useState("");
  const [sections, setSections] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCloseModal = () => setShowSuccessModal(false);

  useEffect(() => {
    async function fetchSections() {
      let fetchedSections = await getSections();
      setSections(fetchedSections);
    }
    fetchSections();
  }, [sections]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createClassRequest(sectionName);
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
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="form-group mb-3">
                        <label
                          htmlFor="sectionName"
                          className="form-control-label"
                        >
                          اسم الفصل<span className="text-danger ml-2">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="sectionName"
                          placeholder="اسم الفصل"
                          id="sectionName"
                          value={sectionName}
                          onChange={(e) => setSectionName(e.target.value)}
                        />
                      </div>
                      <button
                        id="createBtn"
                        name="save"
                        className="btn btn-primary"
                      >
                        احفظ
                      </button>
                      <CreateSectionModal
                        name={sectionName}
                        show={showSuccessModal}
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
                            {sections.length > 0 &&
                              sections.map((section) => (
                                <tr key={section._id}>
                                  <td>{sections.indexOf(section) + 1}</td>
                                  <td>{section.className}</td>
                                  <td>
                                    {section.dateCreated.split("-")[2][0]}
                                    {section.dateCreated.split("-")[2][1]}/
                                    {section.dateCreated.split("-")[1]}/
                                    {section.dateCreated.split("-")[0]}
                                  </td>
                                  <td>
                                    <i
                                      onClick={() => {
                                        setSectionId(section._id);
                                        handleEdit();
                                      }}
                                      className="fas fa-fw fa-edit"
                                    ></i>
                                  </td>
                                  <td>
                                    <i
                                      onClick={() => {
                                        setSectionId(section._id);
                                        handleDelete();
                                      }}
                                      className="fas fa-fw fa-trash"
                                    ></i>
                                  </td>
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
          </div>
        </div>
        <EditSectionModal
          show={showEditModal}
          sectionId={sectionId}
          setSections={setSections}
          handleClose={handleClosEditModal}
        />
        <DeleteSectionModal
          show={showDeleteModal}
          sectionId={sectionId}
          setSections={setSections}
          handleClose={handleClosDeleteModal}
        />
      </section>
    </>
  );
}

export default CreateSection;
