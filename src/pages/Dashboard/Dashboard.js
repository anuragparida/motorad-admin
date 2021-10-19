import React from "react";
import PropTypes from "prop-types";
import Footer from "./../../components/Footer/Footer";
import Sidebar from "./../../components/Sidebar";
import Header from "./../../components/Header/Header";
import DashNumberCard from "../../components/DashNumberCard/DashNumberCard";
import DashLineGraph from "../../components/DashLineGraph/DashLineGraph";
import DashDonutGraph from "./../../components/DashDonutGraph/DashDonutGraph";
import DashStatsCard from "../../components/DashStatsCard/DashStatsCard";

const Dashboard = () => (
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
                      <h3 class="nk-block-title page-title">Dashboard</h3>
                    </div>
                    <div class="nk-block-head-content">
                      <div class="toggle-wrap nk-block-tools-toggle">
                        <div
                          class="toggle-expand-content"
                          data-content="pageMenu"
                        >
                          <ul class="nk-block-tools g-3">
                            <li>
                              <div class="drodown">
                                <a
                                  class="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  <span class="d-none d-md-inline">Last</span>
                                  30 Days
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                  <ul class="link-list-opt no-bdr">
                                    <li>
                                      <a href="#">Last 30 Days</a>
                                    </li>
                                    <li>
                                      <a href="#">Last 6 Months</a>
                                    </li>
                                    <li>
                                      <a href="#">Last 1 Years</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li class="nk-block-tools-opt">
                              <a class="btn btn-primary" href="#">
                                Reports
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nk-block">
                  <div class="row g-gs">
                    <DashNumberCard />
                    <DashNumberCard />
                    <DashNumberCard />
                    <DashNumberCard />

                    <DashLineGraph />
                    <DashDonutGraph />
                    <DashStatsCard />

                    <DashStatsCard />
                    <DashLineGraph />
                    <DashDonutGraph />
                    {/* <div class="col-xxl-8">
                      <div class="card card-full">
                        <div class="card-inner">
                          <div class="card-title-group">
                            <div class="card-title">
                              <h6 class="title">Recent Orders</h6>
                            </div>
                          </div>
                        </div>
                        <div class="nk-tb-list mt-n2">
                          <div class="nk-tb-item nk-tb-head">
                            <div class="nk-tb-col">Order No.</div>
                            <div class="nk-tb-col tb-col-sm">Customer</div>
                            <div class="nk-tb-col tb-col-md">Date</div>
                            <div class="nk-tb-col">Amount</div>
                            <div class="nk-tb-col">
                              <span class="d-none d-sm-inline">Status</span>
                            </div>
                          </div>
                          <div class="nk-tb-item">
                            <div class="nk-tb-col">
                              <span class="tb-lead">
                                <a href="#">#95954</a>
                              </span>
                            </div>
                            <div class="nk-tb-col tb-col-sm">
                              <div class="user-card">
                                <div class="user-avatar sm bg-purple-dim">
                                  AB
                                </div>
                                <div class="user-name">
                                  <span class="tb-lead">Abu Bin Ishtiyak</span>
                                </div>
                              </div>
                            </div>
                            <div class="nk-tb-col tb-col-md">
                              <span class="tb-sub">02/11/2020</span>
                            </div>
                            <div class="nk-tb-col">
                              <span class="tb-sub tb-amount">4,596.75 USD</span>
                            </div>
                            <div class="nk-tb-col">
                              <span class="badge badge-dot badge-dot-xs badge-success">
                                Paid
                              </span>
                            </div>
                          </div>
                          <div class="nk-tb-item">
                            <div class="nk-tb-col">
                              <span class="tb-lead">
                                <a href="#">#95850</a>
                              </span>
                            </div>
                            <div class="nk-tb-col tb-col-sm">
                              <div class="user-card">
                                <div class="user-avatar sm bg-azure-dim">
                                  DE
                                </div>
                                <div class="user-name">
                                  <span class="tb-lead">Desiree Edwards</span>
                                </div>
                              </div>
                            </div>
                            <div class="nk-tb-col tb-col-md">
                              <span class="tb-sub">02/02/2020</span>
                            </div>
                            <div class="nk-tb-col">
                              <span class="tb-sub tb-amount">596.75 USD</span>
                            </div>
                            <div class="nk-tb-col">
                              <span class="badge badge-dot badge-dot-xs badge-danger">
                                Canceled
                              </span>
                            </div>
                          </div>
                          <div class="nk-tb-item">
                            <div class="nk-tb-col">
                              <span class="tb-lead">
                                <a href="#">#95812</a>
                              </span>
                            </div>
                            <div class="nk-tb-col tb-col-sm">
                              <div class="user-card">
                                <div class="user-avatar sm bg-warning-dim">
                                  <img src="./images/avatar/b-sm.jpg" alt="" />
                                </div>
                                <div class="user-name">
                                  <span class="tb-lead">Blanca Schultz</span>
                                </div>
                              </div>
                            </div>
                            <div class="nk-tb-col tb-col-md">
                              <span class="tb-sub">02/01/2020</span>
                            </div>
                            <div class="nk-tb-col">
                              <span class="tb-sub tb-amount">199.99 USD</span>
                            </div>
                            <div class="nk-tb-col">
                              <span class="badge badge-dot badge-dot-xs badge-success">
                                Paid
                              </span>
                            </div>
                          </div>
                          <div class="nk-tb-item">
                            <div class="nk-tb-col">
                              <span class="tb-lead">
                                <a href="#">#95256</a>
                              </span>
                            </div>
                            <div class="nk-tb-col tb-col-sm">
                              <div class="user-card">
                                <div class="user-avatar sm bg-purple-dim">
                                  NL
                                </div>
                                <div class="user-name">
                                  <span class="tb-lead">Naomi Lawrence</span>
                                </div>
                              </div>
                            </div>
                            <div class="nk-tb-col tb-col-md">
                              <span class="tb-sub">01/29/2020</span>
                            </div>
                            <div class="nk-tb-col">
                              <span class="tb-sub tb-amount">1099.99 USD</span>
                            </div>
                            <div class="nk-tb-col">
                              <span class="badge badge-dot badge-dot-xs badge-success">
                                Paid
                              </span>
                            </div>
                          </div>
                          <div class="nk-tb-item">
                            <div class="nk-tb-col">
                              <span class="tb-lead">
                                <a href="#">#95135</a>
                              </span>
                            </div>
                            <div class="nk-tb-col tb-col-sm">
                              <div class="user-card">
                                <div class="user-avatar sm bg-success-dim">
                                  CH
                                </div>
                                <div class="user-name">
                                  <span class="tb-lead">Cassandra Hogan</span>
                                </div>
                              </div>
                            </div>
                            <div class="nk-tb-col tb-col-md">
                              <span class="tb-sub">01/29/2020</span>
                            </div>
                            <div class="nk-tb-col">
                              <span class="tb-sub tb-amount">1099.99 USD</span>
                            </div>
                            <div class="nk-tb-col">
                              <span class="badge badge-dot badge-dot-xs badge-warning">
                                Due
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-4 col-md-8 col-lg-6">
                      <div class="card h-100">
                        <div class="card-inner">
                          <div class="card-title-group mb-2">
                            <div class="card-title">
                              <h6 class="title">Top products</h6>
                            </div>
                            <div class="card-tools">
                              <div class="dropdown">
                                <a
                                  class="dropdown-toggle link link-light link-sm dropdown-indicator"
                                  href="#"
                                  data-toggle="dropdown"
                                >
                                  Weekly
                                </a>
                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                  <ul class="link-list-opt no-bdr">
                                    <li>
                                      <a href="#">Daily</a>
                                    </li>
                                    <li>
                                      <a class="active" href="#">
                                        Weekly
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">Monthly</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul class="nk-top-products">
                            <li class="item">
                              <div class="thumb">
                                <img src="./images/product/a.png" alt="" />
                              </div>
                              <div class="info">
                                <div class="title">Pink Fitness Tracker</div>
                                <div class="price">$99.00</div>
                              </div>
                              <div class="total">
                                <div class="amount">$990.00</div>
                                <div class="count">10 Sold</div>
                              </div>
                            </li>
                            <li class="item">
                              <div class="thumb">
                                <img src="./images/product/b.png" alt="" />
                              </div>
                              <div class="info">
                                <div class="title">Purple Smartwatch</div>
                                <div class="price">$99.00</div>
                              </div>
                              <div class="total">
                                <div class="amount">$990.00</div>
                                <div class="count">10 Sold</div>
                              </div>
                            </li>
                            <li class="item">
                              <div class="thumb">
                                <img src="./images/product/c.png" alt="" />
                              </div>
                              <div class="info">
                                <div class="title">
                                  Black Mi Band Smartwatch
                                </div>
                                <div class="price">$99.00</div>
                              </div>
                              <div class="total">
                                <div class="amount">$990.00</div>
                                <div class="count">10 Sold</div>
                              </div>
                            </li>
                            <li class="item">
                              <div class="thumb">
                                <img src="./images/product/d.png" alt="" />
                              </div>
                              <div class="info">
                                <div class="title">Black Headphones</div>
                                <div class="price">$99.00</div>
                              </div>
                              <div class="total">
                                <div class="amount">$990.00</div>
                                <div class="count">10 Sold</div>
                              </div>
                            </li>
                            <li class="item">
                              <div class="thumb">
                                <img src="./images/product/e.png" alt="" />
                              </div>
                              <div class="info">
                                <div class="title">iPhone 7 Headphones</div>
                                <div class="price">$99.00</div>
                              </div>
                              <div class="total">
                                <div class="amount">$990.00</div>
                                <div class="count">10 Sold</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
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

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
