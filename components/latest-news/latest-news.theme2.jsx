import React from "react";

function LatestNewsTheme2({ latestNews }) {
  return (
    <div style={{ background: "#e8e8e8", padding: "10px", borderRadius: "6" }}>
      This is latest news at theme 2 <strong>{latestNews}</strong>
    </div>
  );
}

export default LatestNewsTheme2;
