import React from "react";
import PropTypes from "prop-types";

const CouponsListItem = (props) => {
  const data = props.data;
  return (
    <div class="nk-tb-item">
      <div class="nk-tb-col">{data.code}</div>
      <div class="nk-tb-col">{data.amount_left}</div>
      <div class="nk-tb-col">{data.total_amount}</div>
      <div class="nk-tb-col">{data.discount}</div>
      <div class="nk-tb-col">{data.discount_type}</div>
      <div class="nk-tb-col">{data.user}</div>
      <div class="nk-tb-col">{data.product}</div>
      <div class="nk-tb-col">{data.accessories}</div>
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

CouponsListItem.propTypes = {};

CouponsListItem.defaultProps = {};

export default CouponsListItem;
