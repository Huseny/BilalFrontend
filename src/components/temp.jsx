import React, { useState } from "react";
import Sidebar from "./sidebar";

const Temp = () => {
  const [name, setName] = useState("");
  const [fields, setFields] = useState([]);

  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("");
  const [options, setOptions] = useState([]);

  const handleAddField = (e) => {
    e.preventDefault();
    const newField = { fieldName, fieldType, options };
    setFields([...fields, newField]);
    setFieldName("");
    setFieldType("");
    setOptions([]);
  };

  const handleAddOption = (e) => {
    e.preventDefault();
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
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
                  إضافة تقييم
                </h2>
              </div>
              <div className="card-body">
                <div>
                  <div className="mb-3 form-group">
                    <label htmlFor="name">اسم التقييم</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 form-group">
                    <label htmlFor="fieldName">اسم الحقل</label>
                    <input
                      type="text"
                      id="fieldName"
                      className="form-control"
                      value={fieldName}
                      onChange={(e) => setFieldName(e.target.value)}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="fieldType">نوع الحقل</label>
                    <select
                      id="fieldType"
                      value={fieldType}
                      className="form-control"
                      onChange={(e) => setFieldType(e.target.value)}
                    >
                      <option value="">اختر...</option>
                      <option value="text">نصي</option>
                      <option value="number">رقم</option>
                      <option value="select">قائمة منسدلة</option>
                      <option value="checkbox">خانة اختيار</option>
                      <option value="radio">زر اختيار</option>
                    </select>
                  </div>

                  {fieldType === "select" && (
                    <div className="mb-3 form-group">
                      <label className="label-control">الخيارات</label>
                      <div className="form-group">
                        {options.map((option, index) => (
                          <input
                            key={index}
                            type="text"
                            className="form-control"
                            value={option}
                            onChange={(e) =>
                              handleOptionChange(index, e.target.value)
                            }
                          />
                        ))}
                        <button
                          className="btn btn-warning"
                          onClick={handleAddOption}
                        >
                          إضافة
                        </button>
                      </div>
                    </div>
                  )}

                  <div>
                    <button
                      className="btn btn-secondary mb-3"
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

                <div className="row">
                  <div className="col-lg-12">
                    <div className="card mb-4">
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                          قائمة التقييمات
                        </h6>
                      </div>
                      <div className="table-responsive p-3">
                        <table className="table align-items-center table-flush table-hover">
                          <thead className="thead-light">
                            <tr>
                              <th>اسم التقييم</th>
                              <th>الحقول</th>
                            </tr>
                          </thead>
                          <tbody>
                            {fields.map((field, index) => (
                              <tr key={index}>
                                <td>{field.fieldName}</td>
                                <td>
                                  {field.fieldType === "select" ? (
                                    <ul className="list-group">
                                      {field.options.map((option, index) => (
                                        <li className="list-item" key={index}>
                                          {option}
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <span>{field.fieldType}</span>
                                  )}
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
      </section>
    </>
  );
};
export default Temp;
