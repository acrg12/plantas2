import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import Ubicacion from "../../helper/Ubicacion";

const Aside = ({ abrir }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showPlanta1, setShowPlanta1] = useState(false);
  const [showPlanta2, setShowPlanta2] = useState(false);

  useEffect(() => {
    // Verificar el ancho de la ventana al cargar y redimensionar
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // 767px es generalmente considerado como el límite entre dispositivos móviles y de escritorio
    };

    handleResize(); // Verificar el ancho de la ventana al cargar la página

    window.addEventListener("resize", handleResize); // Verificar el ancho de la ventana al redimensionar

    // Limpiar el listener de evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {(!isMobile && (
        <aside
          className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark navbar-collapse"
          id="sidenav-main"
        >
          <div className="sidenav-header">
            <i
              className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
              aria-hidden="true"
              id="iconSidenav"
            ></i>
            <a className="navbar-brand m-0" target="_blank">
              <img
                src={logo}
                className="navbar-brand-img h-100"
                alt="main_logo"
              />{" "}
              <span className="ms-1 font-weight-bold text-white">
                EMCARTAGO
              </span>
            </a>
          </div>
          <hr className="horizontal light mt-0 mb-2" />
          <div
            className="collapse navbar-collapse w-auto"
            id="sidenav-collapse-main"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/Dashboard"
                  isActive={(match, location) =>
                    location.pathname === "/Dashboard"
                  }
                >
                  <a
                    className={`nav-link text-white ${
                      location.pathname === "/Dashboard" ? "active" : ""
                    }`}
                  >
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">home</i>
                    </div>
                    <span className="nav-link-text ms-1">Bombeo N°2</span>
                  </a>
                </NavLink>
              </li>
              <li>
                <a
                  className="nav-link text-white"
                  onClick={() => setShowPlanta1(!showPlanta1)}
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">receipt</i>
                  </div>
                  <span className="nav-link-text ms-1">Planta N°1</span>
                </a>
                {showPlanta1 && (
                  <ul className="navbar-nav ms-3">
                    <li className="nav-item">
                      <NavLink
                        to="/Dashboard/Planta1/Turbiedad"
                        isActive={(match, location) =>
                          location.pathname === "/Dashboard/Planta1/Turbiedad"
                        }
                      >
                        <a
                          className={`nav-link text-white   ${
                            location.pathname === "/Dashboard/Planta1/Turbiedad"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i className="material-icons opacity-10">opacity</i>
                          </div>
                          <span className="nav-link-text ms-1">Turbiedad</span>
                        </a>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/Dashboard/Planta1/Color"
                        isActive={(match, location) =>
                          location.pathname === "/Dashboard/Planta1/Color"
                        }
                      >
                        <a
                          className={`nav-link text-white   ${
                            location.pathname === "/Dashboard/Planta1/Color"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i className="material-icons opacity-10">palette</i>
                          </div>
                          <span className="nav-link-text ms-1">Color</span>
                        </a>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  className="nav-link text-white"
                  onClick={() => setShowPlanta2(!showPlanta2)}
                >
                  <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="material-icons opacity-10">receipt_long</i>
                  </div>
                  <span className="nav-link-text ms-1">Planta N°2</span>
                </a>
                {showPlanta2 && (
                  <ul className="navbar-nav ms-3">
                    <li className="nav-item">
                      <NavLink
                        to="/Dashboard/Planta2/Turbiedad2"
                        className={`nav-link text-white ${
                          location.pathname === "/Dashboard/Planta2/Turbiedad2"
                            ? "active"
                            : ""
                        }`}
                      >
                        <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">opacity</i>
                        </div>
                        <span className="nav-link-text ms-1">Turbiedad</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/Dashboard/Planta2/Color2"
                        className={`nav-link text-white ${
                          location.pathname === "/Dashboard/Planta2/Color2"
                            ? "active"
                            : ""
                        }`}
                      >
                        <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">palette</i>
                        </div>
                        <span className="nav-link-text ms-1">Color</span>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <Ubicacion />
        </aside>
      )) ||
        (abrir === true ? (
          <aside
            className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark navbar-collapse"
            id="sidenav-main"
          >
            <div className="sidenav-header">
              <i
                className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                aria-hidden="true"
                id="iconSidenav"
              ></i>
              <a className="navbar-brand m-0" target="_blank">
                <img
                  src={logo}
                  className="navbar-brand-img h-100"
                  alt="main_logo"
                />{" "}
                <span className="ms-1 font-weight-bold text-white">
                  EMCARTAGO
                </span>
              </a>
            </div>
            <hr className="horizontal light mt-0 mb-2" />
            <div
              className="collapse navbar-collapse w-auto"
              id="sidenav-collapse-main"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/Dashboard"
                    isActive={(match, location) =>
                      location.pathname === "/Dashboard"
                    }
                  >
                    <a
                      className={`nav-link text-white ${
                        location.pathname === "/Dashboard" ? "active" : ""
                      }`}
                    >
                      <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="material-icons opacity-10">home</i>
                      </div>
                      <span className="nav-link-text ms-1">Bombeo N°2</span>
                    </a>
                  </NavLink>
                </li>
                <li >
                  <a
                    className="nav-link text-white"
                    onClick={() => setShowPlanta1(!showPlanta1)}
                  >
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">receipt</i>
                    </div>
                    <span className="nav-link-text ms-1">Planta N°1</span>
                  </a>
                  {showPlanta1 && (
                    <ul className="navbar-nav ms-3">
                      <li className="nav-item" style={{marginRight: "100px"}}>
                        <NavLink
                          to="/Dashboard/Planta1/Turbiedad"
                          isActive={(match, location) =>
                            location.pathname === "/Dashboard/Planta1/Turbiedad"
                          }
                        >
                          <a
                            className={`nav-link text-white   ${
                              location.pathname ===
                              "/Dashboard/Planta1/Turbiedad"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                              <i className="material-icons opacity-10">
                                opacity
                              </i>
                            </div>
                            <span className="nav-link-text ms-1">
                              Turbiedad
                            </span>
                          </a>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/Dashboard/Planta1/Color"
                          isActive={(match, location) =>
                            location.pathname === "/Dashboard/Planta1/Color"
                          }
                        >
                          <a
                            className={`nav-link text-white   ${
                              location.pathname === "/Dashboard/Planta1/Color"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                              <i className="material-icons opacity-10">
                                palette
                              </i>
                            </div>
                            <span className="nav-link-text ms-1">Color</span>
                          </a>
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    className="nav-link text-white"
                    onClick={() => setShowPlanta2(!showPlanta2)}
                  >
                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="material-icons opacity-10">receipt_long</i>
                    </div>
                    <span className="nav-link-text ms-1">Planta N°2</span>
                  </a>
                  {showPlanta2 && (
                    <ul className="navbar-nav ms-3">
                      <li className="nav-item">
                        <NavLink
                          to="/Dashboard/Planta2/Turbiedad2"
                          isActive={(match, location) =>
                            location.pathname ===
                            "/Dashboard/Planta2/Turbiedad2"
                          }
                        >
                          <a
                            className={`nav-link text-white   ${
                              location.pathname ===
                              "/Dashboard/Planta2/Turbiedad2"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                              <i className="material-icons opacity-10">
                                opacity
                              </i>
                            </div>
                            <span className="nav-link-text ms-1">
                              Turbiedad
                            </span>
                          </a>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/Dashboard/Planta2/Color2"
                          isActive={(match, location) =>
                            location.pathname === "/Dashboard/Planta2/Color2"
                          }
                        >
                          <a
                            className={`nav-link text-white   ${
                              location.pathname === "/Dashboard/Planta2/Color2"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                              <i className="material-icons opacity-10">
                                palette
                              </i>
                            </div>
                            <span className="nav-link-text ms-1">Color</span>
                          </a>
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <Ubicacion />
          </aside>
        ) : (
          <></>
        ))}
    </>
  );
};

export default Aside;
