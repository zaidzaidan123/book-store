import React, { useState } from "react";
import { useAddAuthorMutation } from "../../api/apiSlice";
import FormInput from "./formInput";
import FormImage from "./formImage";
import FormTextArea from "./formTextArea";
import FormAuthorsInput from "./formAuthorsInput";

const Form = ({ formik, authors, setBase64URL, imageRequired = false }) => {
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
      className="w-100 p-md-5 p-3 d-flex flex-column justify-content-center align-items-center "
    >
      <FormInput
        value={formik.values.title}
        handleChange={formik.handleChange}
        name={"title"}
        error={formik.errors.title}
        placeholder={"title"}
      />
      <FormAuthorsInput
        error={formik.errors.author}
        value={formik.values.author}
        handleChange={formik.handleChange}
        authors={authors}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        handleAddAuthor={handleAddAuthor}
      />
      <FormInput
        value={formik.values.tags}
        handleChange={formik.handleChange}
        name={"tags"}
        error={formik.errors.tags}
        placeholder={"make spaces between words"}
      />

      <FormTextArea
        value={formik.values.description}
        handleChange={formik.handleChange}
        name={"description"}
        error={formik.errors.description}
      />

      <FormImage
        handleImageInputChange={handleImageInputChange}
        imageRequired={imageRequired}
        name={"image"}
      />

      <FormInput
        value={formik.values.isbn}
        handleChange={formik.handleChange}
        name={"isbn"}
        placeholder={"isbn"}
      />

      <FormInput
        value={formik.values.publisher}
        handleChange={formik.handleChange}
        name={"publisher"}
        placeholder={"publisher"}
      />

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
