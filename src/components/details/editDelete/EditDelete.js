import React from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteBookMutation } from "../../../api/apiSlice";
import Modal from "../../modal/Modal";
const EditDelete = ({ id }) => {
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();
  const handleDeleteBook = () => {
    deleteBook(id);
    navigate("/");
  };
  return (
    <section>
      <div className={styles.details_container}>
        <div
          className={
            styles.topics +
            " " +
            styles.content_width +
            " " +
            styles.topics_padding
          }
        >
          <div className="d-flex justify-content-between">
            <Link to={`/update/${id}`}>
              <button type="button" className="btn btn-light">
                Edit
              </button>
            </Link>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              type="button"
              className="btn btn-light"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <Modal
        title={"Delete A Book"}
        buttonName={"Delete"}
        message={"Are you Sure you want to delete this book ????"}
        handleDeleteBook={handleDeleteBook}
      />
    </section>
  );
};

export default EditDelete;
