import React, { PureComponent } from "react";
import ProductsListItem from "./../../components/ProductsListItem/ProductsListItem";
import Footer from "./../../components/Footer/Footer";
import Header from "./../../components/Header/Header";
import Sidebar from "./../../components/Sidebar";
import axios from "axios";
import { server, config, checkAccess, formDataConfig } from "../../env";
const Cookies = require("js-cookie");

export default class ProductsList extends PureComponent {
  state = {
    products: [],
    accessories: [],
    editId: "",
    editProduct: {},
  };

  componentDidMount() {
    this.readProducts();
  }

  readProducts = async () => {
    await axios
      .get(server + "/api/product/read", config)
      .then((rsp) => {
        console.log(rsp);
        this.setState({
          products: rsp.data.payload,
          accessories: rsp.data.payload.filter((e) => e.type === "accessory"),
        });
      })
      .catch((err) => {
        checkAccess(err);
        console.error(err);
      });
  };

  addProduct = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("name", e.target.name.value);
    formData.append("price", e.target.price.value);
    formData.append("description", e.target.description.value);
    formData.append("color", e.target.color.value);
    formData.append("emi", e.target.emi.value);
    formData.append("type", e.target.type.value);

    if (e.target.brochure.files.length > 0) {
      formData.append("brochure", e.target.brochure.files[0]);
    } else {
      formData.append("brochure", null);
    }
    if (e.target.banner.files.length > 0) {
      console.log(e.target.banner.files[0]);
      formData.append("banner", e.target.banner.files[0]);
    } else {
      formData.append("banner", null);
    }

    axios
      .post(server + `/api/product/create`, formData, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
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

    let formData = new FormData();

    formData.append("name", e.target.name.value);
    formData.append("price", e.target.price.value);
    formData.append("description", e.target.description.value);
    formData.append("color", e.target.color.value);
    formData.append("emi", e.target.emi.value);
    formData.append("type", e.target.type.value);

    if (e.target.brochure.files.length > 0) {
      formData.append("brochure", e.target.brochure.files[0]);
    } else {
      formData.append("brochure", null);
    }
    if (e.target.banner.files.length > 0) {
      console.log(e.target.banner.files[0]);
      formData.append("banner", e.target.banner.files[0]);
    } else {
      formData.append("banner", null);
    }

    axios
      .put(server + `/api/product/update/${this.state.editId}`, formData, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((rsp) => {
        console.log(rsp);
        // window.location.reload();
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
                          <h3 class="nk-block-title page-title">
                            Products List
                          </h3>
                          <div class="nk-block-des text-soft">
                            <p>
                              You have total {this.state.products.length}{" "}
                              products.
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
                                    Add New Product
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
                          <div class="card-inner p-0">
                            <div class="nk-tb-list nk-tb-ulist is-compact">
                              <div class="nk-tb-item nk-tb-head">
                                <div class="nk-tb-col">
                                  <span class="sub-text">Name</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Price</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Description</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Color</span>
                                </div>
                                {/* <div class="nk-tb-col">
                                  <span class="sub-text">Photos</span>
                                </div> */}
                                <div class="nk-tb-col">
                                  <span class="sub-text">Banner</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Brochure</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Type</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Edit</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Delete</span>
                                </div>
                              </div>
                              {this.state.products.map((x, i) => (
                                <ProductsListItem
                                  data={x}
                                  editData={{
                                    func: () =>
                                      this.setState({
                                        editId: x.id,
                                        editProduct: x,
                                      }),
                                    func2: () => this.getInvoice(x.id),
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          {/* <Pagination
                            data={this.state.pager}
                            func={(page) => this.readProducts("", page)}
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
                          <label for="">Price</label>
                          <input
                            type="number"
                            name="price"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Description</label>
                          <input
                            type="text"
                            name="description"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Color</label>
                          <input
                            type="text"
                            name="color"
                            class="form-control"
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">EMI (true/false)</label>
                          <select name="emi" class="form-control" required>
                            <option value="true">True</option>
                            <option value="false">False</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="">Type</label>
                          <select name="type" class="form-control" required>
                            <option value="product">Product</option>
                            <option value="accessory">Accessory</option>
                          </select>
                        </div>
                        {/* <div class="form-group">
                          <label for="">Price2</label>
                          <input
                            type="number"
                            name="price2"
                            class="form-control"
                            required
                          ></input>
                        </div> */}
                        {/* <div class="form-group">
                          <label for="">Features (html)</label>
                          <input
                            type="text"
                            name="features"
                            class="form-control"
                            required
                          ></input>
                        </div> */}
                        <div class="form-group">
                          {/* <label for="">Photos</label>
                          <input
                            type="file"
                            name="photos"
                            class="form-control"
                            multiple
                            required
                          ></input> */}
                          <label for="">
                            Brochure (Leave empty to not Update)
                          </label>
                          <input
                            type="file"
                            name="brochure"
                            class="form-control"
                          ></input>
                          <label for="">
                            Banner (Leave empty to not Update)
                          </label>
                          <input
                            type="file"
                            name="banner"
                            class="form-control"
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
                          <label for="">Price</label>
                          <input
                            type="number"
                            name="price"
                            class="form-control"
                            defaultValue={this.state.editProduct.price}
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Description</label>
                          <input
                            type="text"
                            name="description"
                            class="form-control"
                            defaultValue={this.state.editProduct.description}
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">Color</label>
                          <input
                            type="text"
                            name="color"
                            class="form-control"
                            defaultValue={this.state.editProduct.color}
                            required
                          ></input>
                        </div>
                        <div class="form-group">
                          <label for="">EMI (true/false)</label>
                          {/* <input
                            type="text"
                            name="emi"
                            class="form-control"
                            defaultValue={this.state.editProduct.emi}
                            required
                          ></input> */}
                          <select
                            name="emi"
                            class="form-control"
                            defaultValue={this.state.editProduct.emi}
                            required
                          >
                            <option value="true">True</option>
                            <option value="false">False</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="">Type (product/accessory)</label>
                          {/* <input
                            type="text"
                            name="type"
                            class="form-control"
                            required
                          ></input> */}
                          <select
                            name="type"
                            class="form-control"
                            defaultValue={this.state.editProduct.type}
                            required
                          >
                            <option value="product">Product</option>
                            <option value="accessory">Accessory</option>
                          </select>
                        </div>
                        {/* <div class="form-group">
                          <label for="">Price2</label>
                          <input
                            type="number"
                            name="price2"
                            class="form-control"
                            defaultValue={this.state.editProduct.price2}
                            required
                          ></input>
                        </div> */}
                        {/* <div class="form-group">
                          <label for="">Features (html)</label>
                          <input
                            type="text"
                            name="features"
                            class="form-control"
                            defaultValue={this.state.editProduct.features}
                            required
                          ></input>
                        </div> */}
                        <div class="form-group">
                          {/* <label for="">Photos</label>
                          <input
                            type="file"
                            name="photos"
                            class="form-control"
                            multiple
                            required
                          ></input> */}
                          <label for="">Brochure</label>
                          <input
                            type="file"
                            name="brochure"
                            class="form-control"
                          ></input>
                          <label for="">Banner</label>
                          <input
                            type="file"
                            name="banner"
                            class="form-control"
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
