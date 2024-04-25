import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Fpassword() {
  const [active, setActive] = useState(false);
  let nevigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (val) => {
      await axios
        .post("http://127.0.0.1:5500/F_password", val)
        .then((res) => {
          if (res.data) {
            alert(res.data);
            nevigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-25 border rounded ">
          <div className="bg-warning p-1">
            <h4>Reset password</h4>
          </div>
          <div className="p-2">
            <form onSubmit={formik.handleSubmit}>
              <div className="">
                <div>
                  <div>
                    <label className="form-label">Email</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      name="email"
                      required
                    />
                  </div>

                  <label className="form-label">Password</label>
                  <div className="" style={{ position: "relative" }}>
                    <input
                      className="form-control"
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
              </div>
              <div className="text-end">
                <Link to="/">Back</Link>
              </div>
              <button
                type="submit"
                className="d-none d-sm-none d-md-none d-lg-block w-100 btn btn-primary rounded-pill mt-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
