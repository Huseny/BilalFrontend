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
          <Link to="/parent/">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">لوحة تحكم</span>
          </Link>
          <span className="tooltip">لوحة تحكم</span>
        </li>
        <li>
          <Link to="/parent/attendanceReport">
            <i className="bx bx-user"></i>
            <span className="links_name">تقرير الحضور</span>
          </Link>
          <span className="tooltip">تقرير الحضور</span>
        </li>
        <li>
          <Link to="/parent/gradeReport">
            <i className="bx bx-report"></i>
            <span className="links_name">تقرير الرتبة</span>
          </Link>
          <span className="tooltip">تقرير الرتبة</span>
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
