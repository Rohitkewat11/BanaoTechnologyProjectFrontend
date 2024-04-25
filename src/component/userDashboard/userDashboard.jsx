import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { UpdateCommentModal } from "./updateCommentModal";

export function UserDashboard() {
  const [comData, setComData] = useState([]);
  const [id, setId] = useState();
  let nevigate = useNavigate();

  const uName = sessionStorage.getItem("userName");

  // for update Modal//
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // formik for collect form values//
  const formik = useFormik({
    initialValues: {
      comment: "",
      like: 0,
    },

    onSubmit: async (comment) => {
      axios.post("https://banaotechnologyprojectbackend.onrender.com/addComment", comment);
      formik.values.comment = "";
    },
  });

  // for remove comment//
  function handleRemoveBtn(ID) {
    const temp = {
      id: ID,
    };
    axios.post(`https://banaotechnologyprojectbackend.onrender.com/removeComment`, temp);
  }

  // for update comment//
  function handleUpdateBtn(ID) {
    setId(ID);
  }

  // function for handle like//
  function handleLikeBtn(Event) {
    const data = {
      id: Event.target.value,
      like: parseInt(Event.target.name) + 1,
    };
    axios.post("https://banaotechnologyprojectbackend.onrender.com/updateLike", data);
  }

  // function for handle logout button//
  function handleLogoutBtn() {
    sessionStorage.removeItem("userName");
    nevigate("/");
  }

  // for reload page//
  useEffect(() => {
    axios
      .get("https://banaotechnologyprojectbackend.onrender.com/data")
      .then((res) => {
        setComData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [comData]);

  return (
    <>
      <div>
        <div className="d-flex justify-content-around align-items-center mt-2">
          <div id="logo">
            <img src="./assest/image/whole.png" alt="" height="22px" />
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
          <div id="userDetails">
            <p className="fw-bold">
              Welcome!&nbsp;<span>{uName}</span>{" "}
              <i
                onClick={handleLogoutBtn}
                className="bi bi-power text-danger"
                title="logout"
                style={{ fontSize: "1.2rem", cursor: "pointer" }}
              ></i>
            </p>
          </div>
        </div>
      </div>

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

      <div className="row w-75 m-auto mt-4">
        <div className="col-6">
          <div className="border rounded-3 p-2">
            <div className="d-flex">
              <div>
                <button className="btn fw-semibold">
                  <i class="bi bi-camera-reels-fill text-danger"></i>&nbsp;Live
                  Video
                </button>
                <button className="btn fw-semibold">
                  <i class="bi bi-image-fill text-success"></i>&nbsp;Photo/Video
                </button>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-2">
                <textarea
                  className="form-control"
                  placeholder="leave your comment..."
                  name="comment"
                  id=""
                  value={formik.values.comment}
                  cols="30"
                  rows="5"
                  onChange={formik.handleChange}
                ></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary mt-3">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-6">
          {comData.map((val) => (
            <div key={val._id} className="border rounder mb-2 p-2">
              <div className="">
                <div>
                  <p>{val.comment}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className=" btn bi bi-hand-thumbs-up"
                    onClick={handleLikeBtn}
                    title="Like"
                    value={val._id}
                    name={val.like}
                    style={{ cursor: "pointer" }}
                  >
                    &nbsp;{val.like}
                  </button>
                  <div>
                    <span
                      className="bi bi-pen text-warning me-2"
                      onClick={() => {
                        handleShow();
                        handleUpdateBtn(val._id);
                      }}
                      style={{ cursor: "pointer" }}
                      title="update"
                    ></span>
                    <span
                      className="bi bi-trash text-danger"
                      onClick={() => {
                        handleRemoveBtn(val._id);
                      }}
                      style={{ cursor: "pointer" }}
                      title="remove"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* section part End */}

      {/* modal for Update  start*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-warning">
          <Modal.Title>Update Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateCommentModal ID={id} />
        </Modal.Body>
      </Modal>
      {/* modal for update End */}
    </>
  );
}
