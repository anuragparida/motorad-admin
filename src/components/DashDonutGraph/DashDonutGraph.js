import React from "react";
import PropTypes from "prop-types";

const DashDonutGraph = () => (
  <div class="col-xxl-3 col-md-6">
    <div class="card card-full overflow-hidden">
      <div class="nk-ecwg nk-ecwg7 h-100">
        <div class="card-inner flex-grow-1">
          <div class="card-title-group mb-4">
            <div class="card-title">
              <h6 class="title">Order Statistics</h6>
            </div>
          </div>
          <div class="nk-ecwg7-ck"> </div>
          <ul class="nk-ecwg7-legends">
            <li>
              <div class="title">Completed</div>
            </li>
            <li>
              <div class="title">Processing</div>
            </li>
            <li>
              <div class="title">Cancelled</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

DashDonutGraph.propTypes = {};

DashDonutGraph.defaultProps = {};

export default DashDonutGraph;
