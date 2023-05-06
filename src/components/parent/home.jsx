import React from "react";
import "./styles/home.css";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import logout from "../../utils/logout";

function Home() {
  return (
    <>
      <Sidebar />
      <section className="home-section">
        <div className="d-flex flex-column">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">لوحة تحكم المشرف</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link onClick={logout} className="link" to="/">
                    تسجيل خروج
                  </Link>
                </li>
              </ol>
            </div>

            <div className="row mb-3">
              <div className="col-md-6 mb-4">
                <Link className="links" to="/parent/attendanceReport">
                  <div className="card h-100 mr-4 links">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1 links_text">
                            تقرير الحضور
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-user fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 mb-4">
                <Link className="links" to="/parent/gradeReport">
                  <div className="card h-100 mr-4 links">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1 links_text">
                            تقرير الرتبة
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-file fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
