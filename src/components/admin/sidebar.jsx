import "./styles/sidebar.css";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "../../fontawesome-free/css/all.min.css";
import { useState } from "react";
import logout from "../../utils/logout";

function Sidebar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const changeMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className={menuOpened ? "sidebar open" : "sidebar"}>
      <div className="logo-details">
        <i onClick={changeMenu} className="bx bx-menu" id="btn"></i>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/admin/">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">لوحة تحكم المشرف</span>
          </Link>
          <span className="tooltip">لوحة تحكم المشرف</span>
        </li>
        <li>
          <Link to="/admin/addParent">
            <i className="bx bx-user"></i>
            <span className="links_name">إدارة الوالدين</span>
          </Link>
          <span className="tooltip">إدارة الوالدين</span>
        </li>
        <li>
          <Link to="/admin/addStudent">
            <i className="bx bx-user-circle"></i>
            <span className="links_name">إدارة الطلاب</span>
          </Link>
          <span className="tooltip">إدارة الطلاب</span>
        </li>
        <li>
          <Link to="/admin/addTeacher">
            <i className="bx bx-id-card"></i>
            <span className="links_name">إدارة المعلمين</span>
          </Link>
          <span className="tooltip">إدارة المعلمين</span>
        </li>
        <li>
          <Link to="/admin/createSection">
            <i className="bx bxs-folder-plus"></i>
            <span className="links_name">إدارة الفصول الدراسية</span>
          </Link>
          <span className="tooltip">إدارة الفصول الدراسية</span>
        </li>
        <li>
          <Link to="/admin/createSemester">
            <i className="bx bxs-calendar"></i>
            <span className="links_name">إدارة الجدول الأكاديمي</span>
          </Link>
          <span className="tooltip">إدارة الجدول الأكاديمي</span>
        </li>
        <li>
          <Link to="/admin/addExam">
            <i className="bx bxs-book-bookmark"></i>
            <span className="links_name">إدارة التقييمات</span>
          </Link>
          <span className="tooltip">إدارة التقييمات</span>
        </li>
        <li>
          <Link to="/admin/report">
            <i className="bx bxs-report"></i>
            <span className="links_name">التقارير</span>
          </Link>
          <span className="tooltip">التقارير</span>
        </li>
        <li className="profile">
          <Link onClick={logout} to="/">
            <i className="bx bx-log-out"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
