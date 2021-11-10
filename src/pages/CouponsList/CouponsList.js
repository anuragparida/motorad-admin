import React, { PureComponent } from "react";
import CouponsListItem from "../../components/CouponsListItem/CouponsListItem";
import Footer from "./../../components/Footer/Footer";
import Sidebar from "./../../components/Sidebar";
import Header from "./../../components/Header/Header";
import axios from "axios";
import { server, config, checkAccess } from "../../env";
import Select from "react-select";

export default class CouponsList extends PureComponent {
  state = {
    products: [],
    coupons: [],
    accessories: [],
    accList: [],
    prodList: [],
  };

  componentDidMount() {
    this.readCoupons();
    this.readProducts();
  }

  readProducts = async () => {
    await axios
      .get(server + "/api/product/read", config)
      .then((rsp) => {
        console.log(rsp);
        this.setState({
          products: rsp.data.payload.filter((e) => e.type === "product"),
          accessories: rsp.data.payload.filter((e) => e.type === "accessory"),
        });
      })
      .catch((err) => {
        checkAccess(err);
        console.error(err);
      });
  };

  readCoupons = async () => {
    await axios
      .get(server + "/api/coupon/read", config)
      .then((rsp) => {
        console.log(rsp);
        this.setState({
          coupons: rsp.data.payload,
        });
      })
      .catch((err) => {
        checkAccess(err);
        console.error(err);
      });
  };

  addCoupon = async (e) => {
    e.preventDefault();

    var params = Array.from(e.target.elements)
      .filter((el) => el.name)
      .reduce((a, b) => ({ ...a, [b.name]: b.value }), {});

    params.user = JSON.parse(params.user);
    params.product = this.state.prodList;
    params.accessories = this.state.accList;

    // axios
    //   .post(server + `/api/coupon/create`, params, config)
    //   .then((rsp) => {
    //     console.log(rsp);
    //     // window.location.reload();
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //     if (err.response) {
    //     }
    //   });
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
                          <h3 class="nk-block-title page-title">
                            Coupons List
                          </h3>
                          <div class="nk-block-des text-soft">
                            <p>
                              You have total {this.state.coupons.length}{" "}
                              coupons.
                            </p>
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
                                    data-toggle="modal"
                                    data-target="#exampleModalLong"
                                  >
                                    Add New Coupon
                                  </a>
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
                                <div class="nk-tb-col">
                                  <span class="sub-text">Code</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Amount Left</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Total Amount</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Discount</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Discount Type</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">User</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Product</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Accessories</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Delete Coupon</span>
                                </div>
                              </div>
                              {this.state.coupons.map((x, i) => (
                                <CouponsListItem data={x} />
                              ))}
                            </div>
                          </div>
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
        <section class="modal_section_2">
          <div
            class="modal fade"
            id="exampleModalLong"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <form onSubmit={this.addCoupon}>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label for="">Code</label>
                          <input
                            type="text"
                            name="code"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Amount</label>
                          <input
                            type="number"
                            name="amount"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Discount Type</label>
                          <select
                            name="discount_type"
                            class="form-control"
                            required
                          >
                            <option value="flat">Flat</option>
                            <option value="percentage">Percentage</option>
                            <option value="accessories">Accessories</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="">
                            Discount (Enter 0 if Type is Accessories)
                          </label>
                          <input
                            type="number"
                            name="discount"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Start Date</label>
                          <input
                            type="date"
                            name="start_date"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">End Date</label>
                          <input
                            type="date"
                            name="end_date"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">User</label>
                          <input
                            type="text"
                            name="user"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Product</label>
                          <Select
                            options={this.state.products.map((e) => ({
                              value: e.id,
                              label: e.name,
                            }))}
                            isMulti
                            isSearchable
                            onChange={(e) =>
                              this.setState({
                                prodList: e.map((x) => x.value),
                              })
                            }
                          />
                        </div>
                        <div class="form-group">
                          <label for="">Accessories</label>
                          <Select
                            options={this.state.accessories.map((e) => ({
                              value: e.id,
                              label: e.name,
                            }))}
                            isMulti
                            isSearchable
                            onChange={(e) =>
                              this.setState({
                                accList: e.map((x) => x.value),
                              })
                            }
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <button type="submit" class="btn btn-success my-2">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
