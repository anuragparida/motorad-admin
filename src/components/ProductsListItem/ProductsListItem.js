import React from "react";
import axios from "axios";
import { server, config, checkAccess } from "../../env";

const ProductsListItem = (props) => {
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
      <div class="nk-tb-col">
        <div class="user-card">
          <div class="user-name">
            <span class="tb-lead">{data.name}</span>
          </div>
        </div>
      </div>
      <div class="nk-tb-col">{data.price}</div>
      <div class="nk-tb-col">{data.price2}</div>
      <div class="nk-tb-col">{data.description}</div>
      <div class="nk-tb-col">{data.color}</div>
      {/* <div class="nk-tb-col">
        {data.photos.map((x) => (
          <img
            src={"https://api.emotorad.in" + x}
            height="100px"
            width="auto"
          />
        ))}
      </div> */}
      <div class="nk-tb-col">
        <img src={"https://api.emotorad.in" + data.banner} class="img-fluid" />
      </div>
      <div class="nk-tb-col">{data.brochure}</div>
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

ProductsListItem.propTypes = {};

ProductsListItem.defaultProps = {};

export default ProductsListItem;
