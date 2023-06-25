import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/commonComponents/loader/Loader";
import CourseDetails from "../../components/details/courseDetails/CourseDetails";
import DetailsCard from "../../components/details/detailsCard/DetailsCard";
import styles from "./styles.module.css";
import SupTopics from "../../components/details/supTopics/SupTopics";
import { useAPI } from "../../customHooks/useAPI";
const DetailsPage = () => {
  const { id } = useParams();
  const courseDetails = useAPI(
    `https://tap-web-1.herokuapp.com/topics/details/${id}`
  );

  if (!courseDetails.loading) {
    return <Loader />;
  }
  if (courseDetails.error) {
    return <h1>Failed to load the details</h1>;
  }
  return (
    <main>
      <section
        className={
          styles.course_details +
          " " +
          styles.details_container +
          " d-flex gap-4 flex-wrap"
        }
      >
        <CourseDetails
          type={courseDetails.post.category}
          rate={courseDetails.post.rating}
          topic={courseDetails.post.topic}
          description={courseDetails.post.description}
        />
        {console.log(courseDetails.post.image)}
        <DetailsCard
          image={courseDetails.post.image}
          topic={courseDetails.post.topic}
          name={courseDetails.post.name}
          rating={courseDetails.post.rating}
          id={id}
        />
      </section>
      <SupTopics
        topic={courseDetails.post.topic}
        subTopics={courseDetails.post.subtopics}
      />
    </main>
  );
};

export default DetailsPage;
