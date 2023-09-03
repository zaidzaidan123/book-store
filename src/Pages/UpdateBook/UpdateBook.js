import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  useGetBookByIdQuery,
  useGetAuthorsQuery,
  useAddAuthorMutation,
  useUpdateBookMutation,
} from "../../api/apiSlice";
import { useFormik } from "formik";
import Loader from "../../components/commonComponents/loader/Loader";
import Modal from "../../components/modal/Modal";
import { basicSchema } from "../../schemas";
import styles from "./styles.module.css";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [base64URL, setBase64URL] = useState("");
  const [updateBook] = useUpdateBookMutation();
  const [addAuthor] = useAddAuthorMutation();
  const {
    data: bookDetails,
    isLoading: booksLoading,
    isSuccess: booksSuccess,
    isError: booksIsError,
    error: booksError,
  } = useGetBookByIdQuery(id);
  const {
    data: authors,
    isLoading: authorsLoading,
    isSuccess: authorsSuccess,
    isError: authorsIsError,
    error: authorsError,
  } = useGetAuthorsQuery();
  const onSubmit = () => {
    const updatedBook = {
      id: id,
      title: formik.values.title,
      authorId: author1?.id,
      thumbnail: base64URL ? base64URL : bookDetails.thumbnail,
      description: formik.values.description,
      publisher: bookDetails.publisher,
      isbn: bookDetails.isbn,
      favorite: bookDetails.favorite,
      tags: formik.values.tags.split(" "),
    };
    updateBook(updatedBook);
    navigate(`/details/${id}`);
  };
  const author = authors?.find((item) => item?.id === bookDetails?.authorId);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      author: "",
      tags: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  const author1 = authors?.find((item) => item?.name === formik.values.author);

  useEffect(() => {
    if (booksSuccess && authorsSuccess) {
      formik.setValues({
        title: bookDetails.title || "",
        description: bookDetails.description || "",
        author: author.name || "",
        tags: bookDetails?.tags?.join(" ") || "",
        image: bookDetails?.thumbnail || base64URL,
      });
    }
  }, [bookDetails, authors]);
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

  if (booksLoading || authorsLoading) {
    return <Loader />;
  }

  if (booksIsError || authorsIsError) {
    return <h1>{booksError || authorsError}</h1>;
  }
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-100 p-md-5 p-3 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="mb-3 w-100">
        <label for="title" class="form-label">
          Title:
        </label>
        <input
          type="text"
          class={`form-control ${
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
        <label for="authors" class="form-label">
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
            {authors.map((item) => {
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

      <div class="mb-3 w-100">
        <label for="description" class="form-label">
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
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UpdateBook;
