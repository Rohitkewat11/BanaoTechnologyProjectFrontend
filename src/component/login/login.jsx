import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
// import Modal from 'react-bootstrap/Modal';

export function Login() {
  const [error, setError] = useState();
  const [active, setActive] = useState();

  let nevigate = useNavigate();

  // const [lgShow, setLgShow] = useState(false);  //for reset password Modal//

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (value) => {
      await axios
        .post("https://banaotechnologyprojectbackend.onrender.com/userLogin", value)
        .then((res) => {
          if (res.data.text === "ok") {
            sessionStorage.setItem("userName", res.data.data.firstName);
            alert("login successfully");
            nevigate("userDashboard");
          } else {
            setError(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <>
      <div className="w-100">
        <h5>Welcome Back!</h5>
        <form onSubmit={formik.handleSubmit}>
          <div className="border">
            <div>
              <div>
                <input
                  className="border p-2 w-100"
                  type="text"
                  placeholder="Email"
                  style={{ outline: "none" }}
                  onChange={formik.handleChange}
                  name="email"
                  required
                />
              </div>

              <div className="" style={{ position: "relative" }}>
                <input
                  className="border p-2 w-100"
                  onChange={formik.handleChange}
                  name="password"
                  type={active ? "text" : "password"}
                  placeholder="password"
                  required
                />
                <i
                  className={active ? "bi bi-eye-slash" : "bi bi-eye"}
                  onClick={() => {
                    setActive((active) => !active);
                  }}
                  style={{ position: "absolute", top: "0.4rem", right: "5px" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-1">
            <p className="text-danger">{error}</p> {/* for display error msg */}
            <p className="text-end">
              <Link to="/F_password">forget password</Link>
            </p>
          </div>
          <button
            type="submit"
            className="d-none d-sm-none d-md-none d-lg-block w-100 btn btn-primary rounded-pill mt-3"
          >
            Login
          </button>
          <div className="d-block d-sm-block d-md-block d-lg-none">
            <div className="d-flex justify-content-between align-items-center">
              <button
                type="submit"
                className="btn btn-primary rounded-pill mt-3"
              >
                Login
              </button>
              <div>
                or,<Link className="text-black">create account</Link>
              </div>
            </div>
          </div>
        </form>
        <div className="d-flex flex-column">
          <button className="btn form-conrol border mt-3">
            <img
              src="./assest/image/facebook.png"
              width="16"
              height="16"
              alt=""
            />
            &nbsp; Sign In with facebook
          </button>
          <button className="btn form-conrol border mt-3">
            <img
              src="./assest/image/search.png"
              width="16"
              height="16"
              alt=""
            />
            &nbsp; Sign In with Google
          </button>
        </div>
      </div>

      {/* reset password modal */}
      {/* <Modal 
      size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}
      // aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal> */}
    </>
  );
}
