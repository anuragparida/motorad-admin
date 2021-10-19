import React from "react";
import PropTypes from "prop-types";

const DashStatsCard = () => (
  <div class="col-xxl-3 col-md-6">
    <div class="card h-100">
      <div class="card-inner">
        <div class="card-title-group mb-2">
          <div class="card-title">
            <h6 class="title">Store Statistics</h6>
          </div>
        </div>
        <ul class="nk-store-statistics">
          <li class="item">
            <div class="info">
              <div class="title">Orders</div>
              <div class="count">1,795</div>
            </div>
          </li>
          <li class="item">
            <div class="info">
              <div class="title">Customers</div>
              <div class="count">2,327</div>
            </div>
          </li>
          <li class="item">
            <div class="info">
              <div class="title">Products</div>
              <div class="count">674</div>
            </div>
          </li>
          <li class="item">
            <div class="info">
              <div class="title">Categories</div>
              <div class="count">68</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

DashStatsCard.propTypes = {};

DashStatsCard.defaultProps = {};

export default DashStatsCard;
