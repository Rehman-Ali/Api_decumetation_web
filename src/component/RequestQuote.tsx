import React from "react";

import { Link } from "react-router-dom";

import requestquotebg from "../image/requestquotebg.jpg";

export default function RequestQuote() {
  return (
    <section className="px-6 py-6 container img-bg clr-white" style={{ backgroundImage: `url(${requestquotebg})` }}>
      <h1 className="font-bolder">Request a Quote</h1>
      <div className="my-4 w-10 is-lg">Share a brief about your project and get a guaranteed response within 24 hours.</div>
      <Link to="/contactus" className="btn is-sld is-primary is-pill font-bold mr-1rem inline-flex move-icon" style={{ padding: "10px 30px" }}>
        Let's Start
        <i className="icon ri-arrow-right-line ml-7px" />
      </Link>
    </section>
  );
}
