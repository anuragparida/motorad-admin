const Cookies = require("js-cookie");

module.exports = {
  server: "https://japan-api.emotorad.in", //ONLY CHANGE THIS
  // server: "http://localhost:7400",

  SITE_KEY: "6LdaGssUAAAAAFMBwO3VPUNlV6pZE_uIY04zK8dh",
  // SITE_KEY: "6LeujOcUAAAAAE9w5ZajotAUJR6xbaCxj2fu1q59",

  config: {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
      responseType: "json",
    },
  },
  formDataConfig: {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${Cookies.get("token")}`,
      responseType: "json",
    },
  },
  checkAccess: (err) => {
    if (err.response) {
      if (err.response.status === 401) {
        Cookies.remove("footprint");
        window.location.href = "/";
      }
    }
    return true;
  },
};
