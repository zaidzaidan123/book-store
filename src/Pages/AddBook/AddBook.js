import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import { useAddBookMutation, useGetAuthorsQuery } from "../../api/apiSlice";
import { useNavigate } from "react-router";
import Form from "../../components/form";

const AddBook = () => {
  const [addBook] = useAddBookMutation();
  const { data: authors } = useGetAuthorsQuery();
  const navigate = useNavigate();

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
  return (
    <Form
      formik={formik}
      authors={authors}
      setBase64URL={setBase64URL}
      imageRequired={true}
    />
  );
};

export default AddBook;
