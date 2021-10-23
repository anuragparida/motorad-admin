import React from "react";
import PropTypes from "prop-types";

const DashNumberCard = (props) => (
  <div class="col-xxl-3 col-sm-6">
    <div class="card">
      <div class="nk-ecwg nk-ecwg6">
        <div class="card-inner">
          <div class="card-title-group">
            <div class="card-title">
              <h6 class="title">{props.data[0]}</h6>
            </div>
          </div>
          <div class="data">
            <div class="data-group">
              <div class="amount">{props.data[1]}</div>
              <div class="nk-ecwg6-ck"> </div>
            </div>
            {/* <div class="info">
              <span class="change up text-danger">
                <em class="icon ni ni-arrow-long-up"></em>4.63%
              </span>
              <span> vs. last week</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

DashNumberCard.propTypes = {};

DashNumberCard.defaultProps = {};

export default DashNumberCard;
