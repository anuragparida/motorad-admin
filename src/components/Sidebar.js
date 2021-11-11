import React, { Fragment, PureComponent } from "react";
import { server, config } from "../env";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default class Sidebar extends PureComponent {
  state = {
    tab: window.location.href.split("/")[3] || "/",
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.tab === prevState.tab) return;
    this.setState({
      tab: window.location.href.split("/")[3] || "/",
    });
  }

  logout = () => {
    Cookies.remove("token");
    window.location.href = "/login";
  };

  render() {
    // const { tab } = this.state;
    const tab = window.location.href.split("/")[3] || "/";
    console.log(tab);

    console.log(window.location.href.split("/")[3]);

    return (
      <div
        class="nk-sidebar nk-sidebar-fixed is-light"
        data-content="sidebarMenu"
      >
        <div class="nk-sidebar-element nk-sidebar-head">
          <div class="nk-sidebar-brand">
            <a href="html/index.html" class="logo-link nk-sidebar-logo">
              <img
                class="logo-light logo-img"
                src="./images/logo.png"
                srcset="./images/logo2x.png 2x"
                alt="logo"
              />
              {/* <img
                class="logo-dark logo-img"
                src="./images/logo-dark.png"
                srcset="./images/logo-dark2x.png 2x"
                alt="logo-dark"
              />
              <img
                class="logo-small logo-img logo-img-small"
                src="./images/logo-small.png"
                srcset="./images/logo-small2x.png 2x"
                alt="logo-small"
              /> */}
            </a>
          </div>
          <div class="nk-menu-trigger mr-n2">
            <a
              href="#"
              class="nk-nav-toggle nk-quick-nav-icon d-xl-none"
              data-target="sidebarMenu"
            >
              <em class="icon ni ni-arrow-left"></em>
            </a>
            <a
              href="#"
              class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
              data-target="sidebarMenu"
            >
              <em class="icon ni ni-menu"></em>
            </a>
          </div>
        </div>
        <div class="nk-sidebar-element">
          <div class="nk-sidebar-content">
            <div class="nk-sidebar-menu" data-simplebar>
              <ul class="nk-menu">
                <li class="nk-menu-heading">
                  <h6 class="overline-title text-primary-alt">Overview</h6>
                </li>
                <li class="nk-menu-item">
                  <Link
                    to="/"
                    className={
                      tab === "/"
                        ? "nk-menu-link active current-page"
                        : "nk-menu-link"
                    }
                    onClick={() =>
                      this.setState({
                        tab: "/",
                      })
                    }
                  >
                    <span class="nk-menu-icon">
                      <em class="icon ni ni-bag"></em>
                    </span>
                    <span class="nk-menu-text">Home</span>
                  </Link>
                </li>
                <li class="nk-menu-heading">
                  <h6 class="overline-title text-primary-alt">Dashboards</h6>
                </li>
                <li class="nk-menu-item">
                  <Link
                    to="/customers"
                    className={
                      tab === "customers" || tab === "customerdetails"
                        ? "nk-menu-link active current-page"
                        : "nk-menu-link"
                    }
                    onClick={() =>
                      this.setState({
                        tab: "customers",
                      })
                    }
                  >
                    <span class="nk-menu-icon">
                      <em class="icon ni ni-cart-fill"></em>
                    </span>
                    <span class="nk-menu-text">Customers</span>
                  </Link>
                </li>
                <li class="nk-menu-item">
                  <Link
                    to="/orders"
                    className={
                      "nk-menu-link " +
                      (tab === "orders" ? "active current-page" : "")
                    }
                    onClick={() =>
                      this.setState({
                        tab: "orders",
                      })
                    }
                  >
                    <span class="nk-menu-icon">
                      <em class="icon ni ni-activity-round-fill"></em>
                    </span>
                    <span class="nk-menu-text">Orders</span>
                  </Link>
                </li>
                <li class="nk-menu-item">
                  <Link
                    to="/products"
                    className={
                      tab === "products"
                        ? "nk-menu-link active current-page"
                        : "nk-menu-link"
                    }
                    onClick={() =>
                      this.setState({
                        tab: "products",
                      })
                    }
                  >
                    <span class="nk-menu-icon">
                      <em class="icon ni ni-growth-fill"></em>
                    </span>
                    <span class="nk-menu-text">Products</span>
                  </Link>
                </li>
                <li class="nk-menu-item">
                  <Link
                    to="/coupons"
                    className={
                      tab === "coupons"
                        ? "nk-menu-link active current-page"
                        : "nk-menu-link"
                    }
                    onClick={() =>
                      this.setState({
                        tab: "coupons",
                      })
                    }
                  >
                    <span class="nk-menu-icon">
                      <em class="icon ni ni-growth-fill"></em>
                    </span>
                    <span class="nk-menu-text">Coupons</span>
                  </Link>
                </li>
                <li class="nk-menu-item">
                  <Link
                    to="/forms"
                    className={
                      tab === "forms"
                        ? "nk-menu-link active current-page"
                        : "nk-menu-link"
                    }
                    onClick={() =>
                      this.setState({
                        tab: "forms",
                      })
                    }
                  >
                    <span class="nk-menu-icon">
                      <em class="icon ni ni-growth-fill"></em>
                    </span>
                    <span class="nk-menu-text">Forms</span>
                  </Link>
                </li>
                <li class="nk-menu-item">
                  <Link
                    to="/faq"
                    className={
                      tab === "faq"
                        ? "nk-menu-link active current-page"
                        : "nk-menu-link"
                    }
                    onClick={() =>
                      this.setState({
                        tab: "faq",
                      })
                    }
                  >
                    <span class="nk-menu-icon">
                      <em class="icon ni ni-growth-fill"></em>
                    </span>
                    <span class="nk-menu-text">FAQs</span>
                  </Link>
                </li>
                <li class="nk-menu-item">
                  <Link
                    to="/emi"
                    className={
                      tab === "emi"
                        ? "nk-menu-link active current-page"
                        : "nk-menu-link"
                    }
                    onClick={() =>
                      this.setState({
                        tab: "emi",
                      })
                    }
                  >
                    <span class="nk-menu-icon">
                      <em class="icon ni ni-growth-fill"></em>
                    </span>
                    <span class="nk-menu-text">EMI</span>
                  </Link>
                </li>
                <li class="nk-menu-item">
                  <Link
                    to="/stores"
                    className={
                      tab === "stores"
                        ? "nk-menu-link active current-page"
                        : "nk-menu-link"
                    }
                    onClick={() =>
                      this.setState({
                        tab: "stores",
                      })
                    }
                  >
                    <span class="nk-menu-icon">
                      <em class="icon ni ni-growth-fill"></em>
                    </span>
                    <span class="nk-menu-text">Stores</span>
                  </Link>
                </li>
                <li class="nk-menu-item">
                  <Link
                    to="/links"
                    className={
                      tab === "links"
                        ? "nk-menu-link active current-page"
                        : "nk-menu-link"
                    }
                    onClick={() =>
                      this.setState({
                        tab: "links",
                      })
                    }
                  >
                    <span class="nk-menu-icon">
                      <em class="icon ni ni-growth-fill"></em>
                    </span>
                    <span class="nk-menu-text">Links</span>
                  </Link>
                </li>
                <li class="nk-menu-heading">
                  <h6 class="overline-title text-primary-alt">Website</h6>
                </li>
                <li class="nk-menu-item">
                  <a href="html/index-analytics.html" class="nk-menu-link">
                    <span class="nk-menu-icon">
                      <em class="icon ni ni-growth-fill"></em>
                    </span>
                    <span class="nk-menu-text">Blogs</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
