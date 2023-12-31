import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/commonComponents/loader/Loader";
import CourseDetails from "../../components/details/courseDetails/CourseDetails";
import DetailsCard from "../../components/details/detailsCard/DetailsCard";
import styles from "./styles.module.css";
import { useGetBookByIdQuery } from "../../api/apiSlice";
const DetailsPage = () => {
  const { id } = useParams();
  const { data: bookDetails, isLoading, isError } = useGetBookByIdQuery(id);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h1>Failed to load the details</h1>;
  }
  return (
    <main>
      <section
        className={
          styles.course_details +
          " " +
          styles.details_container +
          " d-flex gap-4 flex-wrap py-5"
        }
      >
        <DetailsCard
          image={bookDetails.thumbnail}
          topic={bookDetails.title}
          name={bookDetails.publisher}
          id={id}
          cardContent={bookDetails}
        />
        <CourseDetails
          type={bookDetails.isbn}
          topic={bookDetails.title}
          description={bookDetails.description}
          id={id}
        />
      </section>
    </main>
  );
};

export default DetailsPage;
