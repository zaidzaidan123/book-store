import React from "react";
import styles from "./styles.module.css";
import Modal from "../modal/Modal";

const FormAuthorsInput = ({
  error,
  value,
  handleChange,
  authors,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  handleAddAuthor,
}) => {
  return (
    <div className={`${styles.input_width} mb-3`}>
      <label for="authors" className="form-label">
        Author:
      </label>
      <div className="d-flex gap-5">
        <input
          list="authors"
          id="author"
          className={`w-75 form-control ${error ? styles.input_error : ""}`}
          placeholder="select one"
          value={value}
          onChange={handleChange}
        />
        <datalist id="authors">
          {authors?.map((item) => {
            return <option value={item.name} />;
          })}
        </datalist>

        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-primary w-25"
          type="button"
        >
          Add Author
        </button>

        <Modal
          title={"Add Author"}
          buttonName={"Create Author"}
          message={
            <div className="d-flex flex-column gap-1">
              <label id="firstName">First Name:</label>
              <input
                id="firstName"
                className="form-control"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label id="lastName">Last Name:</label>
              <input
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          }
          handleFunction={handleAddAuthor}
        />
      </div>
      {error && <p className={styles.error_message}>{error}</p>}
    </div>
  );
};

export default FormAuthorsInput;
