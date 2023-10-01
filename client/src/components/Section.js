import React from "react";

const Section = ({ section }) => {
  return (
    <div className="section">
      <h2>{section.title}</h2>
      <p>{section.content}</p>
    </div>
  );
};

export default Section;
