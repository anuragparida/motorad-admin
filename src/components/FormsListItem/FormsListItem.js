import React from "react";
import { Link } from "react-router-dom";

const FormsListItem = (props) => {
  const data = props.data;

  return (
    <div class="nk-tb-item">
      {Object.keys(data).map((key, index) =>
        key === "invoice" ? (
          <div class="nk-tb-col">
            <a
              href={"https://api.emotorad.in" + data[key]}
              class="btn btn-warning"
              target="_blank"
            >
              Invoice
            </a>
          </div>
        ) : (
          <div class="nk-tb-col">{data[key]}</div>
        )
      )}
    </div>
  );
};

export default FormsListItem;
