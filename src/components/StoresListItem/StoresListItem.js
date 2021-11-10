import React from "react";
import axios from "axios";
import { server, config, checkAccess } from "../../env";

const StoresListItem = (props) => {
  const data = props.data;
  const editData = props.editData;
  const deleteCoupon = async () => {
    await axios
      .delete(server + `/api/store/delete/${data.id}`, config)
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
      <div class="nk-tb-col">
        <div class="user-card">
          <div class="user-name">
            <span class="tb-lead">{data.name}</span>
          </div>
        </div>
      </div>
      <div class="nk-tb-col">{data.address}</div>
      <div class="nk-tb-col">{data.city}</div>
      <div class="nk-tb-col">{data.state}</div>
      <div class="nk-tb-col">{data.country}</div>
      <div class="nk-tb-col">{data.long}</div>
      <div class="nk-tb-col">{data.lat}</div>
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

export default StoresListItem;
