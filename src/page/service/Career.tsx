import React from "react";
import { Link } from "react-router-dom";

import Fluid from "../../image/fluid.svg";
import mailus from "../../image/mailus.svg";
import Clock from "../../component/Clock";

export interface props {
  className?: string;
}

Career.defaultProps = {
  className: "",
} as props;

export default function Career(porps: props) {
  return (
    <>
      <div className="absolute left-0 top-0 right-0 event-none z--100 overflow-x-hidden h-100">
        <img src={Fluid} className="img absolute w-5" style={{ top: "512px" }} />
        <img src={Fluid} className="img absolute w-5 flip-xy" style={{ top: "-227px", right: "-51px" }} />
      </div>
      <section className="txt-center px-6 container h-min-100vh flex align-middle justify-center">
        <div className="mt-6">
          <h1 className="title is-sm font-bolder px-10">We believe that the raw talent has no boundaries</h1>
          <div className="is-lg mb-2">Joining QuellXCode means so much more than working for a reputed app development company in India. We’ve built this business with the passion for innovation and a flexible approach in what we do. That’s why we keep our eyes and ears open for smart people who get things done.</div>
          <div>
            <div className="is-lg font-bolder">Hire character. Train skill.</div>
            <div>– Peter Schutz</div>
          </div>
          <div id="scrolldown" className="bg-white is-circle shadow icon absolute left-50 bottom-0 border border-light">
            <i className="icon ri-2x ri-arrow-down-line" />
          </div>
        </div>
      </section>
      <section className="px-6 py-6 container">
        <h1 className="font-bolder txt-center pt-2">We don't offer Jobs. We offer Careers.</h1>
        <div className="my-4 txt-center">The secret of our success is the people we recruit and we are looking for the best. We are always looking for people who can bring new perspectives to our teams. If you want to be part of a team that values your enthusiasm, passion, and creativity, if you are seeking colleagues who are big thinkers, eager to take on fresh challenges as a team, apply below.</div>
        <div className="grid has-gap-lg">
          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-angularjs-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-reactjs-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-flutter-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-vuejs-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-xing-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-angularjs-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-reactjs-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-flutter-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-vuejs-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-xing-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-angularjs-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-reactjs-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-flutter-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-vuejs-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-xing-fill ri-3x" />
              </div>
              <h5 className="font-bolder">Ruby On Rail</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 container grid align-middle bg-light">
        <div className="column">
          <h1 className="font-bolder">Couldn’t find the job you are looking for?</h1>
          <div>
            Send your resume on
            <a href="mailto:hr@QuellXCode.com" className="ml-7px">
              hr@QuellXCode.com
            </a>
          </div>
        </div>
        <div className="column">
          <img src={mailus} alt="" className="img" />
        </div>
      </section>

      <Clock />
    </>
  );
}
