import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  useGetBookByIdQuery,
  useGetAuthorsQuery,
  useUpdateBookMutation,
} from "../../api/apiSlice";
import { useFormik } from "formik";
import Loader from "../../components/commonComponents/loader/Loader";
import { basicSchema } from "../../schemas";
import Form from "../../components/form";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [base64URL, setBase64URL] = useState("");
  const [updateBook] = useUpdateBookMutation();
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
      publisher: formik.values.publisher,
      isbn: formik.values.isbn,
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
      publisher: "",
      isbn: "",
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
        publisher: bookDetails.publisher || "",
        isbn: bookDetails.isbn || "",
      });
    }
  }, [bookDetails, authors]);

  if (booksLoading || authorsLoading) {
    return <Loader />;
  }

  if (booksIsError || authorsIsError) {
    return <h1>{booksError || authorsError}</h1>;
  }
  return <Form formik={formik} authors={authors} setBase64URL={setBase64URL} />;
};

export default UpdateBook;
