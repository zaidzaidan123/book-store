import React from "react";
import styles from "./styles.module.css";

const FormImage = ({ handleImageInputChange, imageRequired, name }) => {
  return (
    <div className={`${styles.input_width} mb-3`}>
      <label for={name}>{name}:</label>
      <input
        type="file"
        id={name}
        className="form-control"
        accept="image/*"
        onChange={handleImageInputChange}
        required={imageRequired}
      />
    </div>
  );
};

export default FormImage;
