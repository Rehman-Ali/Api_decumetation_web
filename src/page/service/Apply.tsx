import React from "react";

import Fluid from "../../image/fluid.svg";
import home from "../../image/apply.svg";

export interface props {
  className?: string;
}

Apply.defaultProps = {
  className: "",
} as props;

export default function Apply(props: props) {
  return (
    <>
      <div className="absolute left-0 top-0 right-0 event-none z--100 overflow-x-hidden h-100">
        <img src={Fluid} className="img absolute w-5" style={{ top: "512px" }} />
      </div>

      <section className="pr-10 pr-2 h-min-100vh grid">
        <div className="column h-100vh flex align-middle">
          <img className="img w-24" src={home} alt="" />
        </div>
        <div className="column pt-10">
          <h1 className="title is-sm font-bolder">ReactJs Developer</h1>
          <div className="mb-2">
            <h5>Requirement</h5>
            <ul>
              <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.</li>
              <li>Experience with Core web fundamentals: HTML, JavaScript, and CSS like Sass or LESS</li>
              <li>Ability to understand business requirements and translate them into technical requirements</li>
              <li>Experience with common front-end development tools such as Babel, Webpack, NPM, etc.</li>
              <li>Familiarity with code versioning tools such as Git, SVN, and Mercurial</li>
              <li>Knowledge of modern authorisation mechanisms, such as JSON Web Token</li>
              <li>Familiarity with modern front-end build pipelines and tools</li>
              <li>Experience with popular ReactJS workflows (such as Flux or Redux)</li>
              <li>Thorough understanding of ReactJS and its core principles.</li>
              <li>Familiarity with newer specifications of EcmaScript</li>
              <li>Familiarity with NextJs framework.</li>
              <li>Familiarity with RESTful APIs</li>
            </ul>
          </div>

          <div className="mb-2">
            <h5>Skills</h5>
            <ul>
              <li>In Page</li>
              <li>MsOffice</li>
              <li>Photoshop</li>
              <li>Windows Installation</li>
              <li>Working hours : 10am- 7pm</li>
            </ul>
          </div>

          <div className="mb-2">
            <h5>Job Types</h5>
            <ul>
              <li>Full-time</li>
              <li>Contract</li>
            </ul>
          </div>

          <div className="mb-2">
            <h5>Experience</h5>
            <ul>
              <li>data entry: 1 year (Required)</li>
            </ul>
          </div>

          <div className="mb-2">
            <h5>Education</h5>
            <ul>
              <li>Intermediate (Required)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container grid has-gap-lg align-middle">
        <h1>Apply Now</h1>
        <form action="" className="w-24 p-4 bg-light is-round shadow-sm">
          <div className="grid">
            <label className="column w-12 block control">
              <span className="label block is-sm mb-4">Name</span>
              <input type="test" className="input is-min is-primary" placeholder=" " />
            </label>

            <label className="column w-12 block control">
              <span className="label block is-sm mb-4">Email</span>
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
            <button className="btn is-sld is-primary is-pill is-lg">Get Started</button>
            <div className="font-bolder is-sm">100% Secure. Zero Spam</div>
          </div>
        </form>
        <div className="is-sm my-4">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
      </section>
    </>
  );
}
