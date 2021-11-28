import React, { useState, useEffect } from "react";
import axios from "axios";
import { server, config, checkAccess } from "../../env";
import Footer from "./../../components/Footer/Footer";
import Sidebar from "./../../components/Sidebar";
import Header from "./../../components/Header/Header";
import DashNumberCard from "../../components/DashNumberCard/DashNumberCard";
import DashLineGraph from "../../components/DashLineGraph/DashLineGraph";
import DashDonutGraph from "./../../components/DashDonutGraph/DashDonutGraph";
import DashStatsCard from "../../components/DashStatsCard/DashStatsCard";

const Dashboard = () => {
  const [numberData, setNumberData] = useState({});
  const [lineChartData, setLineChartData] = useState({});

  const updateNumberData = async () => {
    await axios
      .get(server + "/api/admin/dashboard", config)
      .then((rsp) => {
        console.log(rsp);
        setNumberData(rsp.data.payload);
      })
      .catch((err) => {
        checkAccess(err);
        console.error(err);
      });
  };

  const updateLineChartData = async () => {
    await axios
      .get(server + "/api/admin/revenue/week", config)
      .then((rsp) => {
        console.log(rsp);
        setLineChartData(rsp.data.payload);
      })
      .catch((err) => {
        checkAccess(err);
        console.error(err);
      });
  };

  useEffect(() => {
    updateNumberData();
    updateLineChartData();
  }, []);

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
                      {numberData && (
                        <>
                          <DashNumberCard data={["Users", numberData.users]} />
                          <DashNumberCard
                            data={["Orders", numberData.orders]}
                          />
                          <DashNumberCard
                            data={["Revenue", numberData.revenue]}
                          />
                          <DashNumberCard
                            data={["Orders", numberData.orders]}
                          />
                        </>
                      )}
                      <DashLineGraph data={lineChartData} />
                      <DashDonutGraph />
                      <DashStatsCard />

                      {/* <DashStatsCard />
                      <DashLineGraph />
                      <DashDonutGraph /> */}
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
};

export default Dashboard;
