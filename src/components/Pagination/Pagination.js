import React from "react";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const data = props.data;
  const func = props.func;
  console.log(data);
  const totalPages = data.totalRecords ? Math.ceil(data.totalRecords / 10) : 1;
  return (
    <div class="card">
      <div class="card-inner">
        <div class="nk-block-between-md g-3">
          <div class="g">
            <ul class=" pagination justify-content-center justify-content-md-start ">
              <li class="page-item">
                <a
                  class="page-link"
                  href="javascript:void(0)"
                  onClick={
                    data.pageNumber !== 1
                      ? () => func(data.pageNumber - 1)
                      : () => console.log("nope")
                  }
                >
                  Prev
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0)">
                  {data.pageNumber}
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="javascript:void(0)"
                  onClick={
                    data.pageNumber !== totalPages
                      ? () => func(data.pageNumber + 1)
                      : () => console.log("nope")
                  }
                >
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
                  data-dropdown="xs center"
                  onClick={(event) => {
                    console.log("event.target.value");
                  }}
                >
                  {data.totalRecords &&
                    [...new Array(Math.max(totalPages, 1))].map((_, index) =>
                      index === data.pageNumber ? (
                        <option value={index + 1} selected>
                          {index + 1}
                        </option>
                      ) : (
                        <option value={index + 1}>{index + 1}</option>
                      )
                    )}
                </select>
              </div>
              <div>OF {totalPages}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
