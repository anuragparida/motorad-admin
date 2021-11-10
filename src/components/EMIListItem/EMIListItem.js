import React from "react";
import axios from "axios";
import { server, config, checkAccess } from "../../env";

const EMIListItem = (props) => {
  const data = props.data;
  const editData = props.editData;
  const deleteCoupon = async () => {
    await axios
      .delete(server + `/api/emi/delete/${data.id}`, config)
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
      <div class="nk-tb-col">{data.partner}</div>
      <div class="nk-tb-col">{data.rate}</div>
      <div class="nk-tb-col">{data.duration}</div>
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

export default EMIListItem;
