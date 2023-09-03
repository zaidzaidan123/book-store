import React from "react";
import { useParams } from "react-router";
import { useGetBookByIdQuery } from "../../api/apiSlice";

const UpdateBook = () => {
  const { id } = useParams();
  const { data: bookDetails } = useGetBookByIdQuery(id);
  return (
    <section className="p-5 w-100 d-flex flex-column justify-content-center align-items-center">
      <div class="mb-3 w-75">
        <label for="title" class="form-label">
          Title:
        </label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
        />
      </div>
      <div class="mb-3 w-75">
        <label for="exampleFormControlTextarea1" class="form-label">
          Description:
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          maxLength={255}
          placeholder="Description"
        ></textarea>
      </div>
    </section>
  );
};

export default UpdateBook;
