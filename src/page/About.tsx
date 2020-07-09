import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import { Carousel } from "antd";
import "video.js/dist/video-js.css";
import "../vendor/video.scss";
import { Link } from "react-router-dom";
import Clock from "../component/Clock";

import Fluid from "../image/fluid.svg";
import BrandsWeWorkedWith from "../component/BrandsWeWorkedWith";

export interface props {
  className?: string;
}

About.defaultProps = {
  className: "",
} as props;

function numincrement(element: HTMLElement, start: number, end: number, speed: number, prefix: string = "") {
  if (start === null) start = 0;
  if (end === 0) end = parseInt(element.innerHTML);

  var diff = speed / (end - start);
  console.log(speed);

  var number = start;
  var interval = setInterval(function () {
    element.innerHTML = number.toString() + prefix;
    if (number >= end) clearInterval(interval);
    number++;
  }, diff);
}

export default function About(props: props) {
  var video1 = useRef<any>(null);

  var satisfied = useRef<any>(null);
  var delivered = useRef<any>(null);
  var experts = useRef<any>(null);

  useEffect(() => {
    var player1 = videojs(video1.current, {
      controls: true,
      sources: [{ src: "http://techslides.com/demos/sample-videos/small.mp4", type: "video/mp4" }],
    });

    return () => {
      if (player1) player1.dispose();
    };
  }, []);
  useEffect(() => {
    numincrement(delivered.current, 0, 0, 2000, "+");
    numincrement(satisfied.current, 0, 0, 2000, "+");
    numincrement(experts.current, 0, 0, 2000, "+");
  }, []);

  return (
    <>
      <div className="absolute left-0 top-0 right-0 event-none z--100 overflow-x-hidden h-100">
        <img src={Fluid} className="img absolute w-5" style={{ top: "512px" }} />
        <img src={Fluid} className="img absolute w-5 flip-xy" style={{ top: "-227px", right: "-51px" }} />
      </div>

      <section className="txt-center px-6 container h-min-100vh flex align-middle justify-center">
        <div className="mt-6">
          <div>Award-winning Offshore Software Development Company Since 1997</div>
          <h1 className="title is-sm font-bolder">Our Treasure Comprises Our People, Vision & Values</h1>
          <div className="is-lg">QuellXCode is not only a globally recognized IT company but also a family filled with talented experts that help global brands, enterprises, mid-size businesses or even startups with innovative solutions.</div>

          <div id="scrolldown" className="bg-white is-circle shadow icon absolute left-50 bottom-0 border border-light">
            <i className="icon ri-2x ri-arrow-down-line" />
          </div>
        </div>
      </section>

      <section className="txt-center px-6 pb-6 container w-18">
        <div className="embed">
          <div data-vjs-player>
            <video ref={video1} className="video-js vjs-theme-forest embed-item" />
          </div>
        </div>
      </section>

      <section className="container py-6 grid txt-justify has-gap-lg">
        <div className="column px-2">
          <h1 className="font-bolder">Who We Are</h1>
          <p className="mb-1rem">QuellXCode is not an entity, it’s a family that represents togetherness for over two decades of a successful journey. For QuellXCodeians, the definition of success is to transcend innovative ideas of people to reality with the help of our tech expertise, this is what we, as a Team, want to be remembered for!</p>
          <p className="mb-1rem">Our vision has led QuellXCode to become a top IT company in India & USA for delivering various industry-led mobility solutions. The goal is to empower clients and businesses by creating new possibilities leveraging the technologies of today and tomorrow with the utmost quality, satisfaction, and transparency.</p>
        </div>
        <div className="column px-2">
          <h1 className="font-bolder">What We Do</h1>
          <p className="mb-1rem">Our enthusiasm has led us to become a top IT company in India & USA for delivering various industry-led mobility solutions in web and mobile application development domains leveraging futuristic technologies like Internet of Things (IoT), AI-ML, AR-VR, Voice assistants and Voice Skills, DevOps & Cloud computing, etc.</p>
          <p className="mb-1rem">We feel empowered with our certified tech experts and our R&D team who have always challenged themselves to help global clientele with a plethora of IT services and solutions. Engagement with our team guarantees our clients to save huge money on project development with faster delivery.</p>
        </div>
      </section>

      <section className="container py-4 px-6 bg-light">
        <h1 className="font-bolder txt-center">Belief of Every QuellXCodeian</h1>
        <div className="grid has-gap-lg">
          <div className="column p-2 txt-center">
            <img className="img mb-6" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-belief-people.svg" alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Client-centric Approach</h4>
            <p className="txt-justify">For any business, customers are always at the center. Being a leading web and mobile app development company, our definition goes beyond our direct customers. We always start from where you are with your ideas and we think from YOUR end customers' perspectives, their pain areas and devise a solution that solves core problems to benefit your business.</p>
          </div>
          <div className="column p-2 txt-center">
            <img className="img mb-6" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-belief-research.svg" alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Effective Collaboration</h4>
            <p className="txt-justify">Communication is the Key. We tend to over-communicate at times. Although sounds overwhelming, but eventually it works wonders for our client business. When our development team collaborates with our clients sitting a thousand miles away, it's apparent that we stay in touch with platforms and mediums that allow effectiveness, transparency, and accuracy.</p>
          </div>
          <div className="column p-2 txt-center">
            <img className="img mb-6" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-belief-product-driven.svg" alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Quality Delivered in Time</h4>
            <p className="txt-justify">With over two decades of experience in the offshore IT software development industry, we have a great set of internal frameworks with best-in-class infrastructure that enables us to deliver solutions with superior quality, at all times. All these years, we have learned how to prevent failures and replicate success. We don't just brag about quality. We define and deliver it in time.</p>
          </div>
        </div>
      </section>

      <section className="container py-6 grid has-gap-lg">
        <div className="column w-6">
          <img className="img" style={{ paddingBottom: "16px" }} src="https://source.unsplash.com/random/512x410" alt="" />
          <img className="img" style={{ paddingBottom: "16px" }} src="https://source.unsplash.com/random/512x614" alt="" />
        </div>
        <div className="column w-12">
          <img className="img mb-1rem" src="https://source.unsplash.com/random/1024x1024" alt="" />
        </div>
        <div className="column w-6">
          <img className="img" style={{ paddingBottom: "16px" }} src="https://source.unsplash.com/random/512x614" alt="" />
          <img className="img" style={{ paddingBottom: "16px" }} src="https://source.unsplash.com/random/512x410" alt="" />
        </div>
      </section>

      <section className="container py-6 bg-light">
        <h2 className="txt-center w-18 container mb-6">we've helped businesses increase their revenue on an average by 90% in their first year with us!</h2>
        <div className="grid txt-center">
          <div className="column">
            <h1 className="font-bolder mb-1rem" style={{ fontSize: "4rem" }} ref={satisfied}>
              3000+
            </h1>
            <div>Satisfied Clients Across the Globe</div>
          </div>

          <div className="column">
            <h1 className="font-bolder mb-1rem" style={{ fontSize: "4rem" }} ref={delivered}>
              7000+
            </h1>
            <div>Projects Delivered Successfully</div>
          </div>

          <div className="column">
            <h1 className="font-bolder mb-1rem" style={{ fontSize: "4rem" }} ref={experts}>
              450+
            </h1>
            <div>Experts Under the Same Roof</div>
          </div>
        </div>
      </section>

      <section className="container px-4 py-6">
        <h1 className="font-bolder txt-center">Our Leaders</h1>
        <Carousel nextArrow={<NextArrow />} prevArrow={<PrevArrow />} autoplay autoplaySpeed={5000} speed={1000} dots accessibility adaptiveHeight arrows draggable slidesToShow={3} slidesToScroll={1}>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-dribbble-line" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-facebook-fill" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-github-fill" /></a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-github-fill" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-instagram-line" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-behance-fill" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-skype-fill" /></a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-dribbble-line" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-facebook-fill" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-skype-fill" /></a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-dribbble-line" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-github-fill" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-behance-fill" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-skype-fill" /></a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-facebook-fill" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-instagram-line" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-skype-fill" /></a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-dribbble-line" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-github-fill" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-instagram-line" /></a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-github-fill" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-instagram-line" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-behance-fill" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-skype-fill" /></a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-dribbble-line" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-github-fill" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-behance-fill" /></a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer"><i className="icon ri-lg mr-2 ri-skype-fill" /></a>
            </div>
          </div>
        </Carousel>
      </section>

      <section className="container px-8 py-6">
        <div className="bg-dark grid pr-4">
          <div className="column mr--6 pt-6">
            <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/sm-quote-img.png" alt="" />
          </div>
          <div className="column clr-white flex align-middle justify-center">
            <blockquote>
              <p className="h4 font-bolder">“To live life within boundaries, to limit your existence by fearing the unexpected, to make choices based on needs and not wants, that is humanity’s biggest failure.”</p>
              <cite>
                <span className="block font-bold fontstyle-normal">Sandeep Mundra</span>
                <span className="block fontstyle-normal">CEO</span>
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="container px-6 py-4 grid has-gap-lg">
        <div className="column">
          <div className="sticky top-header">
            <div className="mb-1rem">Our Core Values</div>
            <h2 className="font-bolder">Deliver Reliable & Quality Software Development Services</h2>
          </div>
        </div>
        <div className="column">
          <h5 className="font-bolder">Optimum Client Satisfaction</h5>
          <div className="mb-6">It’s in our DNA. Our clients are the partners behind the success we have tasted over the decades. This is the reason we keep client satisfaction at the center of our ecosystem. We are not shy of collaboration to sharpen our insights for perfect execution of our offerings. The praise from the clients is music to our ears and we’d crave for that. It’s a hunger in us that never fades.</div>

          <h5 className="font-bolder">Result-oriented Approach</h5>
          <div className="mb-6">The roots of our success are connected to our vision and execution of it. Starting from the recruitment to the quality deliverables, we keep our values intact. We hire passionate humans who have that fire burning in them. People who really want to work with us and understand the importance of client expectations to deliver quality results.</div>

          <h5 className="font-bolder">Integrity in Everything</h5>
          <div className="mb-6">Integrity is our core and is at the center of everything we do. For us, it is as good as following the law, maybe more than that. It is about delivering on our commitments, honesty and fairness in business and day-to-day living. We are a family that believes in team work with one Mantra, that is to die with memories, not dreams. Memories with our peeps, memories with our clients.</div>

          <h5 className="font-bolder">Great Place to Work</h5>
          <div className="mb-6">There are a few things that make QuellXCode a family. We love our peeps. QuellXCode is just not about its promises, global recognitions or testimonials. With utter respect, we embrace the diversity of thought, cultures, and of people. Nothing feels better than getting inspired by the mentors and their success stories. Yes, QuellXCode is compassionate for its priceless assets, the employees. Humans work here, not robots!!</div>
        </div>
      </section>

      <section className="h-min-75vh img-bg px-6 my-6 flex align-middle justify-center txt-center" style={{ backgroundImage: "linear-gradient(to bottom, hsla(0, 0%, 0%, 0.4), hsla(0, 0%, 0%, 0.8)), url('https://images.unsplash.com/photo-1523582407565-efee5cf4a353')" }}>
        <div>
          <h1 className="font-bolder clr-white">Teamwork is the only way we work</h1>
          <Link to="carrer" className="btn is-fillout clr-white is-pill is-primary px-4 py-2">
            Join Our Team
          </Link>
        </div>
      </section>

      <BrandsWeWorkedWith className="0 py-0" />

      <Clock />
    </>
  );
}

function NextArrow(props) {
  return <div className={`${props.className}`} style={{ ...props.style }} onClick={props.onClick} />;
}
function PrevArrow(props) {
  return <div className={`${props.className}`} style={{ ...props.style }} onClick={props.onClick} />;
}
