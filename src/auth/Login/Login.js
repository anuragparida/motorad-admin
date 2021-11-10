import React, { PureComponent } from "react";
import { server, SITE_KEY } from "../../env";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import Alert from "./../../components/Alert/Alert";
import Loader from "./../../components/Loader/Loader";

export default class Login extends PureComponent {
  state = {
    loader: "",
    message: "",
  };

  login = async (e) => {
    e.preventDefault();

    var params = Array.from(e.target.elements)
      .filter((el) => el.name)
      .reduce((a, b) => ({ ...a, [b.name]: b.value }), {});
    localStorage.setItem("email", e.target.email.value);

    console.log(params);

    this.setState({
      loader: <Loader />,
    });

    axios
      .post(server + "/api/admin/login", params)
      .then((rsp) => {
        console.log(rsp);
        if (rsp.status === 200) {
          Cookies.set("token", rsp.data.payload.token);
          Cookies.set("tokenDate", new Date());

          this.setState({
            message: <Alert className="success" message={rsp.data.message} />,
            loader: "",
          });

          var dataLayer = window.dataLayer || [];
          dataLayer.push({
            event: "loginSuccess",
          });
          window.location.href = "/";
        } else {
          this.setState({
            message: (
              <Alert
                className="alert alert-warning"
                message={rsp.data.message}
              />
            ),
            loader: "",
          });
          this.props.history.push("/verifyEmail");
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 422) {
            if (err.response.data.payload.is_email_verified === 0) {
              this.setState({
                message: (
                  <Alert
                    className="alert alert-warning"
                    message={err.response.data.message}
                  />
                ),
                loader: "",
              });
              this.props.history.push("/verifyEmail");
            }
          }
          this.setState({
            message: (
              <Alert className="danger" message={err.response.data.message} />
            ),
          });
        }
        this.setState({
          loader: true,
        });
      });
  };

  render() {
    const { message, loader } = this.state;
    return (
      <div class="nk-app-root">
        <div class="nk-main ">
          <div class="nk-wrap nk-wrap-nosidebar">
            <div class="nk-content ">
              <div class="nk-block nk-block-middle nk-auth-body  wide-xs">
                <div class="brand-logo pb-4 text-center">
                  <a href="html/index.html" class="logo-link">
                    <img
                      class="logo-light logo-img logo-img-lg"
                      src="./images/logo.png"
                      srcset="./images/logo2x.png 2x"
                      alt="logo"
                    />
                    <img
                      class="logo-dark logo-img logo-img-lg"
                      src="./images/logo-dark.png"
                      srcset="./images/logo-dark2x.png 2x"
                      alt="logo-dark"
                    />
                  </a>
                </div>
                <div class="card">
                  <div class="card-inner card-inner-lg">
                    <div class="nk-block-head">
                      <div class="nk-block-head-content">
                        <h4 class="nk-block-title">Sign-In</h4>
                        <div class="nk-block-des">
                          <p>
                            Access the CryptoLite panel using your email and
                            passcode.
                          </p>
                        </div>
                      </div>
                    </div>
                    <form onSubmit={this.login}>
                      <div class="form-group">
                        <div class="form-label-group">
                          <label class="form-label" for="default-01">
                            Email or Username
                          </label>
                        </div>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="default-01"
                          required
                          name="email"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div class="form-group">
                        <div class="form-label-group">
                          <label class="form-label" for="password">
                            Password
                          </label>
                          {/* <a
                        class="link link-primary link-sm"
                        href="html/pages/auths/auth-reset-v2.html"
                      >
                        Forgot Code?
                      </a> */}
                        </div>
                        <div class="form-control-wrap">
                          {/* <a
                            href="#"
                            class="form-icon form-icon-right passcode-switch"
                            data-target="password"
                          >
                            <em class="passcode-icon icon-show icon ni ni-eye"></em>
                            <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                          </a> */}
                          <input
                            type="password"
                            name="password"
                            class="form-control form-control-lg"
                            id="password"
                            placeholder="Enter your passcode"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <button
                          type="submit"
                          class="btn btn-lg btn-primary btn-block"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
