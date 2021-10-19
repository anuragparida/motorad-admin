import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./../../components/Sidebar";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";

const CustomerDetails = () => (
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
                  <div class="nk-block-between g-3">
                    <div class="nk-block-head-content">
                      <h3 class="nk-block-title page-title">
                        Users /
                        <strong class="text-primary small">
                          Abu Bin Ishtiyak
                        </strong>
                      </h3>
                      <div class="nk-block-des text-soft">
                        <ul class="list-inline">
                          <li>
                            User ID:
                            <span class="text-base">UD003054</span>
                          </li>
                          <li>
                            Last Login:
                            <span class="text-base">15 Feb, 2019 01:02 PM</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="nk-block-head-content">
                      <a
                        class="btn btn-outline-light bg-white d-none d-sm-inline-flex"
                        href="html/user-list-regular.html"
                      >
                        Back
                      </a>
                    </div>
                  </div>
                </div>
                <div class="nk-block">
                  <div class="card">
                    <div class="card-aside-wrap">
                      <div class="card-content">
                        {/* <ul class="nav nav-tabs nav-tabs-mb-icon nav-tabs-card">
                          <li class="nav-item">
                            <a class="nav-link active" href="#">
                              Personal
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">
                              Transactions
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">
                              Documents
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">
                              Notifications
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">
                              Activities
                            </a>
                          </li>
                          <li class="nav-item nav-item-trigger d-xxl-none"></li>
                        </ul>*/}
                        <div class="card-inner">
                          <div class="nk-block">
                            <div class="nk-block-head">
                              <h5 class="title">Personal Information</h5>
                              <p>
                                Basic info, like your name and address, that you
                                use on Nio Platform.
                              </p>
                            </div>
                            <div class="profile-ud-list">
                              <div class="profile-ud-item">
                                <div class="profile-ud wider">
                                  <span class="profile-ud-label">Title</span>
                                  <span class="profile-ud-value">Mr.</span>
                                </div>
                              </div>
                              <div class="profile-ud-item">
                                <div class="profile-ud wider">
                                  <span class="profile-ud-label">
                                    Full Name
                                  </span>
                                  <span class="profile-ud-value">
                                    Abu Bin Ishtiyak
                                  </span>
                                </div>
                              </div>
                              <div class="profile-ud-item">
                                <div class="profile-ud wider">
                                  <span class="profile-ud-label">
                                    Date of Birth
                                  </span>
                                  <span class="profile-ud-value">
                                    10 Aug, 1980
                                  </span>
                                </div>
                              </div>
                              <div class="profile-ud-item">
                                <div class="profile-ud wider">
                                  <span class="profile-ud-label">Surname</span>
                                  <span class="profile-ud-value">IO</span>
                                </div>
                              </div>
                              <div class="profile-ud-item">
                                <div class="profile-ud wider">
                                  <span class="profile-ud-label">
                                    Mobile Number
                                  </span>
                                  <span class="profile-ud-value">
                                    01713040400
                                  </span>
                                </div>
                              </div>
                              <div class="profile-ud-item">
                                <div class="profile-ud wider">
                                  <span class="profile-ud-label">
                                    Email Address
                                  </span>
                                  <span class="profile-ud-value">
                                    info@softnio.com
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="nk-block">
                            <div class="nk-block-head nk-block-head-line">
                              <h6 class="title overline-title text-base">
                                Additional Information
                              </h6>
                            </div>
                            <div class="profile-ud-list">
                              <div class="profile-ud-item">
                                <div class="profile-ud wider">
                                  <span class="profile-ud-label">
                                    Joining Date
                                  </span>
                                  <span class="profile-ud-value">
                                    08-16-2018 09:04PM
                                  </span>
                                </div>
                              </div>
                              <div class="profile-ud-item">
                                <div class="profile-ud wider">
                                  <span class="profile-ud-label">
                                    Reg Method
                                  </span>
                                  <span class="profile-ud-value">Email</span>
                                </div>
                              </div>
                              <div class="profile-ud-item">
                                <div class="profile-ud wider">
                                  <span class="profile-ud-label">Country</span>
                                  <span class="profile-ud-value">
                                    United State
                                  </span>
                                </div>
                              </div>
                              <div class="profile-ud-item">
                                <div class="profile-ud wider">
                                  <span class="profile-ud-label">
                                    Nationality
                                  </span>
                                  <span class="profile-ud-value">
                                    United State
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="nk-divider divider md"> </div>
                          <div class="nk-block">
                            <div class="nk-block-head nk-block-head-sm nk-block-between">
                              <h5 class="title">Admin Note</h5>
                              <a class="link link-sm" href="#">
                                + Add Note
                              </a>
                            </div>
                            <div class="bq-note">
                              <div class="bq-note-item">
                                <div class="bq-note-text">
                                  <p>
                                    Aproin at metus et dolor tincidunt feugiat
                                    eu id quam. Pellentesque habitant morbi
                                    tristique senectus et netus et malesuada
                                    fames ac turpis egestas. Aenean sollicitudin
                                    non nunc vel pharetra.
                                  </p>
                                </div>
                                <div class="bq-note-meta">
                                  <span class="bq-note-added">
                                    Added on
                                    <span class="date">November 18, 2019</span>
                                    at
                                    <span class="time">5:34 PM</span>
                                  </span>
                                  <span class="bq-note-sep sep">|</span>
                                  <span class="bq-note-by">By Softnio</span>
                                  <a class="link link-sm link-danger" href="#">
                                    Delete Note
                                  </a>
                                </div>
                              </div>
                              <div class="bq-note-item">
                                <div class="bq-note-text">
                                  <p>
                                    Aproin at metus et dolor tincidunt feugiat
                                    eu id quam. Pellentesque habitant morbi
                                    tristique senectus et netus et malesuada
                                    fames ac turpis egestas. Aenean sollicitudin
                                    non nunc vel pharetra.
                                  </p>
                                </div>
                                <div class="bq-note-meta">
                                  <span class="bq-note-added">
                                    Added on
                                    <span class="date">November 18, 2019</span>
                                    at
                                    <span class="time">5:34 PM</span>
                                  </span>
                                  <span class="bq-note-sep sep">|</span>
                                  <span class="bq-note-by">By Softnio</span>
                                  <a class="link link-sm link-danger" href="#">
                                    Delete Note
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card-aside card-aside-right user-aside toggle-slide toggle-slide-right toggle-break-xxl"
                        data-content="userAside"
                        data-toggle-screen="xxl"
                        data-toggle-overlay="true"
                        data-toggle-body="true"
                      >
                        <div class="card-inner-group" data-simplebar="">
                          <div class="card-inner">
                            <div class="user-card user-card-s2">
                              <div class="user-avatar lg bg-primary">AB</div>
                              <div class="user-info">
                                <div class="badge badge-outline-light badge-pill ucap">
                                  Investor
                                </div>
                                <h5>Abu Bin Ishtiyak</h5>
                                <span class="sub-text">info@softnio.com</span>
                              </div>
                            </div>
                          </div>
                          <div class="card-inner card-inner-sm"> </div>
                          <div class="card-inner">
                            <div class="overline-title-alt mb-2">
                              In Account
                            </div>
                            <div class="profile-balance">
                              <div class="profile-balance-group gx-4">
                                <div class="profile-balance-sub">
                                  <div class="profile-balance-amount">
                                    <div class="number">
                                      2,500.00
                                      <small class="currency currency-usd">
                                        USD
                                      </small>
                                    </div>
                                  </div>
                                  <div class="profile-balance-subtitle">
                                    Invested Amount
                                  </div>
                                </div>
                                <div class="profile-balance-sub">
                                  <div class="profile-balance-amount">
                                    <div class="number">1,643.76</div>
                                  </div>
                                  <div class="profile-balance-subtitle">
                                    Profit Earned
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-inner">
                            <div class="row text-center">
                              <div class="col-4">
                                <div class="profile-stats">
                                  <span class="amount">23</span>
                                  <span class="sub-text">Total Order</span>
                                </div>
                              </div>
                              <div class="col-4">
                                <div class="profile-stats">
                                  <span class="amount">20</span>
                                  <span class="sub-text">Complete</span>
                                </div>
                              </div>
                              <div class="col-4">
                                <div class="profile-stats">
                                  <span class="amount">3</span>
                                  <span class="sub-text">Progress</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-inner">
                            <h6 class="overline-title-alt mb-2">Additional</h6>
                            <div class="row g-3">
                              <div class="col-6">
                                <span class="sub-text">User ID:</span>
                                UD003054
                              </div>
                              <div class="col-6">
                                <span class="sub-text">Last Login:</span>
                                15 Feb, 2019 01:02 PM
                              </div>
                              <div class="col-6">
                                <span class="sub-text">KYC Status:</span>
                                <span class="lead-text text-success">
                                  Approved
                                </span>
                              </div>
                              <div class="col-6">
                                <span class="sub-text">Register At:</span>
                                Nov 24, 2019
                              </div>
                            </div>
                          </div>
                          <div class="card-inner">
                            <h6 class="overline-title-alt mb-3">Groups</h6>
                            <ul class="g-1">
                              <li class="btn-group">
                                <a
                                  class="btn btn-xs btn-light btn-dim"
                                  href="#"
                                >
                                  investor
                                </a>
                              </li>
                              <li class="btn-group">
                                <a
                                  class="btn btn-xs btn-light btn-dim"
                                  href="#"
                                >
                                  support
                                </a>
                              </li>
                              <li class="btn-group">
                                <a
                                  class="btn btn-xs btn-light btn-dim"
                                  href="#"
                                >
                                  another tag
                                </a>
                              </li>
                            </ul>
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

CustomerDetails.propTypes = {};

CustomerDetails.defaultProps = {};

export default CustomerDetails;
