import React, { useRef, useEffect } from "react";

import "antd/dist/antd.css";
import "./scss/ant-reset.scss";
import "./scss/base.scss";
import "./scss/page.scss";
import "./scss/Fluid/temp/fluid.css"; // todo : use development build of fluid in productions
import "remixicon/fonts/remixicon.css";

import "./font/Poppins/fonts.css";

import { Result } from "antd";

import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Services from "./page/Services";
import About from "./page/About";
import Home from "./page/Home";
import Mobile from "./page/service/Mobile";
import Ios from "./page/service/mobile/Ios";
import CaseStudy from "./page/CaseStudy";
import ContactUs from "./page/ContactUs";
import PackageDelivery from "./page/casestudy/PackageDelivery";
import Web from "./page/service/Web";
import CrossPlatform from "./page/service/CrossPlatform";
import Efund from "./page/casestudy/Efund";
import Career from "./page/service/Career";
import Apply from "./page/service/Apply";
import Branding from "./page/service/Branding";

function App() {
  const ref = useRef(null);

  let mainclass: string = "";
  const location = useLocation();
  const loc = (location.pathname === "/" ? "/home" : location.pathname).split("/");
  loc.forEach((element: string) => (mainclass += element + " "));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div ref={ref}>
      <Header />
      <main className={mainclass.toUpperCase() + "lyt-main"}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/services" component={Services} exact />
          <Route path="/services/mobile" component={Mobile} exact />
          <Route path="/services/mobile/ios" component={Ios} exact />
          <Route path="/services/web" component={Web} exact />
          <Route path="/services/branding" component={Branding} exact />
          <Route path="/services/mobile/crossplatform" component={CrossPlatform} exact />
          <Route path="/casestudy" component={CaseStudy} exact />
          <Route path="/casestudy/packagedelivery" component={PackageDelivery} exact />
          <Route path="/casestudy/efund" component={Efund} exact />
          <Route path="/contactus" component={ContactUs} exact />
          <Route path="/career" component={Career} exact />
          <Route path="/career/apply" component={Apply} exact />
          <Redirect from="/index" to="/" />
          <Route
            render={() => (
              <div className="lyt-main h-min-100vh flex align-middle justify-center">
                <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
                <div id="scrolldown" className="bg-white is-circle shadow icon absolute left-50 bottom-0 border border-light">
                  <i className="icon ri-2x ri-arrow-down-line" />
                </div>
              </div>
            )}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default withRouter(App);
