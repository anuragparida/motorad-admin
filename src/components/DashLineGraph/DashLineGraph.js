import React from "react";
import { Line } from "react-chartjs-2";

const DashLineGraph = (props) => {
  const chartData = props.data;
  console.log(chartData.length ? true : false, chartData);

  // Have to update this from axios fetch once I have endpoint
  const data = (canvas) => {
    // const ctx = canvas.getContext("2d");

    // const gradient = ctx.createLinearGradient(0, 0, 0, 500);
    // gradient.addColorStop(0, "rgba(236, 104, 104, 1)");
    // gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    const X = [],
      Y = [];

    if (chartData.length) {
      chartData.forEach((dataPair) => {
        X.push(dataPair[0]);
        Y.push(dataPair[1]);
      });
    }

    return {
      // labels: Array.from({length: 15}, () => Math.floor(Math.random() * 40)),
      // labels: ["27.09", "29.09", "30.09", "01.10", "02.10", "03.10", "04.10", "05.10", "06.10"],
      // labels: Array.from({ length: 12 }, (_, i) => `${i}:00`),
      labels: X,
      datasets: [
        {
          label: "Chart Data",
          // backgroundColor: gradient,
          pointBackgroundColor: "white",
          borderWidth: 2,
          // borderColor: "rgba(255, 84, 84, 1)",
          borderColor: "green",
          // data: Array.from({ length: 12 }, () =>
          //   Math.floor(Math.random() * 175)
          // ),
          data: Y,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      easing: "easeInOutQuad",
      duration: 520,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            borderDash: [2, 10],
            color: "rgba(100, 100, 100, 0.5)",
            lineWidth: 1,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [2, 10],
            color: "rgba(100, 100, 100, 0.5)",
            lineWidth: 1,
          },
        },
      ],
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    legend: {
      display: false,
    },
    point: {
      backgroundColor: "white",
    },
    tooltips: {
      backgroundColor: "rgba(0,0,0,0.3)",
      titleFontColor: "green",
      caretSize: 5,
      cornerRadius: 2,
      xPadding: 10,
      yPadding: 10,
    },
  };

  return (
    <div class="col-xxl-6">
      <div class="card card-full">
        <div class="nk-ecwg nk-ecwg8 h-100">
          <div class="card-inner">
            <div class="card-title-group mb-3">
              <div class="card-title">
                <h6 class="title">Sales Statistics</h6>
              </div>
              <div class="card-tools">
                <div class="dropdown">
                  <a
                    class="link link-light link-sm"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Weekly
                  </a>
                  {/* <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
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
                </div> */}
                </div>
              </div>
            </div>
            {/* <ul class="nk-ecwg8-legends">
              <li>
                <div class="title">Total Order</div>
              </li>
              <li>
                <div class="title">Canceled Order</div>
              </li>
            </ul> */}
            <div class="nk-ecwg8-ck">
              <div className="chart-container" style={{ height: "250px" }}>
                <Line data={data} options={options} />
              </div>
            </div>
            {/* <div class="chart-label-group pl-5">
              <div class="chart-label">01 Jul, 2020</div>
              <div class="chart-label">30 Jul, 2020</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

DashLineGraph.propTypes = {};

DashLineGraph.defaultProps = {};

export default DashLineGraph;
