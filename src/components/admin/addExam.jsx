import React, { useState } from "react";
import Sidebar from "./sidebar";

const AddExam = () => {
  const [evaluationName, setEvaluationName] = useState("");
  const [fields, setFields] = useState([]);
  const [evaluations, setEvaluations] = useState([]);

  const [newField, setNewField] = useState({ name: "", type: "", options: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewField((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddNewField = (event) => {
    event.preventDefault();
    if (!newField.name || !newField.type) return;
    setFields((prevState) => [...prevState, newField]);
    setNewField({ name: "", type: "", options: "" });
  };

  const handleAddNewEvaluation = (event) => {
    if (!evaluationName || fields.length === 0) return;
    const newEvaluation = { name: evaluationName, fields };
    setEvaluations((prevState) => [...prevState, newEvaluation]);
    setEvaluationName("");
    setFields([]);
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
                  إنشاء تقييم جديد
                </h2>
              </div>
              <div className="card-body">
                <div>
                  <div className="form-group">
                    <label htmlFor="evaluationName">اسم التقييم</label>
                    <input
                      type="text"
                      className="form-control"
                      id="evaluationName"
                      name="evaluationName"
                      onChange={(e) => setEvaluationName(e.target.value)}
                      value={evaluationName}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fieldName">اسم الحقل</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fieldName"
                      name="name"
                      onChange={handleInputChange}
                      value={newField.name}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fieldType">نوع الحقل</label>
                    <select
                      className="form-control"
                      id="fieldType"
                      name="type"
                      onChange={handleInputChange}
                      value={newField.type}
                      required
                    >
                      <option value="">اختر نوع الحقل</option>
                      <option value="text">نص</option>
                      <option value="number">رقم</option>
                      <option value="select">اختيار من القائمة</option>
                    </select>
                  </div>
                  {newField.type === "select" && (
                    <div className="form-group">
                      <label htmlFor="fieldOptions">
                        الخيارات (مفصولة بسطر جديد)
                      </label>
                      <textarea
                        className="form-control"
                        id="fieldOptions"
                        name="options"
                        onChange={handleInputChange}
                        value={newField.options}
                        rows="3"
                      ></textarea>
                    </div>
                  )}
                  <div>
                    <button
                      className="btn btn-primary mb-3"
                      onClick={handleAddNewField}
                    >
                      إضافة حقل جديد
                    </button>
                  </div>
                  {fields.length > 0 && (
                    <div className="mb-3">
                      <h5 className="mb-2 font-weight-bold">الحقول المضافة:</h5>
                      <ul className="list-group">
                        {fields.map((field, index) => (
                          <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                          >
                            {field.name} ({field.type})
                            <div>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() =>
                                  setFields((prevState) =>
                                    prevState.filter(
                                      (item) => item.name !== field.name
                                    )
                                  )
                                }
                              >
                                حذف
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button
                    className="btn btn-success mb-3"
                    onClick={() => {
                      handleAddNewEvaluation();
                    }}
                  >
                    إضافة تقييم جديد
                  </button>
                  {evaluations.length > 0 && (
                    <div>
                      <h5 className="mb-2 font-weight-bold">
                        التقييمات المضافة:
                      </h5>
                      <ul className="list-group">
                        {evaluations.map((evaluation, index) => (
                          <li key={index} className="list-group-item">
                            <h6 className="font-weight-bold">
                              {evaluation.name}
                            </h6>
                            <ul>
                              {evaluation.fields.map((field, index) => (
                                <li key={index}>
                                  {field.name} ({field.type})
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddExam;
