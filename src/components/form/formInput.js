import React from "react";
import styles from "./styles.module.css";

const FormInput = ({
  value,
  handleChange,
  name,
  error = false,
  placeholder,
}) => {
  return (
    <div className={`${styles.input_width} mb-3`}>
      <label for={name}>{name.charAt(0).toUpperCase() + name.slice(1)}:</label>
      <input
        className={`form-control ${error ? styles.input_error : ""}`}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <p className={styles.error_message}>{error}</p>}
    </div>
  );
};

export default FormInput;
