import React,{useState} from "react";
import Modal from "../modal/Modal";
import styles from "./styles.module.css";
import { useAddAuthorMutation } from "../../api/apiSlice";

const Form = ({
  formik,
  authors,
  setBase64URL,
  imageRequired = false,
}) => {
  const [addAuthor] = useAddAuthorMutation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleAddAuthor = () => {
    addAuthor({ name: firstName + " " + lastName });

    alert("Your Author has been added to the list search for him to put him");
  };
  const handleImageInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64URL = e.target.result;
        setBase64URL(base64URL);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-100 p-md-5 p-3 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="mb-3 w-100">
        <label for="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          className={`form-control ${
            formik.errors.title ? styles.input_error : ""
          }`}
          id="title"
          placeholder="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {formik.errors.title && (
          <p className={styles.error_message}>{formik.errors.title}</p>
        )}
      </div>

      <div className="mb-3 w-100">
        <label for="authors" className="form-label">
          Author:
        </label>
        <div className="d-flex gap-5">
          <input
            list="authors"
            id="author"
            className={`w-75 form-control ${
              formik.errors.author ? styles.input_error : ""
            }`}
            placeholder="select one"
            value={formik.values.author}
            onChange={formik.handleChange}
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
        {formik.errors.author && (
          <p className={styles.error_message}>{formik.errors.author}</p>
        )}
      </div>

      <div className="mb-3 w-100">
        <label for="tags">Tags:</label>
        <input
          className={`form-control ${
            formik.errors.tags ? styles.input_error : ""
          }`}
          id="tags"
          placeholder="To add multiple tags, leave a space between words"
          value={formik.values.tags}
          onChange={formik.handleChange}
        />
        {formik.errors.tags && (
          <p className={styles.error_message}>{formik.errors.tags}</p>
        )}
      </div>

      <div className="mb-3 w-100">
        <label for="description" className="form-label">
          Description:
        </label>
        <textarea
          className={`form-control ${
            formik.errors.description ? styles.input_error : ""
          }`}
          id="description"
          rows="3"
          placeholder="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
        ></textarea>
        {formik.errors.description && (
          <p className={styles.error_message}>{formik.errors.description}</p>
        )}
      </div>
      <div className="mb-3 w-100">
        <label for="image">Image:</label>
        <input
          type="file"
          id="image"
          className="form-control"
          accept="image/*"
          onChange={handleImageInputChange}
          required={imageRequired}
        />
      </div>
      <div className="mb-3 w-100">
        <label for="isbn" className="form-label">
          ISBN:
        </label>
        <input
          type="text"
          className={`form-control`}
          id="isbn"
          placeholder="Title"
          value={formik.values.isbn}
          onChange={formik.handleChange}
        />
      </div>
      <div className="mb-3 w-100">
        <label for="publisher" className="form-label">
          Publisher:
        </label>
        <input
          type="text"
          className={`form-control`}
          id="publisher"
          placeholder="Title"
          value={formik.values.publisher}
          onChange={formik.handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
