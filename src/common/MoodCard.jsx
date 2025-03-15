import React from "react";

export default function MoodCard({ text, description, onClick }) {
  return (
    <>
      <div className="mood-card" onClick={onClick}>
        <h3>{text}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}
