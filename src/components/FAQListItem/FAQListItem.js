import React from "react";
import axios from "axios";
import { server, config, checkAccess } from "../../env";

const FAQListItem = (props) => {
  const data = props.data;
  const editData = props.editData;
  const deleteCoupon = async () => {
    await axios
      .delete(server + `/api/product/delete/${data.id}`, config)
      .then((rsp) => {
        console.log(rsp);
        window.location.reload();
      })
      .catch((err) => {
        checkAccess(err);
        console.error(err);
      });
  };
  return (
    <div class="nk-tb-item">
      <div class="nk-tb-col">{data.question}</div>
      <div class="nk-tb-col">{data.answer}</div>
      <div class="nk-tb-col">{data.type}</div>
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
      <div class="nk-tb-col">
        <a
          href="javascript:void(0)"
          class="btn btn-danger"
          onClick={deleteCoupon}
        >
          Delete
        </a>
      </div>
    </div>
  );
};

export default FAQListItem;
