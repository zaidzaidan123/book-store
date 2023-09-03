import React from "react";
import styles from "./styles.module.css";
import Triangles from "./Triangles";
const WelcomeWebsite = () => {
  return (
    <section>
      <div className={styles.welcome_website + " overflow-hidden"}>
        <Triangles/>
        <div
          className={
            "d-flex flex-column align-items-center " + styles.welcome_sentences
          }
        >
          <div className="px-3 pb-2 mt-2 mt-xl-0">
            <h3>Welcome to our website!</h3>
            <p>We have a new design that's fresh, modern, and easy to use.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeWebsite;
