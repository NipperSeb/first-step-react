import React from "react";
import "../styles/Notes.css";

const Notes = ({ data }) => {
  return (
    <div className="lmj-api-item">
      <ul className="lmj-api-title">
        {data && data.map((item, index) => <li key={index}>{item.title}</li>)}
      </ul>
    </div>
  );
};

export default Notes;
