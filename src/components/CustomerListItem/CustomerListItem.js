import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomerListItem = (props) => {
  const data = props.data;
  return (
    <div class="nk-tb-item">
      {/* <div class="nk-tb-col nk-tb-col-check">
        <div class="custom-control custom-control-sm custom-checkbox notext">
          <input id="uid1" class="custom-control-input" type="checkbox" />
          <label class="custom-control-label" for="uid1"></label>
        </div>
      </div> */}
      <div class="nk-tb-col">
        <Link to="/customerdetails">
          <div class="user-card">
            <div class="user-avatar xs bg-primary">
              {data.name.split(" ").reduce((arr, x) => arr.concat(x[0]), [])}
            </div>
            <div class="user-name">
              <span class="tb-lead">{data.name}</span>
            </div>
          </div>
        </Link>
      </div>
      <div class="nk-tb-col tb-col-sm">{data.email}</div>
      <div class="nk-tb-col tb-col-md">+811 847-4958</div>
      <div class="nk-tb-col tb-col-lg">{data.isPaid ? "Paid" : "Not Paid"}</div>
      <div class="nk-tb-col tb-col-lg">
        {data.is_verified ? "Verified" : "Not Verified"}
      </div>
      <div class="nk-tb-col">
        <span class="tb-status text-success">
          {data.is_active ? "Active" : "Not Active"}
        </span>
      </div>
      {/* <div class="nk-tb-col nk-tb-col-tools">
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
      </div> */}
    </div>
  );
};

CustomerListItem.propTypes = {};

CustomerListItem.defaultProps = {};

export default CustomerListItem;
