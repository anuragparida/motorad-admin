import React from "react";
import PropTypes from "prop-types";

const ProductsListItem = (props) => {
  const data = props.data;
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
      <div class="nk-tb-col">
        {data.photos.map((x) => (
          <img
            src={"https://api.emotorad.in" + x}
            height="100px"
            width="auto"
          />
        ))}
      </div>
      <div class="nk-tb-col">
        <img
          src={"https://api.emotorad.in" + data.brochure}
          height="100px"
          width="auto"
        />
      </div>
      <div class="nk-tb-col">{data.features}</div>
      <div class="nk-tb-col">{data.type}</div>
      <div class="nk-tb-col nk-tb-col-tools">
        <ul class="nk-tb-actions gx-2">
          <li class="nk-tb-action-hidden"></li>
          <li class="nk-tb-action-hidden"></li>
          <li class="nk-tb-action-hidden"></li>
          <li>
            <div class="drodown">
              <div class="dropdown-menu dropdown-menu-right">
                <ul class="link-list-opt no-bdr">
                  <li>
                    <a href="#">View Details</a>
                  </li>
                  <li>
                    <a href="#">Orders</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Reset Pass</a>
                  </li>
                  <li>
                    <a href="#">Reset 2FA</a>
                  </li>
                  <li>
                    <a href="#">Suspend User</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

ProductsListItem.propTypes = {};

ProductsListItem.defaultProps = {};

export default ProductsListItem;
