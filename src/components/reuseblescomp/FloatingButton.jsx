"use client";
import React, { useState } from "react";

function FloatingButton() {
  const [isUp, setIsUp] = useState(false);

  const handleClick = () => {
    setIsUp(!isUp);
  };

  const buttonStyle = {
    position: "absolute",
    bottom: isUp ? "50px" : "20px",
    right: "20px",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "15px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "bottom 0.3s ease",
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {isUp ? "▲" : "▼"}
    </button>
  );
}

export default FloatingButton;
