import { Outlet, Link } from "react-router-dom";
import "./home.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Register } from "../register/register";
import { Login } from "../login/login";

export function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [active, setActive] = useState(true);

  return (
    <>
      <header className="d-none d-sm-none d-md-block d-lg-block">
        <div className="d-flex justify-content-around align-items-center mt-2">
          <div id="logo" className="">
            <Link to="/">
              <img src="./assest/image/whole.png" alt="" height="22px" />
            </Link>
          </div>
          <div id="searchBox">
            <div className="input-group p-1 rounded-pill align-item-center">
              <button className="bi bi-search btn me-3 text-secondary"></button>
              <input
                type="text"
                placeholder="Search for your favorite groups in ATG"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  width: "275px",
                  fontSize: "12px",
                  fontWeight: "500",
                  outline: "none",
                }}
              />
            </div>
          </div>
          <div id="account" className="mt-3">
            <p>
              Create Account.
              <span
                className="fw-bold text-decoration-none text-primary"
                style={{ cursor: "pointer" }}
                onClick={handleShow}
              >
                It's free!
              </span>
              &nbsp;
              <i className="bi bi-caret-down-fill"></i>
            </p>
          </div>
        </div>
      </header>

      <div id="banner">
        <div className="d-lg-none d-md-none d-sm-block">
          <div className="d-flex justify-content-between p-4">
            <button
              id="btnBack"
              className="text-white btn bi bi-arrow-left"
            ></button>
            <button
              id="btnJoin"
              className=" btn text-white fw-bold border-white"
            >
              JOIN GROUP
            </button>
          </div>
        </div>
        <div
          id="bannerText"
          className="position-absolute bottom-0 ms-5 mb-5 text-white"
        >
          <p className="fs-2 fw-bold">Computer Engineering</p>
          <p className="">142,765 Computer Engineers follow this</p>
        </div>
      </div>

      {/* extra option for mobile view*/}
      <div
        id="mobile_view_outer"
        className="m-auto d-block d-sm-block d-md-none d-lg-none"
        style={{ width: "88%" }}
      >
        <div
          id="mobile_view"
          className="d-flex justify-content-between align-item-center mt-4 mb-4 ms-2 me-2"
        >
          <div className="fw-bold">Posts(368)</div>
          <div className="btn fw-bold" style={{ backgroundColor: "#CED4DA" }}>
            Filter:
            <select
              className="bg-transparent"
              style={{ outline: "none", border: "none" }}
            >
              <option>All</option>
              <option>only One</option>
            </select>
          </div>
        </div>
      </div>

      {/* edit option start*/}
      <div id="editOption" className="d-block d-sm-block d-md-none d-lg-none">
        <div
          className="position-fixed rounded-circle d-flex justify-content-center align-items-center position-absolute bottom-0 end-0"
          style={{ height: "60px", width: "60px", backgroundColor: "#FF6B6B" }}
        >
          <i className="bi bi-pencil text-white"></i>
        </div>
      </div>
      {/* edit option end */}

      {/* extra option */}

      {/* Navbar start */}
      <div
        id="navbar"
        className="m-auto bg-white border-bottom border-2 d-none d-sm-none d-md-block d-lg-block"
        style={{ width: "88%" }}
      >
        <div className="mt-5 d-flex justify-content-between pb-3">
          <div>
            <Link to="post">
              <span className="btn">All Post(32)</span>
            </Link>
            <Link to="artical">
              <span className="btn text-secondary">Artical</span>
            </Link>
            <Link to="event">
              <span className="btn text-secondary">Event</span>
            </Link>
            <Link to="education">
              <span className="btn text-secondary">Education</span>
            </Link>
            <Link to="job">
              <span className="btn text-secondary">Job</span>
            </Link>
          </div>
          <div>
            <div className="d-flex justify-content-end">
              <button className="btn text-black me-2">
                Write a post&nbsp;<i className="bi bi-caret-down-fill"></i>
              </button>
              <button className="btn btn-primary bi bi-person-fill-add">
                &nbsp;Join Group
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}

      {/*  section part start*/}
      <div>
        <Outlet></Outlet>
      </div>
      {/* section part End */}

      {/* ======================================================== */}
      {/* modal part start */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title
          className="d-none d-sm-none d-md-block d-lg-block p-2"
          style={{ backgroundColor: "#effff4" }}
        >
          <h6 style={{ color: "green" }} className="text-center">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </h6>
        </Modal.Title>
        <Modal.Body>
          <div className="d-flex p-2">
            {/* switch register & login form */}
            {active ? <Register /> : <Login />}

            <div className="d-none d-sm-none d-md-none d-lg-block">
              <div>
                <p className="text-end">
                  {active ? "Already have an account?" : "Haven't account?"}

                  <span
                    className="text-primary fw-semibold cursor-pointer"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setActive((active) => !active);
                    }}
                  >
                    &nbsp;{active ? "Sign In" : "Create account"}
                  </span>
                </p>
              </div>
              <div className="d-none d-sm-none d-md-block d-lg-block">
                <img src="./assest/image/atg_illustration.png" alt="" />
              </div>
              <div>
                <p
                  className="text-secondary text-end fw-semibold "
                  style={{ fontSize: "9px " }}
                >
                  By singning up, you agree to our terms & conditions, Privacy
                  policy
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* modal part End */}
    </>
  );
}
