import React from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";

import sideimage from "../image/contactussideimage.svg";

import Fluid from "../image/fluid.svg";

import requestquotebg from "../image/requestquotebg.jpg";
import Clock from "../component/Clock";

export default function ContactUs() {
  const [popup, setPopup] = React.useState<boolean>(true);
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: "AIzaSyB1ALoYpIeQLQgbX0zuGmFM8jdFZUxRPjo", libraries: [] });

  if (loadError) return "error loading map";
  if (!isLoaded) return "loading map..";

  return (
    <>
      <div className="absolute left-0 top-0 right-0 event-none z--100 overflow-x-hidden h-100">
        <img src={Fluid} className="img absolute w-5" style={{ top: "512px" }} />
        <img src={Fluid} className="img absolute w-5 flip-xy" style={{ top: "-227px", right: "-51px" }} />
      </div>

      <section className="pt-10 mb-6 px-6 w-19">
        <h1 className="pt-10 title is-sm font-bolder">Go ahead. Say hello.</h1>
        <div>We collaborate with ambitious brands and people. We’d love to build something great together.</div>
      </section>

      <section className="container grid has-gap-lg align-middle">
        <div className="column">
          <img className="img" src={sideimage} alt="" />
        </div>
        <div className="column w-10">
          <form action="" className="p-4 bg-light is-round shadow-sm">
            <div className="grid my-2">
              <label className="column w-12 block control">
                <span className="label block is-sm my-4">Name</span>
                <input type="test" className="input is-min is-primary" placeholder=" " />
              </label>

              <label className="column w-12 block control">
                <span className="label block is-sm my-4">Email</span>
                <input type="test" className="input is-min is-primary" placeholder=" " />
              </label>
            </div>

            <div className="grid my-2">
              <label className="column w-12">
                <span className="block is-sm my-4">Mobile phone</span>
                <span className="group">
                  <select className="input is-min is-primary w-auto">
                    <option hidden>+00</option>
                    <option>+92</option>
                    <option>+912</option>
                    <option>+929</option>
                    <option>+9258</option>
                  </select>
                  <label className="control has-floating-label">
                    <input type="test" className="input is-min is-primary" placeholder=" " /> <span className="label">301 2345678</span>
                  </label>
                </span>
              </label>
              <label className="column w-12 control has-floating-label">
                <span className="block is-sm my-4">Select a Service</span>
                <select className="input is-min is-primary">
                  <option hidden>Select</option>
                  <option>Mobile Application Development</option>
                  <option>Web Development</option>
                  <option>Customized Open Source Product</option>
                  <option>Consulting - Cloud and DevOps</option>
                  <option>UI / UX Design</option>
                  <option>IOT / AI / ML or Wearable</option>
                  <option>Mobile Games Development</option>
                  <option>QA Service</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            <div className="grid my-2">
              <label className="column w-12 control has-floating-label">
                <span className="block is-sm my-4">Budget</span>
                <select className="input is-min is-primary">
                  <option hidden>Select</option>
                  <option>&lt;$5K </option>
                  <option>$10K+ </option>
                  <option>$25k+ </option>
                  <option>$50k+ </option>
                  <option>$100k+ </option>
                  <option>Not sure </option>
                </select>
              </label>

              <label className="column w-12 control has-floating-label">
                <span className="block is-sm my-4">When to start</span>
                <select className="input is-min is-primary">
                  <option hidden>Select</option>
                  <option>Right Now</option>
                  <option>In Few week</option>
                  <option>Not Sure</option>
                </select>
              </label>
            </div>

            <div className="grid my-2">
              <div className="column w-24 is-sm">Brief about the project</div>
              <textarea className="input" rows={3} />
            </div>

            <div className="grid my-2">
              <div className="column w-24 is-sm">Have a file to share?</div>
              <div className="column w-24 group">
                <label className="control w-24">
                  <input className="file" id="file" type="file" />
                  <span className="label btn is-sld is-primary is-block">Select or Drop your file here</span>
                </label>
                <span className="column w-24 is-sm">Only Document, Image or ZIP file. Max size 8MB</span>
              </div>
            </div>

            <div className="flex justify-between align-bottom">
              <button className="btn is-sld is-primary is-pill py-2 px-6">Get Started</button>
              <div className="font-bolder is-sm">100% Secure. Zero Spam</div>
            </div>
          </form>
          <div className="is-sm my-4">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
        </div>
      </section>

      <section className="conatiner bg-primary img-bg mt-4" style={{ backgroundImage: `url(${requestquotebg})` }}>
        <GoogleMap mapContainerStyle={{ width: "100%", height: "50vh" }} center={{ lat: 33.5729464377952, lng: 73.14732670783997 }} options={{ disableDefault: true }} zoom={19}>
          <Marker position={{ lat: 33.5729464377952, lng: 73.14732670783997 }} onClick={() => setPopup(!popup)}>
            {popup && (
              <InfoWindow>
                <div>QuellxCode, Hall 9-A, Syed Arcade, Main PWD Road, Islamabad</div>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      </section>

      <Clock />
    </>
  );
}
