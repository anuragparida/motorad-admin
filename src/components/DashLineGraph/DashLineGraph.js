import React from "react";
import PropTypes from "prop-types";

const DashLineGraph = () => (
  <div class="col-xxl-6">
    <div class="card card-full">
      <div class="nk-ecwg nk-ecwg8 h-100">
        <div class="card-inner">
          <div class="card-title-group mb-3">
            <div class="card-title">
              <h6 class="title">Sales Statistics</h6>
            </div>
            <div class="card-tools">
              <div class="dropdown">
                <a
                  class="dropdown-toggle link link-light link-sm dropdown-indicator"
                  href="#"
                  data-toggle="dropdown"
                >
                  Weekly
                </a>
                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                  <ul class="link-list-opt no-bdr">
                    <li>
                      <a href="#">Daily</a>
                    </li>
                    <li>
                      <a class="active" href="#">
                        Weekly
                      </a>
                    </li>
                    <li>
                      <a href="#">Monthly</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ul class="nk-ecwg8-legends">
            <li>
              <div class="title">Total Order</div>
            </li>
            <li>
              <div class="title">Canceled Order</div>
            </li>
          </ul>
          <div class="nk-ecwg8-ck"> </div>
          <div class="chart-label-group pl-5">
            <div class="chart-label">01 Jul, 2020</div>
            <div class="chart-label">30 Jul, 2020</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

DashLineGraph.propTypes = {};

DashLineGraph.defaultProps = {};

export default DashLineGraph;
