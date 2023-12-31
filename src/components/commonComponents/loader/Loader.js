import React from "react";
const Loader = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
