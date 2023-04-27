import "./styles/home.css";
function Home() {
  return (
    <section className="home-section">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid" id="container-wrapper">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Admin Dashboard</h1>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="./">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </div>

              <div className="row mb-3">
                <div className="col-md-6 mb-4">
                  <div id="Students" className="card h-100 mr-4 links">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1 links_text">
                            Students
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-users fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div id="classNamees" className="card h-100 mr-4 links">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1 links_text">
                            classNamees
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-chalkboard fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div id="Reports" className="card h-100 mr-4 links">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1 links_text">
                            Reports
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-calendar fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div id="Muraja" className="card h-100 mr-4 links">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1 links_text">
                            Muraja'a Evaluation
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-calendar-alt fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
