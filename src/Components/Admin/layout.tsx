import { Link, Outlet } from 'react-router-dom';
import { setUser, logout, selectUser } from '../../Store/userSlice';
import '../../Styles/User/styles.css';
import { useSelector, useDispatch } from 'react-redux';

function Layout() {
  const dispatch = useDispatch();
  const CurrentUser = useSelector(selectUser);
  console.log(CurrentUser);
  return (
    <div>
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/"
          >
            <div className="sidebar-brand-icon">
              <i className="fas fa-hippo"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Fag el-Gamous</div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <Link className="nav-link" to="/tools">
              <i className="fas fa-fw fa-home"></i>Instructions
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">Navigation</div>
          {CurrentUser.length > 0 ? (
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fa-solid fa-person-digging"></i>
                <span>CRUD</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  {/* <h6 className="collapse-header">Custom Components:</h6> */}
                  <Link className="collapse-item" to="/tools/burialForm">
                    Burial
                  </Link>
                  <Link className="collapse-item" to="/tools/textileForm">
                    Textiles
                  </Link>
                </div>
              </div>
            </li>
          ) : (
            <li></li>
          )}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i className="fas fa-fw fa-table"></i>
              <span>Filtered Tables/Accounts</span>
            </a>
            <div
              id="collapsePages"
              className="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Account Information</h6>
                <Link className="collapse-item" to="/tools/login">
                  Login
                </Link>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Filtered Tables</h6>
                <Link
                  className="collapse-item"
                  to="/tools/textilesDataTableFilter"
                >
                  Textiles Filtered Table
                </Link>
                <Link className="collapse-item" to="/tools/burialFilterTable">
                  Burial Filtered Table
                </Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              <i className="fas fa-fw fa-cog"></i>
              <span>Machine Learning</span>
            </a>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <Link className="collapse-item" to="/tools/supervised">
                  Supervised
                </Link>
                <Link className="collapse-item" to="/tools/unsupervised">
                  Unsupervised
                </Link>
              </div>
            </div>
          </li>
          {CurrentUser.length > 0 ? (
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-fw fa-wrench"></i>
                <span>Admin</span>
              </a>
              <div
                id="collapseUtilities"
                className="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  {/* <h6 className="collapse-header">Custom Utilities:</h6> */}
                  <Link
                    className="collapse-item"
                    to="/tools/usersDataTableFilter"
                  >
                    User Table
                  </Link>
                  <Link className="collapse-item" to="/tools/addUser">
                    Add User
                  </Link>
                </div>
              </div>
            </li>
          ) : (
            <li></li>
          )}
          {/* <li className="nav-item">
            <a className="nav-link" href="charts.html">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Charts</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table"></i>
              <span>Tables</span>
            </a>
          </li> */}

          <hr className="sidebar-divider d-none d-md-block" />

          {/* <div className="text-center d-none d-md-inline">
            <button
              className="rounded-circle border-0"
              id="sidebarToggle"
            ></button>
          </div> */}
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </a>
                  \
                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>
                {CurrentUser.length > 0 ? (
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {/* Insert Current Users Name */}

                      <span className="mr-5 d-none d-lg-inline text-gray-600 small">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        {CurrentUser.length > 0 ? CurrentUser[1] : ''}
                      </span>
                    </a>

                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <button
                        className="dropdown-item"
                        onClick={() => dispatch(logout())}
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </button>
                    </div>
                  </li>
                ) : (
                  <li></li>
                )}
              </ul>
            </nav>
            {/* This is where all future content goes */}
            <div className="container-fluid">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      {/* <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a> */}
    </div>
  );
}

export default Layout;
