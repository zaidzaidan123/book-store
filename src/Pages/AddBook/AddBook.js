import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import {
  useAddBookMutation,
  useAddAuthorMutation,
  useGetAuthorsQuery,
} from "../../api/apiSlice";
import { useNavigate } from "react-router";
import Form from "../../components/form";

const AddBook = () => {
  const [addBook] = useAddBookMutation();
  const [addAuthor] = useAddAuthorMutation();
  const { data: authors } = useGetAuthorsQuery();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [base64URL, setBase64URL] = useState("");
  const onSubmit = () => {
    const newBook = {
      title: formik.values.title,
      authorId: author1?.id,
      thumbnail: base64URL,
      description: formik.values.description,
      publisher: formik.values.publisher,
      isbn: formik.values.isbn,
      favorite: false,
      tags: formik.values.tags.split(" "),
    };
    addBook(newBook);
    alert("book added successfully");
    navigate("/");
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      author: "",
      tags: "",
      publisher: "",
      isbn: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  const author1 = authors?.find((item) => item?.name === formik.values.author);
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
    <Form
      formik={formik}
      authors={authors}
      firstName={firstName}
      lastName={lastName}
      setFirstName={setFirstName}
      setLastName={setLastName}
      handleAddAuthor={handleAddAuthor}
      handleImageInputChange={handleImageInputChange}
      imageRequired={true}
    />
  );
};

export default AddBook;
