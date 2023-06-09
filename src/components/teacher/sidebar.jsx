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
          <Link to="/teacher/">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">لوحة تحكم المعلم</span>
          </Link>
          <span className="tooltip">لوحة تحكم المعلم</span>
        </li>
        <li>
          <Link to="/teacher/attendance">
            <i className="bx bx-user"></i>
            <span className="links_name">خذ الحضور</span>
          </Link>
          <span className="tooltip">خذ الحضور</span>
        </li>
        <li>
          <Link to="/teacher/muraja">
            <i className="bx bx-user-circle"></i>
            <span className="links_name">إجراء التقييم</span>
          </Link>
          <span className="tooltip">إجراء التقييم</span>
        </li>
        <li>
          <Link to="/teacher/report">
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
