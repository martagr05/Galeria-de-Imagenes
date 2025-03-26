import React from "react";

const Loading = () => {
  return (
    <div
      className="spinner-border text-info"
      style={{ textAlign: "center" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
