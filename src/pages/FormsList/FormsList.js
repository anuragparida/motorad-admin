/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from "react";
import axios from "axios";
import { server, config, checkAccess } from "../../env";

// Components
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import FormsListItem from "../../components/FormsListItem/FormsListItem";

export default class FormsList extends PureComponent {
  state = {
    customers: [],
    search: "",
    pageNumber: 1,
    sortBy: "id",
    sortOrder: "desc",
    pager: {},
    type: "contact",
  };

  componentDidMount() {
    this.readCustomers("contact", "", 1);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.type === prevState.type &&
      this.state.search === prevState.search &&
      this.state.pageNumber === prevState.pageNumber &&
      this.state.sortBy === prevState.sortBy &&
      this.state.sortOrder === prevState.sortOrder
    )
      return;
    this.readCustomers(
      this.state.type,
      this.state.search,
      this.state.pageNumber,
      this.state.sortBy,
      this.state.sortOrder
    );
  }

  readCustomers = async (type, search, pageNumber, sortBy, sortOrder) => {
    const params = {
      search: search,
      pageNumber: String(pageNumber),
      sortBy: sortBy,
      sortOrder: sortOrder,
    };
    let url = "";
    if (type === "contact") {
      url = "/api/contact/read";
    } else if (type === "ride") {
      url = "/api/ride/read";
    } else if (type === "emi") {
      url = "/api/emi/contact/read";
    } else if (type === "warranty") {
      url = "/api/warranty/read";
    } else if (type === "community") {
      url = "/api/community/read";
    } else if (type === "partner") {
      url = "/api/partner/read";
    } else if (type === "rsa") {
      url = "/api/rsa/read";
      params.type = "rsa";
    } else if (type === "insurance") {
      url = "/api/rsa/read";
      params.type = "insurance";
    }
    await axios
      .post(server + url, params, config)
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

  downloadAll = async () => {
    const params = {
      search: this.state.search,
      sortBy: this.state.sortBy,
      sortOrder: this.state.sortOrder,
      records: "all",
    };
    let url = "";
    if (this.state.type === "contact") {
      url = "/api/contact/read";
    } else if (this.state.type === "ride") {
      url = "/api/ride/read";
    } else if (this.state.type === "emi") {
      url = "/api/emi/contact/read";
    } else if (this.state.type === "warranty") {
      url = "/api/warranty/read";
    } else if (this.state.type === "community") {
      url = "/api/community/read";
    } else if (this.state.type === "partner") {
      url = "/api/partner/read";
    } else if (this.state.type === "rsa") {
      url = "/api/rsa/read";
      params.type = "rsa";
    } else if (this.state.type === "insurance") {
      url = "/api/rsa/read";
      params.type = "insurance";
    }
    await axios
      .post(server + url, params, config)
      .then((rsp) => {
        console.log(rsp);
        let headers = Object.keys(rsp.data.payload[0]);
        let listts = rsp.data.payload.reduce(
          (t, e) => [...t, Object.values(e)],
          []
        );
        console.log(listts);
        let emails = headers + "\n" + listts.join("\n");
        console.log(emails);
        var csvData = new Blob([emails], { type: "text/csv" }); //new way
        var encodedUri = URL.createObjectURL(csvData);
        // var encodedUri = "data:text/csv;charset=utf-8" + encodeURI(emails);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", this.state.type + ".csv");
        document.body.appendChild(link);
        link.click();
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
                          <h3 class="nk-block-title page-title">Forms Lists</h3>
                          <div class="nk-block-des text-soft">
                            <p>
                              You have total {this.state.pager.totalRecords}{" "}
                              {this.state.type} records.
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
                                  {this.state.customers.length > 0 && (
                                    <a
                                      class="btn btn-white btn-outline-light"
                                      href="javascript:void(0)"
                                      onClick={this.downloadAll}
                                    >
                                      Download Forms
                                    </a>
                                  )}
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
                                <ul class="btn-toolbar gx-1">
                                  <li>
                                    <a
                                      href="#"
                                      class={
                                        this.state.type === "contact"
                                          ? "btn btn-success"
                                          : "btn btn-secondary"
                                      }
                                      onClick={() => {
                                        this.setState({
                                          type: "contact",
                                          search: "",
                                          pageNumber: 1,
                                          sortBy: "id",
                                          sortOrder: "desc",
                                        });
                                      }}
                                    >
                                      Contact
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class={
                                        this.state.type === "ride"
                                          ? "btn btn-success"
                                          : "btn btn-secondary"
                                      }
                                      onClick={() => {
                                        this.setState({
                                          type: "ride",
                                          search: "",
                                          pageNumber: 1,
                                          sortBy: "id",
                                          sortOrder: "desc",
                                        });
                                      }}
                                    >
                                      Rides
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class={
                                        this.state.type === "emi"
                                          ? "btn btn-success"
                                          : "btn btn-secondary"
                                      }
                                      onClick={() => {
                                        this.setState({
                                          type: "emi",
                                          search: "",
                                          pageNumber: 1,
                                          sortBy: "id",
                                          sortOrder: "desc",
                                        });
                                      }}
                                    >
                                      EMI
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class={
                                        this.state.type === "warranty"
                                          ? "btn btn-success"
                                          : "btn btn-secondary"
                                      }
                                      onClick={() => {
                                        this.setState({
                                          type: "warranty",
                                          search: "",
                                          pageNumber: 1,
                                          sortBy: "id",
                                          sortOrder: "desc",
                                        });
                                      }}
                                    >
                                      Warranty
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="#"
                                      class={
                                        this.state.type === "community"
                                          ? "btn btn-success"
                                          : "btn btn-secondary"
                                      }
                                      onClick={() => {
                                        this.setState({
                                          type: "community",
                                          search: "",
                                          pageNumber: 1,
                                          sortBy: "id",
                                          sortOrder: "desc",
                                        });
                                      }}
                                    >
                                      Community
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class={
                                        this.state.type === "partner"
                                          ? "btn btn-success"
                                          : "btn btn-secondary"
                                      }
                                      onClick={() => {
                                        this.setState({
                                          type: "partner",
                                          search: "",
                                          pageNumber: 1,
                                          sortBy: "id",
                                          sortOrder: "desc",
                                        });
                                      }}
                                    >
                                      Partner
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class={
                                        this.state.type === "rsa"
                                          ? "btn btn-success"
                                          : "btn btn-secondary"
                                      }
                                      onClick={() => {
                                        this.setState({
                                          type: "rsa",
                                          search: "",
                                          pageNumber: 1,
                                          sortBy: "id",
                                          sortOrder: "desc",
                                        });
                                      }}
                                    >
                                      RSA
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class={
                                        this.state.type === "insurance"
                                          ? "btn btn-success"
                                          : "btn btn-secondary"
                                      }
                                      onClick={() => {
                                        this.setState({
                                          type: "insurance",
                                          search: "",
                                          pageNumber: 1,
                                          sortBy: "id",
                                          sortOrder: "desc",
                                        });
                                      }}
                                    >
                                      Insurance
                                    </a>
                                  </li>
                                </ul>
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

                                          {/* <li>
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
                                          </li> */}
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
                                {this.state.customers.length > 0 &&
                                  Object.keys(this.state.customers[0]).map(
                                    (key, index) => (
                                      <div class="nk-tb-col">
                                        <span class="sub-text">{key}</span>
                                      </div>
                                    )
                                  )}
                              </div>
                              {this.state.customers.map((x, i) => (
                                <FormsListItem data={x} />
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
      </div>
    );
  }
}
