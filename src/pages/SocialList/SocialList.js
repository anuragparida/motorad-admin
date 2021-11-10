import React, { PureComponent } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { server, config, checkAccess, formDataConfig } from "../../env";
import SocialListItem from "../../components/SocialListItem/SocialListItem";

export default class SocialList extends PureComponent {
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
      .get(server + "/api/social/read", config)
      .then((rsp) => {
        console.log(rsp);
        this.setState({
          products: rsp.data.payload,
        });
      })
      .catch((err) => {
        checkAccess(err);
        console.error(err);
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
        server + `/api/social/update/${this.state.editId}`,
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
                          <h3 class="nk-block-title page-title">
                            Social Links
                          </h3>
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
                                  <span class="sub-text">Link</span>
                                </div>
                                <div class="nk-tb-col">
                                  <span class="sub-text">Edit</span>
                                </div>
                              </div>
                              {this.state.products.map((x, i) => (
                                <SocialListItem
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
                          <label for="">
                            Link for {this.state.editProduct.name}
                          </label>
                          <input
                            type="text"
                            name="link"
                            class="form-control"
                            defaultValue={this.state.editProduct.link}
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
