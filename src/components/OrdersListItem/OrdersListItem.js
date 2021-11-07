import React from "react";

const OrdersListItem = (props) => {
  const data = props.data;
  const specData = props.specData;
  const editData = props.editData;
  return (
    <div class="nk-tb-item">
      <div class="nk-tb-col">{data.id}</div>
      <div class="nk-tb-col">{specData.name}</div>
      <div class="nk-tb-col">{data.price}</div>
      <div class="nk-tb-col">{specData.color}</div>
      <div class="nk-tb-col">{data.coupon || "None"}</div>
      <div class="nk-tb-col">{data.discount || "None"}</div>
      <div class="nk-tb-col">{data.coupon_type || "None"}</div>
      <div class="nk-tb-col">
        {data.address.address +
          data.address.city +
          data.address.state +
          data.address.pin}
      </div>
      <div class="nk-tb-col">{data.tracking}</div>
      <div class="nk-tb-col">{data.career}</div>
      <div class="nk-tb-col">{data.frame_number}</div>
      <div class="nk-tb-col">{data.date_of_delivery}</div>
      <div class="nk-tb-col">{data.status}</div>
      <div class="nk-tb-col">
        <a
          href="javascript:void(0)"
          class="btn btn-warning"
          data-toggle="modal"
          data-target="#exampleModalLong"
          onClick={() => {
            editData.func();
          }}
        >
          Update
        </a>
      </div>
      <div class="nk-tb-col">
        <a
          href="javascript:void(0)"
          class="btn btn-success"
          onClick={() => {
            editData.func2();
          }}
        >
          Download
        </a>
      </div>
    </div>
  );
};

OrdersListItem.propTypes = {};

OrdersListItem.defaultProps = {};

export default OrdersListItem;
