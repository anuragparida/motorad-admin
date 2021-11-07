import React from "react";
import { Link } from "react-router-dom";

const FormsListItem = (props) => {
  const data = props.data;
  return (
    <div class="nk-tb-item">
      {Object.keys(data).map((key, index) => (
        <div class="nk-tb-col">{data[key]}</div>
      ))}
    </div>
  );
};

export default FormsListItem;
