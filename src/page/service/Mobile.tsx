import React, { useState } from "react";

import "../../vendor/devices.css";

import ios from "../../image/service/mobile/ios.svg";
import andriod from "../../image/service/mobile/andriod.svg";
import clouddriven from "../../image/service/mobile/clouddriven.svg";
import SliderMobile from "../../component/SliderMobile";
import OurWork from "../../component/OurWork";
import Clock from "../../component/Clock";

import { Link } from "react-router-dom";

export interface props {
  className?: string;
}

Mobile.defaultProps = {
  className: "",
} as props;

export default function Mobile(props: props) {
  const [color, setColor] = useState("#430BDE");
  return (
    <>
      <div className="absolute left-0 top-0 right-0 event-none z--100 overflow-x-hidden h-100">
        <svg style={{ top: "512px", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }} className="img absolute w-5" width="100%" height="100%" viewBox="0 0 414 993" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
          <g transform="matrix(1,0,0,1,-20.23,-43.5)">
            <path d="M283.36,572.51C346.41,543.34 445.04,475.11 432.72,392.78C419.7,305.8 290.92,283.89 233.56,232.59C155.58,162.86 143.44,54.33 20.23,43.5L20.23,1036.5C68.8,1011.61 66.31,946.28 101.87,908.31C146.91,861.14 255.01,859.41 281.73,799.08C313.78,726.72 177.35,621.55 283.36,572.51Z" style={{ fill: color, fillRule: "nonzero", transition: "fill .3s ease-in-out" }} />
          </g>
        </svg>

        <svg style={{ top: "-227px", right: "-51px", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }} className="img absolute w-5 flip-xy" width="100%" height="100%" viewBox="0 0 414 993" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
          <g transform="matrix(1,0,0,1,-20.23,-43.5)">
            <path d="M283.36,572.51C346.41,543.34 445.04,475.11 432.72,392.78C419.7,305.8 290.92,283.89 233.56,232.59C155.58,162.86 143.44,54.33 20.23,43.5L20.23,1036.5C68.8,1011.61 66.31,946.28 101.87,908.31C146.91,861.14 255.01,859.41 281.73,799.08C313.78,726.72 177.35,621.55 283.36,572.51Z" style={{ fill: color, fillRule: "nonzero", transition: "fill .3s ease-in-out" }} />
          </g>
        </svg>
      </div>

      <SliderMobile
        onchange={(color) => setColor(color)}
        className="h-min-100vh mt-1rem"
        child={
          <div id="scrolldown" className="bg-white is-circle shadow icon absolute left-50 bottom-0 border border-light">
            <i className="icon ri-2x ri-arrow-down-line" />
          </div>
        }
      />

      <section className="txt-center px-6 container flex h-min-100vh align-middle justify-center">
        <div className="mt-6">
          <div>Award-winning Offshore Software Development Company Since 1997</div>
          <h1 className="title is-sm font-bolder">Mobile App Development Company</h1>
          <div className="is-lg">We develop mobile apps that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from QuellXCode who are experts for delivering excellence in Android, iOS and cross-platform app development services.</div>
        </div>
      </section>

      <section className="px-6 py-6 container bg-light">
        <h1 className="font-bolder txt-center">We help you create Apps for</h1>
        <div className="grid">
          <div className="column p-2 txt-center">
            <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-mobile-app-development-enterprise.svg" className="img mb-6" />
            <h5 className="font-bolder mt-4 mb-6">Enterprise</h5>
            <p className="txt-justify">Our collaborative consulting on Mobile Strategy serves as a catalyst in streamlining IT frameworks and processes with the mobile roadmap that is aligned with enterprise scenarios, policies and current systems.</p>
          </div>
          <div className="column p-2 txt-center">
            <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-business.svg" className="img mb-6" />
            <h5 className="font-bolder mt-4 mb-6">Business</h5>
            <p className="txt-justify">We map business’s needs and use cases to enable them to quickly respond to the changes. We help your organization mobilize the inter-department communication, workflows and instant information availability.</p>
          </div>
          <div className="column p-2 txt-center">
            <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-consumers.svg" className="img mb-6" />
            <h5 className="font-bolder mt-4 mb-6">Consumers</h5>
            <p className="txt-justify">Our mobile experts help brands, businesses and community organizations to build scalable mobile application solutions that are aimed to be used on a daily basis by global consumers, multiple times in a day.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column pr-2">
            <h1>iOS Apps Development</h1>
            <div className="txt-justify">QuellXCode is a top iOS/ iPhone app development company that boasts a talented pool of expert iOS developers. We help our clients with custom applications that work perfectly on the entire iOS platform including the latest and the most recent iOS versions and iOS devices like iPhones, iPads, Apple Watches, Apple TV, etc. Hire iOS app developers with years of experience with the latest iOS app development technologies to build mobile apps with delightful UX.</div>
            <ul className="mt-4 flex flex-wrap">
              <li className="w-12">iPhone App Development</li>
              <li className="w-12">iPad App Development</li>
              <li className="w-12">Apple Watch Development</li>
              <li className="w-12">Apple TV Apps</li>
              <li className="w-12">iOS App with SiriKit</li>
              <li className="w-12">iOS app with MLkit</li>
              <li className="w-12">iOS App with ARkit</li>
              <li className="w-12">iOS App Testing</li>
            </ul>
            <Link to="/services/mobile/ios" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Learn More
            </Link>
          </div>
          <div className="column pl-2 txt-right">
            <img className="img" src={ios} alt="" />
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column pr-2">
            <img className="img" src={andriod} alt="" />
          </div>
          <div className="column pl-2">
            <h1>Android App Development</h1>
            <div className="txt-justify">We are a leading Android app development company offering bespoke Android mobile app solutions for global brands, enterprises and startups. Covering the entire spectrum on the android platform, we can help you craft niche Android apps for Smartphones, Tablets, Android Wear and Android TV. Hire Android app developers from us having expertise to build custom Android apps that work on all Android devices with the latest Android OS version compatibility.</div>
            <ul className="mt-4 flex flex-wrap">
              <li className="w-12">Android Smartphone Apps</li>
              <li className="w-12">Android TV Apps</li>
              <li className="w-12">Android Tablet Apps</li>
              <li className="w-12">Chromebook Apps</li>
              <li className="w-12">Android Wear Apps</li>
              <li className="w-12">Android Things Apps</li>
              <li className="w-12">Firebase Integration</li>
              <li className="w-12">Android Apps with Dialogflow</li>
            </ul>
            <Link to="/services/mobile/andriod" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Learn More
            </Link>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column pr-2">
            <h1>Cross platform App</h1>
            <div className="txt-justify">We are a leading Android app development company offering bespoke Android mobile app solutions for global brands, enterprises and startups. Covering the entire spectrum on the android platform, we can help you craft niche Android apps for Smartphones, Tablets, Android Wear and Android TV. Hire Android app developers from us having expertise to build custom Android apps that work on all Android devices with the latest Android OS version compatibility.</div>
            <ul className="mt-4 flex flex-wrap">
              <li className="w-12">Android Smartphone Apps</li>
              <li className="w-12">Android TV Apps</li>
              <li className="w-12">Android Tablet Apps</li>
              <li className="w-12">Chromebook Apps</li>
              <li className="w-12">Android Wear Apps</li>
              <li className="w-12">Android Things Apps</li>
              <li className="w-12">Firebase Integration</li>
              <li className="w-12">Android Apps with Dialogflow</li>
            </ul>
            <Link to="/services/mobile/crossplatform" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Learn More
            </Link>
          </div>
          <div className="column pl-2">
            <img className="img" src={andriod} alt="" />
          </div>
        </div>
      </section>

      <section className="px-6 py-6 container">
        <h1 className="font-bolder txt-center">We add Intelligence to your Apps</h1>
        <div className="my-4 txt-center">Refer a few use cases on how we use AI & ML technologies to empower your app to streamline operations and improve user experience.</div>
        <div className="grid has-gap-lg">
          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <h5 className="font-bolder">Recommendation Engine</h5>
              <div className="mt-2 mb-6 o-50 is-sm">
                <span className="clr border is-pill px-7px mr-7px">Media</span>
                <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                <span className="clr border is-pill px-7px mr-7px">Shopping</span>
              </div>
              <div className="txt-justify">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <h5 className="font-bolder">Sorted, Tagged & Categorized Photos</h5>
              <div className="mt-2 mb-6 o-50 is-sm">
                <span className="clr border is-pill px-7px mr-7px">Search</span>
                <span className="clr border is-pill px-7px mr-7px">Mobile</span>
                <span className="clr border is-pill px-7px mr-7px">Social</span>
              </div>
              <div className="txt-justify">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <h5 className="font-bolder">Chatbots for Customer Support</h5>
              <div className="mt-2 mb-6 o-50 is-sm">
                <span className="clr border is-pill px-7px mr-7px">Travel</span>
                <span className="clr border is-pill px-7px mr-7px">Banking</span>
                <span className="clr border is-pill px-7px mr-7px">Retail</span>
              </div>
              <div className="txt-justify">Intelligent bots programmed to automate multiple business processes and customer service with instant, precise information.</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <h5 className="font-bolder">Gamified Learning & Education</h5>
              <div className="mt-2 mb-6 o-50 is-sm">
                <span className="clr border is-pill px-7px mr-7px">Education</span>
              </div>
              <div className="txt-justify">ML-driven statistical model is built using students' answers which determines their memory cycle and ping them for revisions.</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <h5 className="font-bolder">Predicted Health Monitoring</h5>
              <div className="mt-2 mb-6 o-50 is-sm">
                <span className="clr border is-pill px-7px mr-7px">Healthcare</span>
              </div>
              <div className="txt-justify">ML based apps can help doctors to treat patients in advance and save lives by having hands-on predictions based on their patient data.</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <h5 className="font-bolder">Voice Powered Smart Homes</h5>
              <div className="mt-2 mb-6 o-50 is-sm">
                <span className="clr border is-pill px-7px mr-7px">Real Estate</span>
              </div>
              <div className="txt-justify">AI technology has led construction of automated voice homes, whereby functioning is controlled by an app with enhanced security.</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>
        </div>
      </section>

      <OurWork />

      <Clock />
    </>
  );
}
