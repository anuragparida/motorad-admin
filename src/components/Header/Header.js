import React from "react";
import Cookies from "js-cookie";

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
              <a
                href="javascript:void(0)"
                onClick={() => {
                  Cookies.remove("token");
                  window.location.href = "/login";
                }}
              >
                <em class="icon ni ni-signout"> Logout</em>
              </a>
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
