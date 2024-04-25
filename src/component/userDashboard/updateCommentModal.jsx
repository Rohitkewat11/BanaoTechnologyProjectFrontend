import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";

export function UpdateCommentModal({ ID }) {
  const [data, setData] = useState({});

  const formik = useFormik({
    initialValues: {
      id: data._id,
      comment: data.comment,
    },
    enableReinitialize: true,

    onSubmit: (val) => {
      console.log(val);
      axios.post("https://banaotechnologyprojectbackend.onrender.com/updateComment", val);
      window.location.reload(true);
    },
  });

  useEffect(() => {
    const commID = {
      ID: ID,
    };
    axios
      .post("https://banaotechnologyprojectbackend.onrender.com/findComment", commID)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-2">
          <textarea
            className="form-control"
            placeholder="leave your comment..."
            name="comment"
            id=""
            value={formik.values.comment}
            onChange={formik.handleChange}
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary mt-3">
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}
