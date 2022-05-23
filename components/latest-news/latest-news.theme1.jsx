import React from "react";
import PropTypes from "prop-types";

function LatestNewsTheme1({ latestNews }) {
  return (
    <div>
      This is latest news at theme 1 <strong>{latestNews}</strong>
    </div>
  );
}

LatestNewsTheme1.propTypes = {};

export default LatestNewsTheme1;
