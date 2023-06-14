import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../commonComponents/loader/Loader";
import CourseDetails from "./courseDetails/CourseDetails";
import DetailsCard from "./detailsCard/DetailsCard";
import styles from "./styles.module.css";
import SupTopics from "./supTopics/SupTopics";
const DetailsPage = () => {
  const { id } = useParams();
  const [detailsContent, setDetailsContent] = useState({});
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://tap-web-1.herokuapp.com/topics/details/${id}`
        );
        const details = await response.json();
        setDetailsContent(details);
        setSpinner(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      {spinner ? (
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
              type={detailsContent.category}
              rate={detailsContent.rating}
              topic={detailsContent.topic}
              description={detailsContent.description}
            />
            <DetailsCard
              image={detailsContent.image}
              topic={detailsContent.topic}
              name={detailsContent.name}
            />
          </section>
          <SupTopics
            topic={detailsContent.topic}
            subTopics={detailsContent.subtopics}
          />
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default DetailsPage;
