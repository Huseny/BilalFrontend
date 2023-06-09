import { useState } from "react";
import Sidebar from "./sidebar";
import { StudentRegistrationModal } from "./Modals/student";
import { useEffect } from "react";
import { getClassById, getSections } from "../../utils/createClass";
import { GetParentById, getParents } from "../../utils/addParent";
import { CreateStudentRequest, GetStudents } from "../../utils/createStudent";

async function getStudentsWithParents(students) {
  const studentsWithParents = [];
  for (const student of students) {
    const parentName = (await GetParentById(student.ChooseParent)).fullName;
    const className = (await getClassById(student.chooseClass)).className;
    const studentWithParent = { ...student, parentName, className };
    studentsWithParents.push(studentWithParent);
  }
  return studentsWithParents;
}

function CreateStudent() {
  const [showModal, setShowModal] = useState(false);
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    age: 0,
    education: 0,
    gender: "",
    subcity: "",
    wereda: "",
    kebele: "",
    specName: "",
    houseNo: 0,
    familySize: 0,
    incomeSource: 0,
    parent: "",
    section: "",
  });
  const [sections, setSections] = useState([]);
  const [parents, setParents] = useState([]);
  const [students, setStudents] = useState([]);
  const [studentsWithParents, setStudentsWithParents] = useState([]);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setSections(await getSections());
      setParents(await getParents());
      const fetchedStudents = await GetStudents();
      setStudents(fetchedStudents);
      const studentsWithParents = await getStudentsWithParents(fetchedStudents);
      setStudentsWithParents(studentsWithParents);
    }
    fetchData();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setChanged(!changed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CreateStudentRequest(studentInfo);
    setShowModal(true);
    setStudents([...students, studentInfo]);
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
                  تسجيل الطلاب
                </h2>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="studentName">الاسم الكامل</label>
                    <input
                      onChange={(e) =>
                        setStudentInfo({ ...studentInfo, name: e.target.value })
                      }
                      type="text"
                      className="form-control"
                      id="studentName"
                      placeholder="أدخل الاسم الكامل للطالب/ة"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentAge">عمر</label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={(e) =>
                        setStudentInfo({ ...studentInfo, age: e.target.value })
                      }
                      id="studentAge"
                      placeholder="أدخل عمر الطالب"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentEducation">مستوى التعليم</label>
                    <input
                      onChange={(e) =>
                        setStudentInfo({
                          ...studentInfo,
                          education: e.target.value,
                        })
                      }
                      type="number"
                      className="form-control"
                      id="studentEducation"
                      placeholder="أدخل مستوى تعليم الطالب"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentGender">جنس</label>
                    <select
                      onChange={(e) =>
                        setStudentInfo({
                          ...studentInfo,
                          gender: e.target.value,
                        })
                      }
                      className="form-control"
                      id="studentGender"
                      required
                    >
                      <option value="">اختر الجنس</option>
                      <option value="ذكر">ذكر</option>
                      <option value="أنثى">أنثى</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="studentSubcity">المدينة الفرعية</label>
                    <input
                      onChange={(e) =>
                        setStudentInfo({
                          ...studentInfo,
                          subcity: e.target.value,
                        })
                      }
                      type="text"
                      className="form-control"
                      id="studentSubcity"
                      placeholder="المدينة الفرعية (sub-city)"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentWereda">ويريدا</label>
                    <input
                      onChange={(e) =>
                        setStudentInfo({
                          ...studentInfo,
                          wereda: e.target.value,
                        })
                      }
                      type="text"
                      className="form-control"
                      id="studentWereda"
                      placeholder="أدخل الويريدا للطالب"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentKebele">كيبيلي</label>
                    <input
                      onChange={(e) =>
                        setStudentInfo({
                          ...studentInfo,
                          kebele: e.target.value,
                        })
                      }
                      type="text"
                      className="form-control"
                      id="studentKebele"
                      placeholder="أدخل الكيبيلي للطالب"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentSefer">الاسم الخاص للمنطقة</label>
                    <input
                      onChange={(e) =>
                        setStudentInfo({
                          ...studentInfo,
                          specName: e.target.value,
                        })
                      }
                      type="text"
                      className="form-control"
                      id="studentSefer"
                      placeholder="أدخل الاسم الخاص للمنطقة"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentHouse">رقم البيت</label>
                    <input
                      onChange={(e) =>
                        setStudentInfo({
                          ...studentInfo,
                          houseNo: e.target.value,
                        })
                      }
                      type="number"
                      className="form-control"
                      id="studentHouse"
                      placeholder="أدخل رقم البيت"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentFamily">حجم الأسرة</label>
                    <input
                      onChange={(e) =>
                        setStudentInfo({
                          ...studentInfo,
                          familySize: e.target.value,
                        })
                      }
                      type="number"
                      className="form-control"
                      id="studentFamily"
                      placeholder="أدخل حجم الأسرة"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentFamily">مصدر الدخل</label>
                    <input
                      onChange={(e) =>
                        setStudentInfo({
                          ...studentInfo,
                          incomeSource: e.target.value,
                        })
                      }
                      type="text"
                      className="form-control"
                      id="studentFamily"
                      placeholder="أدخل مصدر الدخل للأسرة"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentParent">اختر الوالد</label>
                    <select
                      onChange={(e) =>
                        setStudentInfo({
                          ...studentInfo,
                          parent: e.target.value,
                        })
                      }
                      className="form-control"
                      id="studentParent"
                      required
                    >
                      <option value="">اختر الوالد</option>
                      {parents.map((parent) => (
                        <option key={parent._id} value={parent._id}>
                          {parent.fullName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="studentSection">اختر فصل</label>
                    <select
                      onChange={(e) =>
                        setStudentInfo({
                          ...studentInfo,
                          section: e.target.value,
                        })
                      }
                      className="form-control"
                      id="studentSection"
                      required
                    >
                      <option value="">اختر فصل</option>
                      {sections.map((section) => (
                        <option key={section._id} value={section._id}>
                          {section.className}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="py-2 text-center">
                    <button type="submit" className="btn btn-primary">
                      أرسل
                    </button>
                    <StudentRegistrationModal
                      info={studentInfo}
                      show={showModal}
                      handleClose={handleCloseModal}
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      قائمة الطلاب المسجلين
                    </h6>
                  </div>

                  <div className="table-responsive p-3">
                    <table className="table align-items-center table-flush table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th>#</th>
                          <th>الاسم الكامل</th>
                          <th>جنس</th>
                          <th>عمر</th>
                          <th>الوالد</th>
                          <th>فصل</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentsWithParents.length > 0 &&
                          studentsWithParents.map((oneStudent) => (
                            <tr key={oneStudent._id}>
                              <td>
                                {studentsWithParents.indexOf(oneStudent) + 1}
                              </td>
                              <td>{oneStudent.fullName}</td>
                              <td>{oneStudent.sex}</td>
                              <td>{oneStudent.age}</td>
                              <td>{oneStudent.parentName}</td>
                              <td>{oneStudent.className}</td>
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

export default CreateStudent;
