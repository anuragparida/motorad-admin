import React from "react";
import PropTypes from "prop-types";

const Footer = () => (
  <div class="nk-footer">
    <div class="container-fluid">
      <div class="nk-footer-wrap">
        <div class="nk-footer-copyright">
          © 2021
          <a href="https://softnio.com" target="_blank">
            &nbsp;EMotorad
          </a>
        </div>
        <div class="nk-footer-links">
          <ul class="nav nav-sm">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Terms
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Privacy
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
