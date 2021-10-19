import React, { PureComponent } from "react";
import Sidebar from "./../../components/Sidebar";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";
import OrdersListItem from "./../../components/OrdersListItem/OrdersListItem";
import axios from "axios";
import { server, config, checkAccess } from "../../env";

export default class OrdersList extends PureComponent {
  state = {
    orders: [],
  };

  componentDidMount() {
    this.readOrders();
  }

  readOrders = async (search) => {
    const params = {
      search: search,
    };
    await axios
      .post(server + "/api/order/read", params, config)
      .then((rsp) => {
        console.log(rsp);
        this.setState({
          orders: rsp.data.payload,
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
                          <h3 class="nk-block-title page-title">Orders List</h3>
                          <div class="nk-block-des text-soft">
                            {/* <p>You have total 2,595 users.</p> */}
                          </div>
                        </div>
                        <div class="nk-block-head-content">
                          <div class="toggle-wrap nk-block-tools-toggle">
                            <div
                              class="toggle-expand-content"
                              data-content="pageMenu"
                            >
                              <ul class="nk-block-tools g-3">
                                <li>
                                  <a
                                    class="btn btn-white btn-outline-light"
                                    href="#"
                                  >
                                    Export
                                  </a>
                                </li>
                                <li class="nk-block-tools-opt">
                                  <div class="drodown">
                                    <div class="dropdown-menu dropdown-menu-right">
                                      <ul class="link-list-opt no-bdr">
                                        <li>
                                          <a href="#">Add User</a>
                                        </li>
                                        <li>
                                          <a href="#">Add Team</a>
                                        </li>
                                        <li>
                                          <a href="#">Import User</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
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
                                  <div class="form-wrap w-150px">
                                    <select
                                      class="form-select form-select-sm"
                                      data-search="off"
                                      data-placeholder="Bulk Action"
                                    >
                                      <option value="">Bulk Action</option>
                                      <option value="email">Send Email</option>
                                      <option value="group">
                                        Change Group
                                      </option>
                                      <option value="suspend">
                                        Suspend User
                                      </option>
                                      <option value="delete">
                                        Delete User
                                      </option>
                                    </select>
                                  </div>
                                  <div class="btn-wrap">
                                    <span class="d-none d-md-block">
                                      <button class="btn btn-dim btn-outline-light disabled">
                                        Apply
                                      </button>
                                    </span>
                                    <span class="d-md-none">
                                      <button class="btn btn-dim btn-outline-light btn-icon disabled">
                                        <em class="icon ni ni-arrow-right"></em>
                                      </button>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="card-tools mr-n1">
                                <ul class="btn-toolbar gx-1">
                                  <li>
                                    <a
                                      href="#"
                                      class="btn btn-icon search-toggle toggle-search"
                                      data-target="search"
                                    >
                                      <em class="icon ni ni-search"></em>
                                    </a>
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
                                            <div class="dropdown">
                                              <a
                                                href="#"
                                                class="btn btn-trigger btn-icon dropdown-toggle"
                                                data-toggle="dropdown"
                                              >
                                                <div class="dot dot-primary"></div>
                                                <em class="icon ni ni-filter-alt"></em>
                                              </a>
                                              <div class="filter-wg dropdown-menu dropdown-menu-xl dropdown-menu-right">
                                                <div class="dropdown-head">
                                                  <span class="sub-title dropdown-title">
                                                    Filter Users
                                                  </span>
                                                  <div class="dropdown">
                                                    <a
                                                      href="#"
                                                      class="btn btn-sm btn-icon"
                                                    >
                                                      <em class="icon ni ni-more-h"></em>
                                                    </a>
                                                  </div>
                                                </div>
                                                <div class="dropdown-body dropdown-body-rg">
                                                  <div class="row gx-6 gy-3">
                                                    <div class="col-6">
                                                      <div class="custom-control custom-control-sm custom-checkbox">
                                                        <input
                                                          type="checkbox"
                                                          class="custom-control-input"
                                                          id="hasBalance"
                                                        />
                                                        <label
                                                          class="custom-control-label"
                                                          for="hasBalance"
                                                        >
                                                          {" "}
                                                          Have Balance
                                                        </label>
                                                      </div>
                                                    </div>
                                                    <div class="col-6">
                                                      <div class="custom-control custom-control-sm custom-checkbox">
                                                        <input
                                                          type="checkbox"
                                                          class="custom-control-input"
                                                          id="hasKYC"
                                                        />
                                                        <label
                                                          class="custom-control-label"
                                                          for="hasKYC"
                                                        >
                                                          {" "}
                                                          KYC Verified
                                                        </label>
                                                      </div>
                                                    </div>
                                                    <div class="col-6">
                                                      <div class="form-group">
                                                        <label class="overline-title overline-title-alt">
                                                          Role
                                                        </label>
                                                        <select class="form-select form-select-sm">
                                                          <option value="any">
                                                            Any Role
                                                          </option>
                                                          <option value="investor">
                                                            Investor
                                                          </option>
                                                          <option value="seller">
                                                            Seller
                                                          </option>
                                                          <option value="buyer">
                                                            Buyer
                                                          </option>
                                                        </select>
                                                      </div>
                                                    </div>
                                                    <div class="col-6">
                                                      <div class="form-group">
                                                        <label class="overline-title overline-title-alt">
                                                          Status
                                                        </label>
                                                        <select class="form-select form-select-sm">
                                                          <option value="any">
                                                            Any Status
                                                          </option>
                                                          <option value="active">
                                                            Active
                                                          </option>
                                                          <option value="pending">
                                                            Pending
                                                          </option>
                                                          <option value="suspend">
                                                            Suspend
                                                          </option>
                                                          <option value="deleted">
                                                            Deleted
                                                          </option>
                                                        </select>
                                                      </div>
                                                    </div>
                                                    <div class="col-12">
                                                      <div class="form-group">
                                                        <button
                                                          type="button"
                                                          class="btn btn-secondary"
                                                        >
                                                          Filter
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="dropdown-foot between">
                                                  <a class="clickable" href="#">
                                                    Reset Filter
                                                  </a>
                                                  <a href="#">Save Filter</a>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="dropdown">
                                              <a
                                                href="#"
                                                class="btn btn-trigger btn-icon dropdown-toggle"
                                                data-toggle="dropdown"
                                              >
                                                <em class="icon ni ni-setting"></em>
                                              </a>
                                              <div class="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                                                <ul class="link-check">
                                                  <li>
                                                    <span>Show</span>
                                                  </li>
                                                  <li class="active">
                                                    <a href="#">10</a>
                                                  </li>
                                                  <li>
                                                    <a href="#">20</a>
                                                  </li>
                                                  <li>
                                                    <a href="#">50</a>
                                                  </li>
                                                </ul>
                                                <ul class="link-check">
                                                  <li>
                                                    <span>Order</span>
                                                  </li>
                                                  <li class="active">
                                                    <a href="#">DESC</a>
                                                  </li>
                                                  <li>
                                                    <a href="#">ASC</a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
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
                                <div class="nk-tb-col nk-tb-col-check">
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
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Invoice ID</span>
                                </div>
                                <div class="nk-tb-col tb-col-lg">
                                  <span class="sub-text">User ID</span>
                                </div>
                                <div class="nk-tb-col tb-col-md">
                                  <span class="sub-text">User</span>
                                </div>
                                <div class="nk-tb-col tb-col-sm">
                                  <span class="sub-text">Email</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Product</span>
                                </div>
                                <div class="nk-tb-col tb-col-md">
                                  <span class="sub-text">Price</span>
                                </div>
                                <div class="nk-tb-col tb-col-lg">
                                  <span class="sub-text">Payment Method</span>
                                </div>
                                <div class="nk-tb-col tb-col-lg">
                                  <span class="sub-text">Purchase Date</span>
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
                              {this.state.orders.map((x, i) => (
                                <OrdersListItem data={x} />
                              ))}
                            </div>
                          </div>
                          <Pagination />
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
