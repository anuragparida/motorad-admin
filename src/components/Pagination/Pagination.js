import React from "react";
import PropTypes from "prop-types";

const Pagination = () => (
  <div class="card">
    <div class="card-inner">
      <div class="nk-block-between-md g-3">
        <div class="g">
          <ul class=" pagination justify-content-center justify-content-md-start ">
            <li class="page-item">
              <a class="page-link" href="#">
                Prev
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item"></li>
            <li class="page-item">
              <a class="page-link" href="#">
                6
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                7
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </div>
        <div class="g">
          <div class=" pagination-goto d-flex justify-content-center justify-content-md-start gx-3 ">
            <div>Page</div>
            <div>
              <select
                class="form-select form-select-sm"
                data-search="on"
                data-dropdown="xs center"
              >
                <option value="page-1">1</option>
                <option value="page-2">2</option>
                <option value="page-4">4</option>
                <option value="page-5">5</option>
                <option value="page-6">6</option>
                <option value="page-7">7</option>
                <option value="page-8">8</option>
                <option value="page-9">9</option>
                <option value="page-10">10</option>
                <option value="page-11">11</option>
                <option value="page-12">12</option>
                <option value="page-13">13</option>
                <option value="page-14">14</option>
                <option value="page-15">15</option>
                <option value="page-16">16</option>
                <option value="page-17">17</option>
                <option value="page-18">18</option>
                <option value="page-19">19</option>
                <option value="page-20">20</option>
              </select>
            </div>
            <div>OF 102</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Pagination.propTypes = {};

Pagination.defaultProps = {};

export default Pagination;
