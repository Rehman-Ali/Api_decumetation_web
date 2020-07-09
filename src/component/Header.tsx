import React, { useEffect, useRef } from "react";
import Headroom from "headroom.js";

import { Link } from "react-router-dom";

import logo from "../image/logo.png";

export default function Header() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    var headroom = new Headroom(ref.current, {
      // vertical offset in px before element is first unpinned
      offset: 90,
      // scroll tolerance in px before state changes
      tolerance: 5,
      // or you can specify tolerance individually for up/down scroll
      // tolerance: {
      //   up: 5,
      //   down: 0
      // },
      // css classes to apply
      classes: {
        // when element is initialised
        initial: "animate__animated",
        // when scrolling up
        pinned: "animate__slideInDown",
        // when scrolling down
        unpinned: "animate__slideOutUp",
        // when above offset
        top: "headroom--top",
        // when below offset
        notTop: "headroom--not-top is-collapse",
        // when at bottom of scoll area
        bottom: "headroom--bottom",
        // when not at bottom of scroll area
        notBottom: "headroom--not-bottom",
        // when frozen method has been called
        frozen: "headroom--frozen",
      },
      // element to listen to scroll events on, defaults to `window`
      scroller: window,
      // callback when pinned, `this` is headroom object
      onPin: function () {},
      // callback when unpinned, `this` is headroom object
      onUnpin: function () {},
      // callback when above offset, `this` is headroom object
      onTop: function () {},
      // callback when below offset, `this` is headroom object
      onNotTop: function () {},
      // callback when at bottom of page, `this` is headroom object
      onBottom: function () {},
      // callback when moving away from bottom of page, `this` is headroom object
      onNotBottom: function () {},
    });
    headroom.init();
  }, []);

  return (
    <>
      <header ref={ref} className="lyt-header fixed top-0 grid">
        <div className="column w-5 p-7px">
          <Link to="/">
            <img src={logo} alt="Logo" className="img w-16" />
          </Link>
        </div>
        <div className="p-0 column txt-center align-self-stretch" id="nav">
          <Link to="/about" className="btn h-100 inline-flex align-middle border-hide is-min is-primary px-2rem txt-decor-none font-bold">
            About
          </Link>

          <div className="dropdown on-hover h-100 inline-flex align-middle">
            <Link to="/services" className="btn h-100 inline-flex align-middle border-hide is-min is-primary px-2rem dropdown-trigger after-hide font-bold">
              Services
            </Link>
            <div style={{ width: "700px" }} className="txt-left left-50 trans-x--50 menu py-0 border shadow-sm">
              <div className="grid">
                <div className="overflow-hidden column w-8 flex align-bottom txt-wrap bg-primary img-bg p-2 clr-white" style={{ backgroundImage: "linear-gradient(to bottom, #03589866, #035898b3), url('https://images.unsplash.com/photo-1523582407565-efee5cf4a353')" }}>
                  <div>
                    <h3>Hire Team</h3>
                    <div>Create your own agile squad with experienced members just like your local team.</div>
                    <button className="btn is-sld is-primary is-pill mt-6">Know More</button>
                  </div>
                </div>
                <div className="column grid">
                  <div className="column w-12 p-4">
                    <Link to="/services/branding" className="btn is-unstyle clr-hover-focus-primary txt-cap mb-2">
                      <i className="icon ri-compasses-fill" /> Branding
                    </Link>
                    <div className="border-left border-wide border-primary pl-4">
                      <Link to="/services/branding/logo" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Logo
                      </Link>
                      <Link to="/services/branding/poster" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Poster
                      </Link>
                      <Link to="/services/branding/designining" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Designining
                      </Link>
                    </div>
                  </div>
                  <div className="column w-12 p-4">
                    <Link to="/services/web" className="btn is-unstyle clr-hover-focus-primary txt-cap mb-2">
                      <i className="icon ri-globe-fill" /> Web Development
                    </Link>
                    <div className="border-left border-wide border-primary pl-4">
                      <Link to="/services/web/frontend" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Front End
                      </Link>
                      <Link to="/services/web/backend" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Back End
                      </Link>
                      <Link to="/services/web/api" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        API
                      </Link>
                      <Link to="/services/web/cms" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        CMS
                      </Link>
                      <Link to="/services/web/customsetup" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Custom Setup
                      </Link>
                    </div>
                  </div>
                  <div className="column w-12 p-4">
                    <Link to="/services/marketing" className="btn is-unstyle clr-hover-focus-primary txt-cap mb-2">
                      <i className="icon ri-funds-fill" /> Marketing
                    </Link>
                    <div className="border-left border-wide border-primary pl-4">
                      <Link to="/services/marketing/socialmediamarkeing" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Social Media Markeing
                      </Link>
                      <Link to="/services/marketing/postengagement" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Post Engagement
                      </Link>
                      <Link to="/services/marketing/socialinteration" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Social Interation
                      </Link>
                    </div>
                  </div>
                  <div className="column w-12 p-4">
                    <Link to="/services/mobile" className="btn is-unstyle clr-hover-focus-primary txt-cap mb-2">
                      <i className="ri-smartphone-fill" />
                      Mobile
                    </Link>
                    <div className="border-left border-wide border-primary pl-4">
                      <Link to="/services/mobile/ios" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        IOS
                      </Link>
                      <Link to="/services/mobile/andriod" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Andriod
                      </Link>
                      <Link to="/services/mobile/reactnative" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        React Native
                      </Link>
                      <Link to="/services/mobile/crossplatform" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Cross Platform
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown on-hover h-100 inline-flex align-middle">
            <Link to="/services" className="btn h-100 inline-flex align-middle border-hide is-min is-primary px-2rem dropdown-trigger after-hide font-bold">
              Solution
            </Link>
            <div style={{ width: "700px" }} className="txt-left left-50 trans-x--50 menu py-0 border shadow-sm">
              <div className="grid">
                <div className="overflow-hidden column w-8 flex align-bottom txt-wrap bg-primary img-bg p-2 clr-white" style={{ backgroundImage: "linear-gradient(to bottom, #03589866, #035898b3), url('https://images.unsplash.com/photo-1523582407565-efee5cf4a353')" }}>
                  <div>
                    <h3>Hire Team</h3>
                    <div>Create your own agile squad with experienced members just like your local team.</div>
                    <button className="btn is-sld is-primary is-pill mt-6">Know More</button>
                  </div>
                </div>
                <div className="column grid">
                  <div className="column w-12 p-4">
                    <Link to="/services/branding" className="btn is-unstyle clr-hover-focus-primary txt-cap mb-2">
                      <i className="icon ri-compasses-fill" /> Branding
                    </Link>
                    <div className="border-left border-wide border-primary pl-4">
                      <Link to="/services/branding/logo" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Logo
                      </Link>
                      <Link to="/services/branding/poster" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Poster
                      </Link>
                      <Link to="/services/branding/designining" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Designining
                      </Link>
                    </div>
                  </div>
                  <div className="column w-12 p-4">
                    <Link to="/services/web" className="btn is-unstyle clr-hover-focus-primary txt-cap mb-2">
                      <i className="icon ri-globe-fill" /> Web Development
                    </Link>
                    <div className="border-left border-wide border-primary pl-4">
                      <Link to="/services/web/frontend" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Front End
                      </Link>
                      <Link to="/services/web/backend" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Back End
                      </Link>
                      <Link to="/services/web/api" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        API
                      </Link>
                      <Link to="/services/web/cms" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        CMS
                      </Link>
                      <Link to="/services/web/customsetup" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Custom Setup
                      </Link>
                    </div>
                  </div>
                  <div className="column w-12 p-4">
                    <Link to="/services/marketing" className="btn is-unstyle clr-hover-focus-primary txt-cap mb-2">
                      <i className="icon ri-funds-fill" /> Marketing
                    </Link>
                    <div className="border-left border-wide border-primary pl-4">
                      <Link to="/services/marketing/socialmediamarkeing" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Social Media Markeing
                      </Link>
                      <Link to="/services/marketing/postengagement" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Post Engagement
                      </Link>
                      <Link to="/services/marketing/socialinteration" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Social Interation
                      </Link>
                    </div>
                  </div>
                  <div className="column w-12 p-4">
                    <Link to="/services/mobile" className="btn is-unstyle clr-hover-focus-primary txt-cap mb-2">
                      <i className="ri-smartphone-fill" />
                      Mobile
                    </Link>
                    <div className="border-left border-wide border-primary pl-4">
                      <Link to="/services/mobile/ios" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        IOS
                      </Link>
                      <Link to="/services/mobile/andriod" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Andriod
                      </Link>
                      <Link to="/services/mobile/reactnative" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        React Native
                      </Link>
                      <Link to="/services/mobile/crossplatform" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                        Cross Platform
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown on-hover h-100 inline-flex align-middle">
            <Link to="/methdologies" className="btn h-100 inline-flex align-middle border-hide is-min is-primary px-2rem dropdown-trigger after-hide font-bold">
              Methdologies
            </Link>
            <div style={{ width: "700px" }} className="txt-left left-50 trans-x--50 menu py-0 border shadow-sm">
              <div className="grid">
                <div className="overflow-hidden column w-8 flex align-bottom txt-wrap bg-primary img-bg p-2 clr-white" style={{ backgroundImage: "linear-gradient(to bottom, #03589866, #035898b3), url('https://images.unsplash.com/photo-1523582407565-efee5cf4a353')" }}>
                  <div>
                    <h3>Hire Team</h3>
                    <div>Create your own agile squad with experienced members just like your local team.</div>
                    <button className="btn is-sld is-primary is-pill mt-6">Know More</button>
                  </div>
                </div>
                <div className="column grid">
                  <div className="column w-12 p-4">
                    <Link to="/methdologies/discovery" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                      <span className="column w-3 flex align-self-baseline py-4">
                        <i className="icon ri-compasses-fill" />
                      </span>
                      <span className="column w-21 block">
                        <span className="block font-bold">Discovery</span>
                        <span className="block clr-body is-sm txt-justify">Transforming ideas into a measurable scope with functional UI/UX Design.</span>
                      </span>
                    </Link>
                  </div>
                  <div className="column w-12 p-4">
                  <Link to="/methdologies/projectexecution" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                      <span className="column w-3 flex align-self-baseline py-4">
                        <i className="icon ri-compasses-fill" />
                      </span>
                      <span className="column w-21 block">
                        <span className="block font-bold">Project Execution</span>
                        <span className="block clr-body is-sm txt-justify">Form an expert team who works remotely, under your supervision.</span>
                      </span>
                    </Link>
                  </div>
                  <div className="column w-12 p-4">
                  <Link to="/methdologies/remoteteam" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                      <span className="column w-3 flex align-self-baseline py-4">
                        <i className="icon ri-compasses-fill" />
                      </span>
                      <span className="column w-21 block">
                        <span className="block font-bold">Remote Team</span>
                        <span className="block clr-body is-sm txt-justify"><p _ngcontent-c1="">Get to know how we balance the critical triangle of Cost, Time and Scope</p></span>
                      </span>
                    </Link>
                  </div>
                  <div className="column w-12 p-4">
                  <Link to="/methdologies/projectreview" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                      <span className="column w-3 flex align-self-baseline py-4">
                        <i className="icon ri-compasses-fill" />
                      </span>
                      <span className="column w-21 block">
                        <span className="block font-bold">Project Review</span>
                        <span className="block clr-body is-sm txt-justify">Form an expert team who works remotely, under your supervision.</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/casestudy" className="btn h-100 inline-flex align-middle border-hide is-min is-primary px-2rem txt-decor-none font-bold">
            Our Work
          </Link>
        </div>

        <div className="column w-5 flex align-middle">
          <Link to="contactus" className="btn is-sld is-primary is-pill font-bold mr-1rem flex move-icon" style={{ padding: "10px 30px" }}>
            Contact Us <i className="icon ri-arrow-right-line ml-7px" />
          </Link>
          <button className="btn is-circle is-primary ri-xl">
            <i className="icon ri-sun-line" />
          </button>
        </div>
      </header>
    </>
  );
}
