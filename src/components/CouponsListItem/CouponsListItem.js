import React from "react";
import axios from "axios";
import { server, config, checkAccess } from "../../env";

const CouponsListItem = (props) => {
  const data = props.data;
  const products = props.products;
  const accessories = props.accessories;

  const deleteCoupon = async () => {
    await axios
      .delete(server + `/api/coupon/delete/${data.id}`, config)
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
      <div class="nk-tb-col">{data.code}</div>
      <div class="nk-tb-col">{data.amount_left}</div>
      <div class="nk-tb-col">{data.total_amount}</div>
      <div class="nk-tb-col">{data.discount}</div>
      <div class="nk-tb-col">{data.discount_type}</div>
      <div class="nk-tb-col">{JSON.stringify(data.user)}</div>
      <div class="nk-tb-col">{JSON.stringify(products)}</div>
      <div class="nk-tb-col">{JSON.stringify(accessories)}</div>
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

export default CouponsListItem;
