import React, { useState } from "react";
import Sidebar from "./sidebar";

const EvaluationStructureForm = () => {
  const [evaluationValues, setEvaluationValues] = useState({});
  const [fields, setFields] = useState([]);
  const [evaluations, setEvaluations] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEvaluationValues({ ...evaluationValues, [name]: value });
  };

  const handleAddField = (event) => {
    event.preventDefault();
    const newField = { ...evaluationValues };
    setFields([...fields, newField]);
    setEvaluationValues({
      ...evaluationValues,
      fieldName: "",
      fieldType: "",
      fieldOptions: "",
    });
  };

  const handleAddEvaluation = (event) => {
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
                <form onSubmit={handleAddEvaluation}>
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
                          value={evaluationValues.fieldName || ""}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="fieldType">نوع الحقل</label>
                        <select
                          className="form-control"
                          id="fieldType"
                          name="fieldType"
                          value={evaluationValues.fieldType || ""}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">اختر نوع الحقل</option>
                          <option value="text">نص</option>
                          <option value="number">رقم</option>
                          <option value="select">قائمة منسدلة</option>
                        </select>
                      </div>
                      {evaluationValues.fieldType === "select" && (
                        <div className="form-group">
                          <label htmlFor="fieldOptions">الخيارات</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fieldOptions"
                            name="fieldOptions"
                            value={evaluationValues.fieldOptions || ""}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      )}
                      <div>
                        <button
                          type="button"
                          className="btn btn-secondary my-3"
                          onClick={handleAddField}
                        >
                          إضافة حقل
                        </button>
                      </div>
                      <div>
                        <button type="submit" className="btn btn-primary mb-3">
                          إضافة تقييم
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {evaluations.length > 0 && (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card mb-4">
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          التقييمات المضافة{" "}
                        </h6>
                      </div>
                      <div className="table-responsive p-3">
                        <table
                          className="table align-items-center table-flush table-hover"
                          id="dataTableHover"
                        >
                          <thead className="thead-light">
                            <tr>
                              <th>طريقة التقييم</th>
                              <th>حقول التقييم</th>
                            </tr>
                          </thead>
                          <tbody>
                            {evaluations.map((evaluation, index) => (
                              <tr key={index}>
                                <td>{evaluation.evaluationMethod}</td>
                                <td>
                                  <ul>
                                    {evaluation.fields.map(
                                      (field, fieldIndex) => (
                                        <li key={fieldIndex}>
                                          {field.fieldName} ({field.fieldType})
                                          {field.fieldType === "select" && (
                                            <ul style={{ marginRight: "30px" }}>
                                              {field.fieldOptions
                                                .split(",")
                                                .map((option, optionIndex) => (
                                                  <li key={optionIndex}>
                                                    {option}
                                                  </li>
                                                ))}
                                            </ul>
                                          )}
                                        </li>
                                      )
                                    )}
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
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EvaluationStructureForm;
