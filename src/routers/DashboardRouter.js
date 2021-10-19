import { Fragment, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { server, config, STRIPE_KEY, checkAccess } from "../env";

// Components
// import Order from "../source/Order";
// import Proxy from "../source/Proxy";
// import Sneaker from "../source/Sneaker";
// import SubUser from "../source/SubUser";
// import Invoices from "../source/Invoices";
// import ViewInvoice from "../source/ViewInvoice";
// import Knowledgebase from "../source/Knowledgebase";
// import Settings from "../source/Settings";
import CustomersList from "../pages/CustomersList/CustomersList";
import CustomerDetails from "./../pages/CustomerDetails/CustomerDetails";
import OrdersList from "./../pages/OrdersList/OrdersList";
import ProductsList from "./../pages/ProductsList/ProductsList";
import CouponsList from "./../pages/CouponsList/CouponsList";
import Dashboard from "./../pages/Dashboard/Dashboard";

export default function DashboardRouter() {
  return (
    <Switch>
      {/* <Route path="/settings" component={Settings} />
            <Route path="/knowledgebase" component={Knowledgebase} />
            <Route path="/invoice/:id" component={ViewInvoice} />
            <Route path="/invoices" component={Invoices} />
            <Route path="/sub-users" component={SubUser} />
            <Route path="/sneaker" component={Sneaker} />
            <Route path="/proxies" component={Proxy} />
            <Route path="/orders" component={Order} /> */}
      <Route path="/customers" component={CustomersList} />
      <Route path="/customerdetails" component={CustomerDetails} />
      <Route path="/orders" component={OrdersList} />
      <Route path="/products" component={ProductsList} />
      <Route path="/coupons" component={CouponsList} />
      <Route path="/" component={Dashboard} />
    </Switch>
  );
}
