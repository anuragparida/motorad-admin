import React, { PureComponent } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { server, config, checkAccess, formDataConfig } from "../../env";
import StoresListItem from "../../components/StoresListItem/StoresListItem";

export default class StoresList extends PureComponent {
  state = {
    products: [],
    editId: "",
    editProduct: {},
    search: "",
    pageNumber: 1,
    sortBy: "id",
    sortOrder: "desc",
    pager: {},
  };

  componentDidMount() {
    this.readProducts("", 1);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.search === prevState.search &&
      this.state.pageNumber === prevState.pageNumber &&
      this.state.sortBy === prevState.sortBy &&
      this.state.sortOrder === prevState.sortOrder
    )
      return;
    this.readProducts(
      this.state.search,
      this.state.pageNumber,
      this.state.sortBy,
      this.state.sortOrder
    );
  }

  readProducts = async (search, pageNumber, sortBy, sortOrder) => {
    const params = {
      search: search,
      pageNumber: String(pageNumber),
      sortBy: sortBy,
      sortOrder: sortOrder,
    };
    await axios
      .post(server + "/api/store/read", params, config)
      .then((rsp) => {
        console.log(rsp);
        this.setState({
          products: rsp.data.payload,
          pager: rsp.data.pager,
        });
      })
      .catch((err) => {
        checkAccess(err);
        console.error(err);
      });
  };

  addProduct = async (e) => {
    e.preventDefault();

    var params = Array.from(e.target.elements)
      .filter((el) => el.name)
      .reduce((a, b) => ({ ...a, [b.name]: b.value }), {});

    let formData = new FormData();

    for (const [key, value] of Object.entries(params)) {
      formData.append(key, value);
    }

    axios
      .post(server + `/api/store/create`, formData, formDataConfig)
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

  editProduct = async (e) => {
    e.preventDefault();

    var params = Array.from(e.target.elements)
      .filter((el) => el.name)
      .reduce((a, b) => ({ ...a, [b.name]: b.value }), {});

    let formData = new FormData();

    for (const [key, value] of Object.entries(params)) {
      formData.append(key, value);
    }

    axios
      .put(
        server + `/api/store/update/${this.state.editId}`,
        formData,
        formDataConfig
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
                          <h3 class="nk-block-title page-title">Stores List</h3>
                          <div class="nk-block-des text-soft">
                            <p>
                              You have total {this.state.products.length}{" "}
                              stores.
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
                                    Add New Store
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
                                  <span class="sub-text">Name</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Address</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">City</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">State</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Longitude</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Latitude</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Edit</span>
                                </div>
                              </div>
                              {this.state.products.map((x, i) => (
                                <StoresListItem
                                  data={x}
                                  editData={{
                                    func: () =>
                                      this.setState({
                                        editId: x.id,
                                        editProduct: x,
                                      }),
                                  }}
                                />
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
                  <form onSubmit={this.addProduct}>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label for="">Name</label>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Address</label>
                          <input
                            type="text"
                            name="address"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">City</label>
                          <input
                            type="text"
                            name="city"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">State</label>
                          <input
                            type="text"
                            name="state"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Country</label>
                          <input
                            type="text"
                            name="country"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Longitutde</label>
                          <input
                            type="text"
                            name="long"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Latitude</label>
                          <input
                            type="text"
                            name="lat"
                            class="form-control"
                            required
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
        <section class="modal_section_2">
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <form onSubmit={this.editProduct}>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label for="">Name</label>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            defaultValue={this.state.editProduct.name}
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Address</label>
                          <input
                            type="text"
                            name="address"
                            class="form-control"
                            defaultValue={this.state.editProduct.address}
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">City</label>
                          <input
                            type="text"
                            name="city"
                            class="form-control"
                            defaultValue={this.state.editProduct.city}
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">State</label>
                          <input
                            type="text"
                            name="state"
                            class="form-control"
                            defaultValue={this.state.editProduct.state}
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Country</label>
                          <input
                            type="text"
                            name="country"
                            class="form-control"
                            defaultValue={this.state.editProduct.country}
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Longitutde</label>
                          <input
                            type="text"
                            name="long"
                            class="form-control"
                            defaultValue={this.state.editProduct.long}
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Latitude</label>
                          <input
                            type="text"
                            name="lat"
                            class="form-control"
                            defaultValue={this.state.editProduct.lat}
                            required
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
