import React, { PureComponent } from "react";
import Sidebar from "./../../components/Sidebar";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import OrdersListItem from "./../../components/OrdersListItem/OrdersListItem";
import axios from "axios";
import { server, config, checkAccess } from "../../env";

export default class OrdersList extends PureComponent {
  state = {
    orders: [],
    search: "",
    pageNumber: 1,
    sortBy: "id",
    sortOrder: "desc",
    pager: {},
    editId: "",
    editOrder: {},
  };

  componentDidMount() {
    this.readOrders("", 1);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.search === prevState.search &&
      this.state.pageNumber === prevState.pageNumber &&
      this.state.sortBy === prevState.sortBy &&
      this.state.sortOrder === prevState.sortOrder
    )
      return;
    this.readOrders(
      this.state.search,
      this.state.pageNumber,
      this.state.sortBy,
      this.state.sortOrder
    );
  }

  readOrders = async (search, pageNumber, sortBy, sortOrder) => {
    const params = {
      search: search,
      pageNumber: String(pageNumber),
      sortBy: sortBy,
      sortOrder: sortOrder,
    };
    await axios
      .post(server + "/api/order/read", params, config)
      .then((rsp) => {
        console.log(rsp);
        this.setState({
          orders: rsp.data.payload,
          pager: rsp.data.pager,
        });
      })
      .catch((err) => {
        checkAccess(err);
        console.error(err);
      });
  };

  editOrderDelivery = async (e) => {
    e.preventDefault();

    var params = Array.from(e.target.elements)
      .filter((el) => el.name)
      .reduce((a, b) => ({ ...a, [b.name]: b.value }), {});

    axios
      .put(
        server + `/api/order/update-delivery/${this.state.editId}`,
        params,
        config
      )
      .then((rsp) => {
        console.log(rsp);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response) {
        }
      });
  };

  getInvoice = async (id) => {
    axios
      .get(server + `/api/order/download-invoice/${id}`, config)
      .then((rsp) => {
        console.log(rsp);
        let link = document.createElement("a");
        link.href = server + rsp.data.payload;
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response) {
        }
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
                            <p>
                              You have total {this.state.orders.length} orders.
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
                                {/* <li>
                                  <a
                                    class="btn btn-white btn-outline-light"
                                    href="#"
                                  >
                                    Export
                                  </a>
                                </li> */}
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
                                                this.state.sortBy === "product"
                                                  ? this.state.sortOrder ===
                                                    "asc"
                                                    ? "btn btn-success"
                                                    : "btn btn-warning"
                                                  : "btn btn-secondary"
                                              }
                                              onClick={() => {
                                                this.setState({
                                                  sortBy: "products",
                                                  sortOrder:
                                                    this.state.sortOrder ===
                                                    "desc"
                                                      ? "asc"
                                                      : "desc",
                                                });
                                              }}
                                            >
                                              Sort: Product Name
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="#"
                                              class={
                                                this.state.sortBy === "status"
                                                  ? this.state.sortOrder ===
                                                    "asc"
                                                    ? "btn btn-success"
                                                    : "btn btn-warning"
                                                  : "btn btn-secondary"
                                              }
                                              onClick={() => {
                                                this.setState({
                                                  sortBy: "status",
                                                  sortOrder:
                                                    this.state.sortOrder ===
                                                    "desc"
                                                      ? "asc"
                                                      : "desc",
                                                });
                                              }}
                                            >
                                              Sort: Paid
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
                                  <span class="sub-text">Order ID</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Product Name</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Total Price</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Color</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Coupon</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Discount</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Coupon Type</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">User</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Address</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Tracking Number</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Carrier</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Frame Number</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Date of Delivery</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Status</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Update Delivery</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Download Invoice</span>
                                </div>
                              </div>
                              {this.state.orders.map((x, i) => (
                                <>
                                  {x.products.map((y, i2) => (
                                    <OrdersListItem
                                      data={x}
                                      specData={y}
                                      editData={{
                                        func: () =>
                                          this.setState({
                                            editId: x.id,
                                            editOrder: x,
                                          }),
                                        func2: () => this.getInvoice(x.id),
                                      }}
                                    />
                                  ))}
                                  {x.accessories.map((y, i2) => (
                                    <OrdersListItem
                                      data={x}
                                      specData={y}
                                      editData={{
                                        func: () =>
                                          this.setState({ editId: x.id }),
                                        func2: () => this.getInvoice(x.id),
                                      }}
                                    />
                                  ))}
                                </>
                              ))}
                            </div>
                          </div>
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
                                          this.state.pageNumber !== 1
                                            ? () =>
                                                this.setState({
                                                  pageNumber:
                                                    this.state.pageNumber - 1,
                                                })
                                            : () => console.log("nope")
                                        }
                                      >
                                        Prev
                                      </a>
                                    </li>
                                    <li class="page-item">
                                      <a
                                        class="page-link"
                                        href="javascript:void(0)"
                                      >
                                        {this.state.pager.pageNumber}
                                      </a>
                                    </li>
                                    <li class="page-item">
                                      <a
                                        class="page-link"
                                        href="javascript:void(0)"
                                        onClick={
                                          this.state.pageNumber !==
                                          Math.max(
                                            Math.ceil(
                                              this.state.pager.totalRecords / 10
                                            ),
                                            1
                                          )
                                            ? () =>
                                                this.setState({
                                                  pageNumber:
                                                    this.state.pageNumber + 1,
                                                })
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
                                        class=""
                                        data-dropdown="xs center"
                                        defaultValue={1}
                                        value={this.state.pageNumber}
                                        onChange={(event) => {
                                          this.setState({
                                            pageNumber: parseInt(
                                              event.target.value
                                            ),
                                          });
                                        }}
                                      >
                                        {this.state.pager.totalRecords &&
                                          [
                                            ...new Array(
                                              Math.max(
                                                Math.ceil(
                                                  this.state.pager
                                                    .totalRecords / 10
                                                ),
                                                1
                                              )
                                            ),
                                          ].map((_, index) =>
                                            index ===
                                            this.state.pager.pageNumber ? (
                                              <option value={index + 1}>
                                                {index + 1}
                                              </option>
                                            ) : (
                                              <option value={index + 1}>
                                                {index + 1}
                                              </option>
                                            )
                                          )}
                                      </select>
                                    </div>
                                    <div>
                                      OF{" "}
                                      {Math.max(
                                        Math.ceil(
                                          this.state.pager.totalRecords / 10
                                        ),
                                        1
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                  <form onSubmit={this.editOrderDelivery}>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label for="">Tracking Number</label>
                          <input
                            type="text"
                            name="tracking"
                            class="form-control"
                            defaultValue={this.state.editOrder.tracking}
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Carrier</label>
                          <input
                            type="text"
                            name="career"
                            class="form-control"
                            defaultValue={this.state.editOrder.career}
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Date of Delivery</label>
                          <input
                            type="date"
                            name="date_of_delivery"
                            class="form-control"
                            defaultValue={this.state.editOrder.date_of_delivery}
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Frame Number</label>
                          <input
                            type="text"
                            name="frame_number"
                            class="form-control"
                            defaultValue={this.state.editOrder.frame_number}
                          ></input>
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
