import React from "react";
import styles from "./styles.module.css";

const FormTextArea = ({ value, handleChange, name, error }) => {
  return (
    <div className={`${styles.input_width} mb-3`}>
      <label for={name} className="form-label">
        {name.charAt(0).toUpperCase() + name.slice(1)}:
      </label>
      <textarea
        className={`form-control ${error ? styles.input_error : ""}`}
        id="description"
        rows="3"
        placeholder="Description"
        value={value}
        onChange={handleChange}
      ></textarea>
      {error && <p className={styles.error_message}>{error}</p>}
    </div>
  );
};

export default FormTextArea;
