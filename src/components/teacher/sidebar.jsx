import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "../fontawesome-free/css/all.min.css";
import { useState } from "react";

function Sidebar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const changeMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className={menuOpened ? "sidebar open" : "sidebar"}>
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus icon"></i>
        <div className="logo_name">Bilal Medresa</div>
        <i onClick={changeMenu} className="bx bx-menu" id="btn"></i>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/attendance">
            <i className="bx bx-user"></i>
            <span className="links_name">Attendance</span>
          </Link>
          <span className="tooltip">Attendance</span>
        </li>
        <li>
          <Link to="/muraja">
            <i className="bx bx-edit-alt"></i>
            <span className="links_name">Muraja'a Evaluation</span>
          </Link>
          <span className="tooltip">Muraja'a Evaluation</span>
        </li>
        <li>
          <Link to="/report">
            <i className="bx bxs-report"></i>
            <span className="links_name">Reports</span>
          </Link>
          <span className="tooltip">Reports</span>
        </li>
        <li>
          <Link to="/createStudent">
            <i className="bx bx-message-square-add"></i>
            <span className="links_name">Add new Student</span>
          </Link>
          <span className="tooltip">Add new Student</span>
        </li>
        <li>
          <Link to="/createSection">
            <i className="bx bxs-folder-plus"></i>
            <span className="links_name">Create new className</span>
          </Link>
          <span className="tooltip">Create new className</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            <img src="icon.png" alt="profile img" />
            <div className="name_job">
              <div className="name">Admin</div>
              <div className="job">Ustaz</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
