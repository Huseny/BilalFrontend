import React, { useState } from "react";
import Sidebar from "./sidebar";

const EvaluationStructureForm = () => {
  const [evaluationValues, setEvaluationValues] = useState({});
  const [fields, setFields] = useState([]);
  const [evaluations, setEvaluations] = useState([]);

  const [newField, setNewField] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEvaluationValues({ ...evaluationValues, [name]: value });
    setNewField({ ...newField, [name]: value });
  };

  const handleAddNewField = (event) => {
    event.preventDefault();
    setFields([...fields, newField]);
    setNewField({});
  };

  const handleAddNewEvaluation = (event) => {
    event.preventDefault();
    const newEvaluation = { ...evaluationValues, fields };
    setEvaluations([...evaluations, newEvaluation]);
    setEvaluationValues({});
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
                <div>
                  <h2 className="m-0 font-weight-bold text-primary">
                    إنشاء تقييم جديد
                  </h2>

                  <div className="card-body">
                    <div>
                      <div className="form-group">
                        <label htmlFor="evaluationMethod">اسم التقييم</label>
                        <input
                          type="text"
                          className="form-control"
                          id="evaluationMethod"
                          name="evaluationMethod"
                          onChange={handleInputChange}
                          value={evaluationValues.evaluationMethod || ""}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="fieldName">اسم الحقل</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fieldName"
                          name="fieldName"
                          onChange={handleInputChange}
                          value={newField.fieldName || ""}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="fieldType">نوع الحقل</label>
                        <select
                          className="form-control"
                          id="fieldType"
                          name="fieldType"
                          onChange={handleInputChange}
                          value={newField.fieldType || ""}
                          required
                        >
                          <option value="">اختر نوع الحقل</option>
                          <option value="text">نص</option>
                          <option value="number">رقم</option>
                          <option value="select">اختيار من القائمة</option>
                        </select>
                      </div>
                      {newField.fieldType === "select" && (
                        <div className="form-group">
                          <label htmlFor="fieldOptions">
                            الخيارات (مفصولة بسطر جديد)
                          </label>
                          <textarea
                            className="form-control"
                            id="fieldOptions"
                            name="fieldOptions"
                            onChange={handleInputChange}
                            value={newField.fieldOptions || ""}
                          ></textarea>
                        </div>
                      )}
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary mt-1 mb-3"
                          onClick={handleAddNewField}
                        >
                          إضافة حقل جديد
                        </button>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary mb-3"
                          onClick={handleAddNewEvaluation}
                        >
                          إضافة تقييم جديد
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <table className="table mt-3">
                <thead>
                  <tr>
                    <th>اسم الحقل</th>
                    <th>نوع الحقل</th>
                    <th>الخيارات</th>
                  </tr>
                </thead>
                <tbody>
                  {fields.map((field, index) => (
                    <tr key={index}>
                      <td>{field.fieldName}</td>
                      <td>{field.fieldType}</td>
                      <td>{field.fieldOptions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                          <th>اسم التقييم</th>
                          <th>حقول التقييم</th>
                        </tr>
                      </thead>
                      <tbody>
                        {evaluations.map((evaluation, index) => (
                          <tr key={index}>
                            <td>{evaluation.evaluationMethod}</td>
                            <td>
                              <ul>
                                {evaluation.fields.map((field, index) => (
                                  <li key={index}>
                                    <strong>
                                      {field.fieldName} ({field.fieldType})
                                    </strong>
                                    {field.fieldType === "select" ? (
                                      <ul style={{ marginRight: "30px" }}>
                                        {field.fieldOptions
                                          .split("\n")
                                          .map((option, index) => (
                                            <li key={index}>{option}</li>
                                          ))}
                                      </ul>
                                    ) : null}
                                  </li>
                                ))}
                              </ul>
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
      </section>
    </>
  );
};

export default EvaluationStructureForm;
