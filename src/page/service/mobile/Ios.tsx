import React from "react";

import { Carousel } from "antd";
import BrandsWeWorkedWith from "../../../component/BrandsWeWorkedWith";
import OurWork from "../../../component/OurWork";
import RequestQuote from "../../../component/RequestQuote";
import Clock from "../../../component/Clock";

import Fluid from "../../../image/fluid.svg";

export interface props {
  className?: string;
}

Ios.defaultProps = {
  className: "",
} as props;

export default function Ios(props: props) {
  return (
    <>
      <div className="absolute left-0 top-0 right-0 event-none z--100 overflow-x-hidden h-100">
        <img src={Fluid} className="img absolute w-5" style={{ top: "512px" }} />
      </div>

      <section className="pl-10 pt-2 pr-2 h-min-100vh grid align-middle">
        <div className="column">
          <h1 className="title is-sm font-bolder">iOS App Development for iPhone, iPad & Apple Watch</h1>
          <div className="mb-6">As a leading iOS Mobile Application Development Company in India & USA, QuellXCode offers iOS app development services tailored-made to your business needs. We bring a range of iOS app solutions to various business verticals with our result-driven iOS apps for iPhones, iPads, and Apple watches.</div>
          <button className="btn is-sld is-pill is-primary px-4 py-2">Let's Talk</button>
        </div>
        <div className="column">
          <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/home-page-banner-img.svg" alt="" />
        </div>

        <div id="scrolldown" className="bg-white is-circle shadow icon absolute left-50 bottom-0 border border-light">
          <i className="icon ri-2x ri-arrow-down-line" />
        </div>
      </section>

      <section className="py-6 px-6 container">
        <div className="txt-center mb-2">WHY WE ARE RENOWNED AS A</div>
        <h1 className="font-bolder txt-center">Top iOS App Development Company</h1>
        {/* fix : align the shoter slides in the middle */}
        <Carousel nextArrow={<NextArrow />} prevArrow={<PrevArrow />} autoplay autoplaySpeed={5000} speed={1000} dots accessibility arrows draggable>
          <div className="grid flex align-middle">
            <div className="column txt-center">
              <img className="img inline" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/approch-slide-img-1.svg" alt="" />
            </div>
            <div className="column">
              <h5 className="font-bolder">Unparalleled iOS Expertise</h5>
              <div>We have delivered iOS projects that have rendered great ROI for our clients. As every new iOS version is a grand combination of innovation and creativity, we build iOS apps that create a niche for themselves and our prowess in developing personalized apps for all Apple devices makes us one of the most prominent iOS app development companies globally.</div>
            </div>
          </div>
          <div className="grid flex align-middle">
            <div className="column txt-center">
              <img className="img inline" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/approch-slide-img-2.svg" alt="" />
            </div>
            <div className="column">
              <h5 className="font-bolder">Quality Delivered in time</h5>
              <div>We put stringent quality checks at every level of our iOS app development process. Specially during development, we deploy a dedicated QA team on each project that ensures bug-free, quality iOS app development supported by pre-release system check that keeps control over your dedicated timeline.</div>
            </div>
          </div>
          <div className="grid flex align-middle">
            <div className="column txt-center">
              <img className="img inline" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/approch-slide-img-3.svg" alt="" />
            </div>
            <div className="column">
              <h5 className="font-bolder">Bespoke iOS Solutions</h5>
              <div>We help you scale your idea in a way that you can achieve your goals one milestone at a time. Instead of big investments into a directionless plan, our budget focused strategy for any idea whether you’re a startup, a business or an enterprise takes you one step at a time.</div>
            </div>
          </div>
          <div className="grid flex align-middle">
            <div className="column txt-center">
              <img className="img inline" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/approch-slide-img-4.svg" alt="" />
            </div>
            <div className="column">
              <h5 className="font-bolder">Experienced iOS Developers for Hire</h5>
              <div>Our team is well-versed with all necessary updates and trends in technologies. The experience and expertise of our iOS app developers can ensure top-notch iOS application development with various languages like Swift, Objective C, Xcode, HTML5, React and Javascript.</div>
            </div>
          </div>
        </Carousel>
      </section>

      <section className="py-6 px-6 container bg-light">
        <div className="txt-center">WHAT WE DO</div>
        <h1 className="font-bolder txt-center">Best iOS App Development Services</h1>
        <div className="grid has-gap-lg">
          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Prototyping, Wireframes & Mockups</h5>
              <div className="txt-justify">We design wireframes and present options to you. The coding cycle begins once you select from the shortlisted wireframe designs.</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>
          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Quality Coding & Debugging</h5>
              <div className="txt-justify">We follow agile development for high-quality coding cycle along with professional software testing for bug-free & fast release.</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>
          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">AI & ML Capabilities in iOS Apps</h5>
              <div className="txt-justify">We hold experience to add intelligence to your iOS apps with integration of AI & ML technologies using Core ML framework.</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>
          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Third-party API Integration</h5>
              <div className="txt-justify">We provide methods for integrating third-party APIs with our iOS development allowing other programs to access the data easily.</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>
          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Cloud Development & Integration</h5>
              <div className="txt-justify">We help you connect various applications and systems along cloud integration services to allow users to easily access the data.</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>
          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">App Upgrade & Maintenance</h5>
              <div className="txt-justify">We offer contract to upgrade your apps along with maintenance to ensure full compatibility with the latest OS version & features.</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-6 container">
        <div className="txt-center">INDIANIC SERVICES</div>
        <h1 className="font-bolder txt-center">Looking at a wider Spectrum</h1>
        <div className="grid has-gap-lg">
          <div className="column w-8">
            <div className="p-10 is-round-sm border-light h-100 relative shadow-none txt-center">
              <img className="img" style={{ height: "260px" }} src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/services-landing-img-1.svg" alt="" />
              <h5 className="font-bolder my-10 mx-2">Mobile Application Development</h5>
              <div>Developing iOS and Android apps for smartphones and tablets with great attention to design.</div>
            </div>
          </div>
          <div className="column w-8">
            <div className="p-10 is-round-sm border-light h-100 relative shadow-none txt-center">
              <img className="img" style={{ height: "260px" }} src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/services-landing-img-2.svg" alt="" />
              <h5 className="font-bolder my-10 mx-2">Custom Web Development</h5>
              <div>Developing responsive websites with complete content control and scalability.</div>
            </div>
          </div>
          <div className="column w-8">
            <div className="p-10 is-round-sm border-light h-100 relative shadow-none txt-center">
              <img className="img" style={{ height: "260px" }} src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/services-landing-img-3.svg" alt="" />
              <h5 className="font-bolder my-10 mx-2">Mobile Games Development</h5>
              <div>Developing engaging 2D and 3D games on iOS and Android platforms that generate revenue.</div>
            </div>
          </div>
          <div className="column w-8">
            <div className="p-10 is-round-sm border-light h-100 relative shadow-none txt-center">
              <img className="img" style={{ height: "260px" }} src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/services-landing-img-4.svg" alt="" />
              <h5 className="font-bolder my-10 mx-2">Digital Marketing Services</h5>
              <div>Entire online marketing stack with focus on content, creative, social media and digital.</div>
            </div>
          </div>
          <div className="column w-8">
            <div className="p-10 is-round-sm border-light h-100 relative shadow-none txt-center">
              <img className="img" style={{ height: "260px" }} src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/services-landing-img-5.svg" alt="" />
              <h5 className="font-bolder my-10 mx-2">UI Design / Creative Services</h5>
              <div>Designing stunning user interfaces and designs that gives unique identity and experience.</div>
            </div>
          </div>
          <div className="column w-8">
            <div className="p-10 is-round-sm border-light h-100 relative shadow-none txt-center">
              <img className="img" style={{ height: "260px" }} src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/services-landing-img-6.svg" alt="" />
              <h5 className="font-bolder my-10 mx-2">Cloud Infrastructure Management</h5>
              <div>AWS certified cloud architects who can set up and manage entire cloud infrastructure.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 mb-6 container grid justify-center align-middle has-gap-0">
        <div className="column">
          <div className="txt-center is-round-left px-8 py-4 relative clr-white" style={{ backgroundImage: "url('https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2018/11/img_enterprice_solution.jpg')" }}>
            <h2 className="font-bolder">Enterprise Solutions</h2>
            <div>Elevating enterprise experience by developing innovative and impactful solutions for web, mobile and internet with rich user experience.</div>
            <div className="my-4">
              <img className="img is-round shadow" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2018/11/enterprice-solution.webp" alt="" />
            </div>
            <ul className="list is-inline flex flex-wrap txt-left mb-0">
              <li className="w-12 mr-0 flex align-middle mb-2">
                <i className="icon ri-2x ri-checkbox-circle-line mr-7px" /> Mobile Strategy
              </li>
              <li className="w-12 mr-0 flex align-middle mb-2">
                <i className="icon ri-2x ri-checkbox-circle-line mr-7px" /> Enterprise Mobility
              </li>
              <li className="w-12 mr-0 flex align-middle mb-2">
                <i className="icon ri-2x ri-checkbox-circle-line mr-7px" /> ERP System
              </li>
              <li className="w-12 mr-0 flex align-middle mb-2">
                <i className="icon ri-2x ri-checkbox-circle-line mr-7px" /> Content Management
              </li>
              <li className="w-12 mr-0 flex align-middle">
                <i className="icon ri-2x ri-checkbox-circle-line mr-7px" /> Technical Consulting
              </li>
              <li className="w-12 mr-0 flex align-middle">
                <i className="icon ri-2x ri-checkbox-circle-line mr-7px" /> Mobile App Platforms
              </li>
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="txt-center is-round-sm p-8 relative clr-white" style={{ backgroundImage: "url('https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/startup-solution-bg.jpg')" }}>
            <h1 className="font-bolder">Startup Solutions</h1>
            <div>Elevating enterprise experience by developing innovative and impactful solutions for web, mobile and internet with rich user experience.</div>
            <div className="my-6">
              <img className="img is-round shadow" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2018/11/startup-solution.webp" alt="" />
            </div>
            <ul className="list is-inline flex flex-wrap txt-left mb-0">
              <li className="w-12 mr-0 flex align-middle mb-2">
                <i className="icon ri-2x ri-checkbox-circle-line mr-7px" /> Idea to Prototype
              </li>
              <li className="w-12 mr-0 flex align-middle mb-2">
                <i className="icon ri-2x ri-checkbox-circle-line mr-7px" /> MVP Launch
              </li>
              <li className="w-12 mr-0 flex align-middle mb-2">
                <i className="icon ri-2x ri-checkbox-circle-line mr-7px" /> Development Service
              </li>
              <li className="w-12 mr-0 flex align-middle mb-2">
                <i className="icon ri-2x ri-checkbox-circle-line mr-7px" /> Create launch machine
              </li>
              <li className="w-12 mr-0 flex align-middle">
                <i className="icon ri-2x ri-checkbox-circle-line mr-7px" /> Support and Maintenance
              </li>
              <li className="w-12 mr-0 flex align-middle">
                <i className="icon ri-2x ri-checkbox-circle-line mr-7px" /> Equity Partnerships
              </li>
            </ul>
          </div>
        </div>
      </section>

      <BrandsWeWorkedWith className="py-6 bg-light" />

      <OurWork />

      <RequestQuote />

      <Clock />
    </>
  );
}

function NextArrow(props) {
  return <div className={`${props.className}`} style={{ ...props.style }} onClick={props.onClick} />;
}
function PrevArrow(props) {
  return <div className={`${props.className} clr-white`} style={{ ...props.style }} onClick={props.onClick} />;
}
