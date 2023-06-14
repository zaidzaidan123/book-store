import React, { useEffect, useState } from "react";
import Loader from "../commonComponents/loader/Loader";
import FilterContent from "./filterContent/FilterContent";
import Card from "./mainCard/MainCard";
import styles from "./styles.module.css";
export const MainContent = () => {
  const [topics, setTopics] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tap-web-1.herokuapp.com/topics/list"
        );
        const topicsArray = await response.json();
        setTopics(topicsArray);
        setSpinner(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {spinner ? (
        <main
          className={"px-3 px-md-5 d-flex flex-column gap-4 " + styles.main}
        >
          <FilterContent />
          <h2>"{topics.length}" Web Topics Found</h2>
          <section className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 g-4">
            {topics.map((item, key) => {
              return <Card cardContent={item} key={key} />;
            })}
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
};
