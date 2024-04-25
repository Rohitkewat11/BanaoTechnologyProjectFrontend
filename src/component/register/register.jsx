import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";

export function Register() {
  const [error, setError] = useState();
  const [active, setActive] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cnf_password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      if (values.password === values.cnf_password) {
        await axios
          .post("https://banaotechnologyprojectbackend.onrender.com/addUser", values)
          .then((res) => {
            alert(res.data);
            formik.values.firstName = "";
            formik.values.lastName = "";
            formik.values.email = "";
            formik.values.password = "";
            formik.values.cnf_password = "";
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setError("password not match");
      }
    },
  });

  return (
    <>
      <div className="">
        <h5>Create Account</h5>
        <form onSubmit={formik.handleSubmit}>
          <div className="border">
            <div className="d-flex">
              <input
                className="border p-2"
                type="text"
                placeholder="First Name"
                style={{ outline: "none" }}
                onChange={formik.handleChange}
                name="firstName"
                value={formik.values.firstName}
                required
              />
              <input
                className="border p-2"
                type="text"
                placeholder="Last Name"
                style={{ outline: "none" }}
                onChange={formik.handleChange}
                name="lastName"
                value={formik.values.lastName}
                required
              />
            </div>
            <div>
              <div>
                <input
                  className="border p-2 w-100"
                  type="text"
                  placeholder="Email"
                  style={{ outline: "none" }}
                  onChange={formik.handleChange}
                  name="email"
                  value={formik.values.email}
                  required
                />
              </div>

              <div>
                <div className="" style={{ position: "relative" }}>
                  <input
                    className="border p-2 w-100"
                    value={formik.values.password}
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
                    style={{
                      position: "absolute",
                      top: "0.4rem",
                      right: "5px",
                    }}
                  ></i>
                </div>
              </div>
              <div>
                <input
                  className="border p-2 w-100"
                  type="password"
                  placeholder="Confirm Password"
                  style={{ outline: "none" }}
                  onChange={formik.handleChange}
                  name="cnf_password"
                  value={formik.values.cnf_password}
                  required
                />
              </div>
            </div>
          </div>
          <p className="text-danger fw-semibold">{error}</p>{" "}
          {/* for display error Msg */}
          <button
            type="submit"
            className="d-none d-sm-none d-md-none d-lg-block w-100 btn btn-primary rounded-pill mt-3"
          >
            Create Account
          </button>
          <div className="d-block d-sm-block d-md-block d-lg-none">
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-primary rounded-pill mt-3">
                Create Account
              </button>
              <div>
                or,<Link className="text-black">Log In</Link>
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
            &nbsp; Sign up with facebook
          </button>
          <button className="btn form-conrol border mt-3">
            <img
              src="./assest/image/search.png"
              width="16"
              height="16"
              alt=""
            />
            &nbsp; Sign up with Google
          </button>
        </div>
      </div>
    </>
  );
}
