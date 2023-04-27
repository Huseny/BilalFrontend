import { Routes, Route } from "react-router-dom";
import {
  AdminHome,
  AdminReport,
  AddExam,
  AddParent,
  AddTeacher,
  CreateSection,
  CreateStudent,
  CreateSemester,
} from "./components/admin";
import {
  TeacherHome,
  Muraja,
  Attendance,
  TeacherReport,
} from "./components/teacher";

import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/addParent" element={<AddParent />} />
        <Route path="/admin/addStudent" element={<CreateStudent />} />
        <Route path="/admin/addTeacher" element={<AddTeacher />} />
        <Route path="/admin/createSection" element={<CreateSection />} />
        <Route path="/admin/createSemester" element={<CreateSemester />} />
        <Route path="/admin/addExam" element={<AddExam />} />
        <Route path="/admin/report" element={<AdminReport />} />

        <Route path="/teacher/" element={<TeacherHome />} />
        <Route path="/teacher/attendance" element={<Attendance />} />
        <Route path="/teacher/muraja" element={<Muraja />} />
        <Route path="/teacher/report" element={<TeacherReport />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
