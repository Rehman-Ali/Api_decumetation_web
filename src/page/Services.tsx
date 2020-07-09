import React from "react";

import { Link } from "react-router-dom";

import artificialintelligence from "../image/service/artificialintelligence.svg";
import branding from "../image/service/branding.svg";
import development from "../image/service/development.svg";
import gamedevelopment from "../image/service/gamedevelopment.svg";
import iot from "../image/service/iot.svg";
import marketing from "../image/service/marketing.svg";
import mobile from "../image/service/mobile.svg";
import uxui from "../image/service/uxui.svg";
import website from "../image/service/website.svg";

import tds from "../image/tech/tds.png";
import maya from "../image/tech/maya.png";
import modo from "../image/tech/modo.png";

import Clock from "../component/Clock";
import Fluid from "../image/fluid.svg";

export interface props {
  className?: string;
}

Services.defaultProps = {
  className: "",
} as props;

export default function Services(props: props) {
  return (
    <>
      <div className="absolute left-0 top-0 right-0 event-none z--100 overflow-x-hidden h-100">
        <img src={Fluid} className="img absolute w-5" style={{ top: "512px" }} />
        <img src={Fluid} className="img absolute w-5 flip-xy" style={{ top: "-227px", right: "-51px" }} />
      </div>

      <section className="txt-center px-6 container h-min-100vh flex align-middle justify-center">
        <div className="mt-6">
          <div>What we build is inavitable out of this world</div>
          <h1 className="title is-sm font-bolder">Web and Mobile Software Development Services</h1>
          <div className="is-lg">A successful offshore software application development company since 1997, providing a full range of website and mobile app development, games development, IoT, AR-VR and other IT services and solutions globally.</div>
          <div id="scrolldown" className="bg-white is-circle shadow icon absolute left-50 bottom-0 border border-light">
            <i className="icon clr-body ri-2x ri-arrow-down-line" />
          </div>
        </div>
      </section>

      <section className="bg-body">
        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column pr-2">
            <img className="img" src={website} alt="" />
          </div>
          <div className="column pl-2">
            <h1>Web Development</h1>
            <div className="txt-justify">Being a leading website application development company, our certified developers have unparalleled expertise in working with the latest web technologies to deliver custom web solutions. Whether creating a web presence for your company, an information hub for your business or empowering your apps/IoT devices through backend- QuellXCode does it all by covering a wide spectrum of web solutions and framework.</div>
            <div>
              <a href="https://angular.io" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-angular-js2x.svg" alt="ionic" />
                </i>
              </a>
              <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-react-native2x-1.svg" alt="ionic" />
                </i>
              </a>
              <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-typescript2x-2.svg" alt="ionic" />
                </i>
              </a>
              <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-vue2x.svg" alt="ionic" />
                </i>
              </a>

              <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-html52x.svg" alt="ionic" />
                </i>
              </a>
            </div>
            <Link className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">Learn More</Link>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column pr-2">
            <h1>Mobile Apps Development</h1>
            <div className="txt-justify">From B2B or B2E apps for enterprises, small businesses, and startups, we have a proven track record of offering high-impact, result driven and engaging mobile application development services. QuellXCode is a top mobile app development company that is renowned for delivering native Android app development, native iOS app development, hybrid and cross-platform app development services to build next-gen mobile applications using the latest technology stack.</div>
            <div>
              <a href="https://www.apple.com/ios" target="_blank" rel="noopener noreferrer" className="btn clr-inherit is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x ri-apple-line" />
              </a>
              <a href="https://www.android.com" target="_blank" rel="noopener noreferrer" className="btn clr-inherit is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x ri-android-fill" />
              </a>
              <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer" className="btn clr-inherit is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x ri-flutter-fill" />
              </a>
              <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer" className="btn clr-inherit is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x ri-reactjs-fill" />
              </a>
              <a href="https://ionicframework.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-ionic2x.svg" alt="ionic" />
                </i>
              </a>
              <a href="https://developer.apple.com/swift" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-swift2x.svg" alt="swift" />
                </i>
              </a>
              <a href="https://kotlinlang.org" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-kotlin2x.svg" alt="kotlin" />
                </i>
              </a>
              <a href="https://en.wikipedia.org/wiki/Objective-C" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-objectivec2x.svg" alt="objectivec" />
                </i>
              </a>

              <a href="https://dotnet.microsoft.com/apps/xamarin" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-xamarin2x.svg" alt="xamarin" />
                </i>
              </a>
            </div>
            <Link to="/services/mobile" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Learn More
            </Link>
          </div>
          <div className="column pl-2 txt-right">
            <img className="img" src={mobile} alt="" />
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column pr-2">
            <img className="img" src={uxui} alt="" />
          </div>
          <div className="column pl-2">
            <h1>UI/UX Design</h1>
            <div className="txt-justify">UI/UX design is the catalyst behind the success of any web or mobile app. QuellXCode is a leading web design and mobile app design agency with a knack of turning great ideas into meaningful interactions. Starting from conceptualization, information architecture, visual identity, and UX design; hire UI/UX designers from QuellXCode for timely delivery of appealing websites and mobile apps resulting maximum user engagement.</div>
            <div>
              <a href="https://www.sketch.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-sketch.svg" alt="sketch" />
                </i>
              </a>
              <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-photoshop.svg" alt="photoshop" />
                </i>
              </a>
              <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-adobe-illustrator.svg" alt="adobeillustrator" />
                </i>
              </a>
              <a href="https://www.invisionapp.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-invision.svg" alt="invision" />
                </i>
              </a>
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-figma.svg" alt="figma" />
                </i>
              </a>
              <a href="https://www.adobe.com/products/xd.html" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-adobe-xd.svg" alt="adobexd" />
                </i>
              </a>
              <a href="https://www.axure.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-axure.svg" alt="axure" />
                </i>
              </a>
            </div>
            <Link className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">Learn More</Link>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column pr-2">
            <h1>Branding</h1>
            <div className="txt-justify">UI/UX design is the catalyst behind the success of any web or mobile app. QuellXCode is a leading web design and mobile app design agency with a knack of turning great ideas into meaningful interactions. Starting from conceptualization, information architecture, visual identity, and UX design; hire UI/UX designers from QuellXCode for timely delivery of appealing websites and mobile apps resulting maximum user engagement.</div>
            <div>
              <a href="https://www.behance.net/quellxcode" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon clr-body ri-behance-fill inline-flex align-middle ri-2x" />
              </a>
              <a href="https://www.facebook.com/QuellxCode" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon clr-body ri-facebook-fill inline-flex align-middle ri-2x" />
              </a>
              <a href="https://www.instagram.com/quellxcode" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon clr-body ri-instagram-fill inline-flex align-middle ri-2x" />
              </a>
            </div>
            <Link className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">Learn More</Link>
          </div>
          <div className="column pl-2 txt-right">
            <img className="img" src={branding} alt="" />
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column pr-2">
            <img className="img" src={marketing} alt="" />
          </div>
          <div className="column pl-2">
            <h1>Marketing</h1>
            <div className="txt-justify">UI/UX design is the catalyst behind the success of any web or mobile app. QuellXCode is a leading web design and mobile app design agency with a knack of turning great ideas into meaningful interactions. Starting from conceptualization, information architecture, visual identity, and UX design; hire UI/UX designers from QuellXCode for timely delivery of appealing websites and mobile apps resulting maximum user engagement.</div>
            <Link className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">Learn More</Link>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column pr-2">
            <h1>Hire Dedicated Developers</h1>
            <div className="txt-justify">Create your own software development team on your time and terms by handpicking the best developers from QuellXCode. We offer flexible engagement models to hire developers on a short term, long term or permanent basis to ideally suit your business needs. Scale up your development team within 48 hours with ready-to-kick-off experts. We follow a consultative approach to prepare a roadmap that describes the skill set and experience you need based on your project idea.</div>
            <Link className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">Learn More</Link>
          </div>
          <div className="column pl-2 txt-right">
            <img className="img" src={development} alt="" />
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column pr-2">
            <img className="img" src={gamedevelopment} alt="" />
          </div>
          <div className="column pl-2">
            <h1>Game Development</h1>
            <div className="txt-justify">Creating games is the most energetic part of our business. Our skilled mobile game development team can handle projects from scratch or from any development stage. We’ve been successfully involved in the delivery of highly interactive and exciting gaming experience on Mobile, Console, and Virtual Reality platforms. We turn your idea into an addictive Android or iOS game application while making sure we create out of the box gaming solutions.</div>
            <div>
              <a href="https://unity.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-unity-3d.svg" alt="unity" />
                </i>
              </a>
              <a href="https://www.unrealengine.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src={"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA1MCA1MCIgdmVyc2lvbj0iMS4xIj48cGF0aCBkPSJNMjUgMkMxMi4zMDkgMiAyIDEyLjMwOSAyIDI1czEwLjMwOSAyMyAyMyAyMyAyMy0xMC4zMDkgMjMtMjNTMzcuNjkxIDIgMjUgMnptMCAyYzExLjYxIDAgMjEgOS4zOSAyMSAyMXMtOS4zOSAyMS0yMSAyMVM0IDM2LjYxIDQgMjUgMTMuMzkgNCAyNSA0em0tMS4zNiA2LjQ1Yy0uMDc0IDAtLjE0OC4wMS0uMjE4LjAyNy0zLjk1My45NDEtOC4wMjcgMy43MS0xMS4wOSA3LjEzMi0zLjA1OSAzLjQyNi01LjE2OCA3LjUzMi00LjcgMTEuMzcxLjA1Ni40MjYuMzc2Ljc3NC44MDIuODYuNDIxLjA4Mi44NTEtLjExMyAxLjA2Ni0uNDkyIDEuOTUzLTMuNDUzIDMuNTctNS4zNjQgNC43MjMtNi4zOCAxLjE1Mi0xLjAxOSAxLjg5NC0xLjEwOSAxLjgzNi0xLjEwOS4wNzQgMCAuMDkzLjAwNC4xMTMuMDA0LS4wMjQtLjAyMy4wMTUtLjAwNC4wMTUuMjQ2djEwLjQ4NWMwIC4xMiAwIC4wOS4wMDQuMDc4LS4xMjguMDMxLS41NS4wMTYtLjk1My0uMDQ3YTEuMDA2IDEuMDA2IDAgMCAwLS45OTIuNDU3Ljk5NC45OTQgMCAwIDAgLjAxNiAxLjA5YzMuNDg0IDUuMTk1IDExLjEwNSA1LjM3NSAxMS4xMDUgNS4zNzVhLjk4Ljk4IDAgMCAwIC43NzgtLjMybDIuNTgyLTIuODA1IDIuMzgyIDIuMDM5Yy4zNC4yODkuODI1LjMyIDEuMTk2LjA3OCAyLjUwNC0xLjYyMSA0LjUzOS0zLjc2NiA1Ljk2OC01LjYyMWEyMi4yNjIgMjIuMjYyIDAgMCAwIDEuNjc2LTIuNDc3Yy4xOTYtLjM0Ny4zNTItLjY1Ni40NjktLjkzLjExNy0uMjc3LjIyMy0uNDUyLjIyMy0uODgyYS45OTcuOTk3IDAgMCAwLTEuNzM4LS42NzJjLTEuMTAyIDEuMjExLTIuMDk0IDEuOTAyLTIuODQgMi4yOS0uNzQ3LjM4Mi0xLjM2LjQ0NC0xLjIzOS40NDQtLjA5IDAtLjExNy0uMDExLS4xOTEtLjAydi0xMi4xYzAgLjE5LjA3OC0uMjQzLjM0LS42OTJhMTkuNjYgMTkuNjYgMCAwIDEgMS4wNy0xLjU4MmMuODM2LTEuMTM3IDEuNzk3LTIuMyAyLjI4NS0yLjkyNmExLjAwMSAxLjAwMSAwIDAgMC0xLjAzNS0xLjU4NmMtMy4yMTUuODQ0LTUuNDY5IDIuMDc0LTYuOTMgMy4xMTctMS4wMzEuNzM1LTEuMjQyIDEuMDUxLTEuNTM5IDEuMzgtLjA3OC0uMDM2LS4wNjItLjA0NC0uMTUyLS4wNzUtLjU0LS4xOTEtMS4zMjQtLjM3MS0yLjM1Ni0uMzcxLS40MTggMC0uNzg5LjI2Mi0uOTM3LjY1MmExIDEgMCAwIDAgLjI4OSAxLjEwNmMuNTg2LjUwNCAxLjI5NyAxLjQwMiAxLjI5NyAyLjEzNnYxMC44NDRjLS4xOTUuMTMtLjI5LjIwNy0uNjYuNDE0LS42MDIuMzM2LTEuMzkuNjEtMS41NzUuNjEtLjQ1MyAwLS43NzctLjExLS45MTQtLjItLjEzMi0uMDktLjEyOC0uMDc0LS4xMjgtLjIxNHYtMTMuNjFhLjk5Ni45OTYgMCAwIDAtMS41MTItLjg2Yy0uMDc4LS4xOTQtLjE4OC0uNjY3LS4xODgtMS40NjQgMC0uMzc1LjQ3My0xLjIzIDEuMDctMS44ODcuNTk4LS42NTIgMS4yMDQtMS4xMTcgMS4yMDQtMS4xMTcuMzQzLS4yNjYuNDgtLjcxNS4zNC0xLjEyNWExLjAwNiAxLjAwNiAwIDAgMC0uOTYxLS42NzJ6bS0zLjMwOCAzLjU4NWMtLjE1Mi4zODctLjM0NC43NTQtLjM0NCAxLjIxNSAwIC45NTcuMTA2IDEuNjYuMzQgMi4yMy4yMzguNTcuNjg4IDEuMDMyIDEuMTk1IDEuMi4wNjcuMDIzLjEwMi0uMDE2LjE2NS0uMDA0djEyLjUwOGMwIC43NjUuNDMzIDEuNDg4IDEuMDE5IDEuODc4LjU5LjM5MSAxLjI4NS41MzYgMi4wMjMuNTM2IDEuMDA4IDAgMS44MzYtLjQ2NSAyLjU1MS0uODY0LjcxNS0uMzk4IDEuMjY2LS43OTcgMS4yNjYtLjc5Ny4yNjItLjE5LjQxOC0uNDkyLjQxOC0uODEyVjE5LjczYzAtLjU0My0uMjU0LS45NC0uNDM0LTEuMzgyLjQyNi4yMTguOTUuMTAxIDEuMjQ2LS4yNzggMCAwIC40NzMtLjYzMyAxLjc1LTEuNTM5LjczOS0uNTI3IDEuODItMS4xMSAzLjEwMi0xLjY3Mi0uMDc4LjEwMi0uMTI1LjE1My0uMi4yNTQtLjQ0LjYwMi0uODU5IDEuMjAzLTEuMTc5IDEuNzU4LS4zMjQuNTU1LS42MTcuOTY5LS42MTcgMS43djEyLjQ0YzAgLjM1Mi4xMjkuNzM1LjM0NyAxLjAwNS4yMi4yNjUuNDg5LjQxNC43MjMuNTA0LjQ2NS4xOC44NTIuMTcxIDEuMTIxLjE3MS4zNiAwIC44ODMtLjI0NiAxLjM1Ni0uNDIxLTEuMTYgMS40MTQtMi42NTMgMi44OTgtNC4zOTkgNC4xMzZsLTIuNDg4LTIuMTI5YS45OTcuOTk3IDAgMCAwLTEuMzg3LjA4MmwtMi44NiAzLjExYy0uNTg1LS4wNDctNC44NzQtLjU5LTcuOC0zLjIuMTgtLjEwOS4zNzUtLjE0NC41Mi0uMzI4LjI5My0uMzcuNDIyLS44NTkuNDIyLTEuMzQ3VjIyLjEwOWMwLS41ODItLjE0MS0xLjE4LS41Ni0xLjYyNS0uNDEzLS40NDktMS4wMjMtLjYyNS0xLjU3LS42MjVoLS4wMDNjLS43OTcgMC0xLjc3NC4zOTEtMy4xNTMgMS42MS0uNzMuNjQtMS41NjYgMS41Ny0yLjQ3NiAyLjc4MS43MzQtMS43OSAxLjg5NC0zLjYyNSAzLjM5OC01LjMwNSAxLjg2Ny0yLjA4NiA0LjE3Ni0zLjY4IDYuNTA4LTQuOTF6IiBpZD0ic3VyZmFjZTEiLz48bWV0YWRhdGE+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpyZGZzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxyZGY6RGVzY3JpcHRpb24gYWJvdXQ9Imh0dHBzOi8vaWNvbnNjb3V0LmNvbS9sZWdhbCNsaWNlbnNlcyIgZGM6dGl0bGU9InVucmVhbCxlbmdpbmUiIGRjOmRlc2NyaXB0aW9uPSJ1bnJlYWwsZW5naW5lIiBkYzpwdWJsaXNoZXI9Ikljb25zY291dCIgZGM6ZGF0ZT0iMjAxNy0xMi0wOSIgZGM6Zm9ybWF0PSJpbWFnZS9zdmcreG1sIiBkYzpsYW5ndWFnZT0iZW4iPjxkYzpjcmVhdG9yPjxyZGY6QmFnPjxyZGY6bGk+SWNvbnM4PC9yZGY6bGk+PC9yZGY6QmFnPjwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC9tZXRhZGF0YT48L3N2Zz4="} alt="buildbox" />
                </i>
              </a>
              <a href="https://www.autodesk.com/products/3ds-max" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src={tds} alt="buildbox" />
                </i>
              </a>
              <a href="https://www.autodesk.com/products/maya" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src={maya} alt="buildbox" />
                </i>
              </a>
              <a href="https://www.foundry.com/products/modo" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src={modo} alt="buildbox" />
                </i>
              </a>
            </div>
            <Link className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">Learn More</Link>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column pr-2">
            <h1>Artificial Intelligence And Machine Learning</h1>
            <div className="txt-justify">Create your own software development team on your time and terms by handpicking the best developers from QuellXCode. We offer flexible engagement models to hire developers on a short term, long term or permanent basis to ideally suit your business needs. Scale up your development team within 48 hours with ready-to-kick-off experts. We follow a consultative approach to prepare a roadmap that describes the skill set and experience you need based on your project idea.</div>
            <div>
              <a href="flash" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-flash.svg" alt="flash" />
                </i>
              </a>
              <a href="unity" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-unity-3d.svg" alt="unity" />
                </i>
              </a>
              <a href="buildbox" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-buildbox.svg" alt="buildbox" />
                </i>
              </a>
            </div>
            <Link className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">Learn More</Link>
          </div>
          <div className="column pl-2 txt-right">
            <img className="img" src={artificialintelligence} alt="" />
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column pr-2">
            <img className="img" src={iot} alt="" />
          </div>
          <div className="column pl-2">
            <h1>Internet Of Things</h1>
            <div className="txt-justify">Creating games is the most energetic part of our business. Our skilled mobile game development team can handle projects from scratch or from any development stage. We’ve been successfully involved in the delivery of highly interactive and exciting gaming experience on Mobile, Console, and Virtual Reality platforms. We turn your idea into an addictive Android or iOS game application while making sure we create out of the box gaming solutions.</div>
            <div>
              <a href="flash" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-flash.svg" alt="flash" />
                </i>
              </a>
              <a href="unity" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-unity-3d.svg" alt="unity" />
                </i>
              </a>
              <a href="buildbox" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-technology-buildbox.svg" alt="buildbox" />
                </i>
              </a>
            </div>
            <Link className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">Learn More</Link>
          </div>
        </div>
      </section>
      <Clock />
    </>
  );
}
