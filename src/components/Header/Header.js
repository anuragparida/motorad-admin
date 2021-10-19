import React from "react";
import PropTypes from "prop-types";

const Header = () => (
  <div class="nk-header nk-header-fixed is-light">
    <div class="container-fluid">
      <div class="nk-header-wrap">
        <div class="nk-menu-trigger d-xl-none ml-n1"> </div>
        <div class="nk-header-brand d-xl-none">
          <a class="logo-link" href="html/index.html">
            <img
              class="logo-light logo-img"
              src="./images/logo.png"
              srcset="./images/logo2x.png 2x"
              alt="logo"
            />
            <img
              class="logo-dark logo-img"
              src="./images/logo-dark.png"
              srcset="./images/logo-dark2x.png 2x"
              alt="logo-dark"
            />
          </a>
        </div>
        <div class="nk-header-search ml-3 ml-xl-0">
          <input
            class="form-control border-transparent form-focus-none"
            type="text"
            placeholder="Search anything"
          />
        </div>
        <div class="nk-header-tools">
          <ul class="nk-quick-nav">
            <li class="dropdown chats-dropdown hide-mb-xs"> </li>
            <li class=" dropdown-menu dropdown-menu-xl dropdown-menu-right ">
              <div class="dropdown-head">
                <span class="sub-title nk-dropdown-title">
                  Recent Chats
                  <a href="#">Setting</a>
                </span>
              </div>
              <div class="dropdown-body">
                <ul class="chat-list">
                  <li class="chat-item">
                    <div class="chat-media user-avatar">IH</div>
                    <div class="chat-info">
                      <div class="chat-from">
                        <div class="name">Iliash Hossain</div>
                        <span class="time">Now</span>
                      </div>
                      <div class="chat-context">
                        <div class="text">
                          You: Please confrim if you got my last messages.
                        </div>
                        <div class="status delivered"> </div>
                      </div>
                    </div>
                  </li>
                  <li class="chat-item is-unread">
                    <div class="chat-media user-avatar bg-pink">AB</div>
                    <div class="chat-info">
                      <div class="chat-from">
                        <div class="name">Abu Bin Ishtiyak</div>
                        <span class="time">4:49 AM</span>
                      </div>
                      <div class="chat-context">
                        <div class="text">
                          Hi, I am Ishtiyak, can you help me with this problem ?
                        </div>
                        <div class="status unread"> </div>
                      </div>
                    </div>
                  </li>
                  <li class="chat-item">
                    <div class="chat-media user-avatar">
                      <img src="./images/avatar/b-sm.jpg" alt="" />
                    </div>
                    <div class="chat-info">
                      <div class="chat-from">
                        <div class="name">George Philips</div>
                        <span class="time">6 Apr</span>
                      </div>
                      <div class="chat-context">
                        <div class="text">
                          Have you seens the claim from Rose?
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="chat-item">
                    <div class=" chat-media user-avatar user-avatar-multiple ">
                      <div class="user-avatar">
                        <img src="./images/avatar/c-sm.jpg" alt="" />
                      </div>
                      <div class="user-avatar">AB</div>
                    </div>
                    <div class="chat-info">
                      <div class="chat-from">
                        <div class="name">Softnio Group</div>
                        <span class="time">27 Mar</span>
                      </div>
                      <div class="chat-context">
                        <div class="text">
                          You: I just bought a new computer but i am having some
                          problem
                        </div>
                        <div class="status sent"> </div>
                      </div>
                    </div>
                  </li>
                  <li class="chat-item">
                    <div class="chat-media user-avatar">
                      <img src="./images/avatar/a-sm.jpg" alt="" />
                    </div>
                    <div class="chat-info">
                      <div class="chat-from">
                        <div class="name">Larry Hughes</div>
                        <span class="time">3 Apr</span>
                      </div>
                      <div class="chat-context">
                        <div class="text">Hi Frank! How is you doing?</div>
                      </div>
                    </div>
                  </li>
                  <li class="chat-item">
                    <div class="chat-media user-avatar bg-purple">TW</div>
                    <div class="chat-info">
                      <div class="chat-from">
                        <div class="name">Tammy Wilson</div>
                        <span class="time">27 Mar</span>
                      </div>
                      <div class="chat-context">
                        <div class="text">
                          You: I just bought a new computer but i am having some
                          problem
                        </div>
                        <div class="status sent"> </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="dropdown-foot center">
                <a href="html/apps-chats.html">View All</a>
              </div>
            </li>
            <li class="dropdown notification-dropdown"> </li>
            <li class=" dropdown-menu dropdown-menu-xl dropdown-menu-right ">
              <div class="dropdown-head">
                <span class="sub-title nk-dropdown-title">
                  Notifications
                  <a href="#">Mark All as Read</a>
                </span>
              </div>
              <div class="dropdown-body">
                <div class="nk-notification">
                  <div class="nk-notification-item dropdown-inner">
                    <div class="nk-notification-icon"> </div>
                    <div class="nk-notification-content">
                      <div class="nk-notification-text">
                        You have requested to Widthdrawl
                      </div>
                      <div class="nk-notification-time">2 hrs ago</div>
                    </div>
                  </div>
                  <div class="nk-notification-item dropdown-inner">
                    <div class="nk-notification-icon"> </div>
                    <div class="nk-notification-content">
                      <div class="nk-notification-text">
                        Your Deposit Order is placed
                      </div>
                      <div class="nk-notification-time">2 hrs ago</div>
                    </div>
                  </div>
                  <div class="nk-notification-item dropdown-inner">
                    <div class="nk-notification-icon"> </div>
                    <div class="nk-notification-content">
                      <div class="nk-notification-text">
                        You have requested to Widthdrawl
                      </div>
                      <div class="nk-notification-time">2 hrs ago</div>
                    </div>
                  </div>
                  <div class="nk-notification-item dropdown-inner">
                    <div class="nk-notification-icon"> </div>
                    <div class="nk-notification-content">
                      <div class="nk-notification-text">
                        Your Deposit Order is placed
                      </div>
                      <div class="nk-notification-time">2 hrs ago</div>
                    </div>
                  </div>
                  <div class="nk-notification-item dropdown-inner">
                    <div class="nk-notification-icon"> </div>
                    <div class="nk-notification-content">
                      <div class="nk-notification-text">
                        You have requested to Widthdrawl
                      </div>
                      <div class="nk-notification-time">2 hrs ago</div>
                    </div>
                  </div>
                  <div class="nk-notification-item dropdown-inner">
                    <div class="nk-notification-icon"> </div>
                    <div class="nk-notification-content">
                      <div class="nk-notification-text">
                        Your Deposit Order is placed
                      </div>
                      <div class="nk-notification-time">2 hrs ago</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdown-foot center">
                <a href="#">View All</a>
              </div>
            </li>
            <li class="dropdown user-dropdown">
              <div class="user-toggle">
                <div class="user-avatar sm"> </div>
                <div class="user-info d-none d-xl-block">
                  <div class="user-status user-status-unverified">
                    Unverified
                  </div>
                  <div class="user-name dropdown-indicator">
                    Abu Bin Ishityak
                  </div>
                </div>
              </div>
              <div class=" dropdown-menu dropdown-menu-md dropdown-menu-right ">
                <div class=" dropdown-inner user-card-wrap bg-lighter d-none d-md-block ">
                  <div class="user-card">
                    <div class="user-avatar">AB</div>
                    <div class="user-info">
                      <span class="lead-text">Abu Bin Ishtiyak</span>
                      <span class="sub-text">info@softnio.com</span>
                    </div>
                  </div>
                </div>
                <div class="dropdown-inner">
                  <ul class="link-list">
                    <li>
                      <a href="html/user-profile-regular.html">
                        <em class="icon ni ni-user-alt">View Profile</em>
                      </a>
                    </li>
                    <li>
                      <a href="html/user-profile-setting.html">
                        <em class="icon ni ni-setting-alt">Account Setting</em>
                      </a>
                    </li>
                    <li>
                      <a href="html/user-profile-activity.html">
                        <em class="icon ni ni-activity-alt">Login Activity</em>
                      </a>
                    </li>
                    <li>
                      <a class="dark-switch" href="#">
                        <em class="icon ni ni-moon">Dark Mode</em>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown-inner">
                  <ul class="link-list">
                    <li>
                      <a href="#">
                        <em class="icon ni ni-signout">Sign out</em>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
