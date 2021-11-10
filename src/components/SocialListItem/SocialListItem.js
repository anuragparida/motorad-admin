import React from "react";
import PropTypes from "prop-types";

const SocialListItem = (props) => {
  const data = props.data;
  const editData = props.editData;
  return (
    <div class="nk-tb-item">
      <div class="nk-tb-col">{data.name}</div>
      <div class="nk-tb-col">{data.link}</div>
      <div class="nk-tb-col">
        <a
          href="javascript:void(0)"
          class="btn btn-warning"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() => {
            editData.func();
          }}
        >
          Edit
        </a>
      </div>
    </div>
  );
};

export default SocialListItem;
