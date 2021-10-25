/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from "react";
import axios from "axios";
import { server, config, checkAccess } from "../../env";

// Components
import Sidebar from "../../components/Sidebar";
import CustomerListItem from "../../components/CustomerListItem/CustomerListItem";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";
import Header from "../../components/Header/Header";

export default class CustomersList extends PureComponent {
  state = {
    customers: [],
    search: "",
    pageNumber: 1,
    sortBy: "id",
    sortOrder: "desc",
    pager: {},
  };

  componentDidMount() {
    this.readCustomers("", 1);
  }

  componentDidUpdate() {
    this.readCustomers(
      this.state.search,
      this.state.pageNumber,
      this.state.sortBy,
      this.state.sortOrder
    );
  }

  readCustomers = async (search, pageNumber, sortBy, sortOrder) => {
    const params = {
      search: search,
      pageNumber: String(pageNumber),
      sortBy: sortBy,
      sortOrder: sortOrder,
    };
    await axios
      .post(server + "/api/admin/read-users", params, config)
      .then((rsp) => {
        console.log(rsp);
        this.setState({
          customers: rsp.data.payload,
          pager: rsp.data.pager,
        });
      })
      .catch((err) => {
        checkAccess(err);
        console.error(err);
      });
  };

  render() {
    return (
      <div class="nk-app-root">
        <div class="nk-main ">
          <Sidebar />
          <div class="nk-wrap">
            <Header />
            <div class="nk-content ">
              <div class="container-fluid">
                <div class="nk-content-inner">
                  <div class="nk-content-body">
                    <div class="nk-block-head nk-block-head-sm">
                      <div class="nk-block-between">
                        <div class="nk-block-head-content">
                          <h3 class="nk-block-title page-title">Users Lists</h3>
                          <div class="nk-block-des text-soft">
                            <p>
                              You have total {this.state.pager.totalRecords}{" "}
                              users.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="nk-block">
                      <div class="card card-stretch">
                        <div class="card-inner-group">
                          <div class="card-inner position-relative card-tools-toggle">
                            <div class="card-title-group">
                              <div class="card-tools">
                                <div class="form-inline flex-nowrap gx-3">
                                  <div class="form-wrap w-150px"></div>
                                </div>
                              </div>
                              <div class="card-tools mr-n1">
                                <ul class="btn-toolbar gx-1">
                                  <li>
                                    <div class="form-group">
                                      <div class="form-control-wrap">
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="default-01"
                                          placeholder="Search"
                                          value={this.state.search}
                                          onChange={(e) =>
                                            this.setState({
                                              search: e.target.value,
                                            })
                                          }
                                        />
                                      </div>
                                    </div>
                                  </li>
                                  <li class="btn-toolbar-sep"></li>
                                  <li>
                                    <div class="toggle-wrap">
                                      <a
                                        href="#"
                                        class="btn btn-icon btn-trigger toggle"
                                        data-target="cardTools"
                                      >
                                        <em class="icon ni ni-menu-right"></em>
                                      </a>
                                      <div
                                        class="toggle-content"
                                        data-content="cardTools"
                                      >
                                        <ul class="btn-toolbar gx-1">
                                          <li class="toggle-close">
                                            <a
                                              href="#"
                                              class="btn btn-icon btn-trigger toggle"
                                              data-target="cardTools"
                                            >
                                              <em class="icon ni ni-arrow-left"></em>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              class={
                                                this.state.sortBy === "id"
                                                  ? this.state.sortOrder ===
                                                    "asc"
                                                    ? "btn btn-success"
                                                    : "btn btn-warning"
                                                  : "btn btn-secondary"
                                              }
                                              onClick={() => {
                                                this.setState({
                                                  sortBy: "id",
                                                  sortOrder:
                                                    this.state.sortOrder ===
                                                    "desc"
                                                      ? "asc"
                                                      : "desc",
                                                });
                                              }}
                                            >
                                              Sort: ID
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              class={
                                                this.state.sortBy === "isPaid"
                                                  ? this.state.sortOrder ===
                                                    "asc"
                                                    ? "btn btn-success"
                                                    : "btn btn-warning"
                                                  : "btn btn-secondary"
                                              }
                                              onClick={() => {
                                                this.setState({
                                                  sortBy: "isPaid",
                                                  sortOrder:
                                                    this.state.sortOrder ===
                                                    "desc"
                                                      ? "asc"
                                                      : "desc",
                                                });
                                              }}
                                            >
                                              Sort: isPaid
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              class={
                                                this.state.sortBy ===
                                                "is_active"
                                                  ? this.state.sortOrder ===
                                                    "asc"
                                                    ? "btn btn-success"
                                                    : "btn btn-warning"
                                                  : "btn btn-secondary"
                                              }
                                              onClick={() => {
                                                this.setState({
                                                  sortBy: "is_active",
                                                  sortOrder:
                                                    this.state.sortOrder ===
                                                    "desc"
                                                      ? "asc"
                                                      : "desc",
                                                });
                                              }}
                                            >
                                              Sort: isActive
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="card-search search-wrap"
                              data-search="search"
                            >
                              <div class="card-body">
                                <div class="search-content">
                                  <a
                                    href="#"
                                    class="search-back btn btn-icon toggle-search"
                                    data-target="search"
                                  >
                                    <em class="icon ni ni-arrow-left"></em>
                                  </a>
                                  <input
                                    type="text"
                                    class="form-control border-transparent form-focus-none"
                                    placeholder="Search by user or email"
                                  />
                                  <button class="search-submit btn btn-icon">
                                    <em class="icon ni ni-search"></em>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-inner p-0">
                            <div class="nk-tb-list nk-tb-ulist is-compact">
                              <div class="nk-tb-item nk-tb-head">
                                {/* <div class="nk-tb-col nk-tb-col-check">
                                  <div class="custom-control custom-control-sm custom-checkbox notext">
                                    <input
                                      id="uid"
                                      class="custom-control-input"
                                      type="checkbox"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="uid"
                                    ></label>
                                  </div>
                                </div> */}
                                <div class="nk-tb-col">
                                  <span class="sub-text">User Name</span>
                                </div>
                                <div class="nk-tb-col tb-col-sm">
                                  <span class="sub-text">Email</span>
                                </div>
                                <div class="nk-tb-col tb-col-md">
                                  <span class="sub-text">Phone</span>
                                </div>
                                <div class="nk-tb-col tb-col-lg">
                                  <span class="sub-text">Paid</span>
                                </div>
                                <div class="nk-tb-col tb-col-lg">
                                  <span class="sub-text">Verified</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Status</span>
                                </div>
                                <div class="nk-tb-col nk-tb-col-tools text-right">
                                  <div class="dropdown">
                                    <div class="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                                      <ul class="link-tidy sm no-bdr">
                                        <li>
                                          <div class="custom-control custom-control-sm custom-checkbox">
                                            <input
                                              id="bl"
                                              class="custom-control-input"
                                              checked="checked"
                                              type="checkbox"
                                            />
                                            <label
                                              class="custom-control-label"
                                              for="bl"
                                            >
                                              Balance
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div class="custom-control custom-control-sm custom-checkbox">
                                            <input
                                              id="ph"
                                              class="custom-control-input"
                                              checked="checked"
                                              type="checkbox"
                                            />
                                            <label
                                              class="custom-control-label"
                                              for="ph"
                                            >
                                              Phone
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div class="custom-control custom-control-sm custom-checkbox">
                                            <input
                                              id="vri"
                                              class="custom-control-input"
                                              type="checkbox"
                                            />
                                            <label
                                              class="custom-control-label"
                                              for="vri"
                                            >
                                              Verified
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div class="custom-control custom-control-sm custom-checkbox">
                                            <input
                                              id="st"
                                              class="custom-control-input"
                                              type="checkbox"
                                            />
                                            <label
                                              class="custom-control-label"
                                              for="st"
                                            >
                                              Status
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {this.state.customers.map((x, i) => (
                                <CustomerListItem data={x} />
                              ))}
                            </div>
                          </div>
                          {/* <Pagination
                            data={this.state.pager}
                            func={(page) => this.readCustomers("", page)}
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
