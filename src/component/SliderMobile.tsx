import React from "react";
import { Carousel } from "antd";

import mobilemockup from "../image/mobilemockup.png";
import evv1 from "../image/service/mobile/evv1.jpg";
import evv2 from "../image/service/mobile/evv2.jpg";
import evv3 from "../image/service/mobile/evv3.jpg";
import qxc1 from "../image/service/mobile/qxc1.jpg";
import qxc2 from "../image/service/mobile/qxc2.jpg";
import qxc3 from "../image/service/mobile/qxc3.jpg";
import efund1 from "../image/service/mobile/efund1.jpg";
import efund2 from "../image/service/mobile/efund2.jpg";
import efund3 from "../image/service/mobile/efund3.jpg";

import "../component/SliderMobile.scss";

export interface props {
  className?: string;
  onchange: Function;
  colors: string[];
  child: any;
}

SliderMobile.defaultProps = {
  className: "",
  onchange: () => {},
  colors: ["#430BDE", "#430BDE", "#430BDE", "#005595", "#D47FA6", "#241333", "#FF3301", "#FF3301", "#FF3301"],
  child: null,
} as props;

export default function SliderMobile(props: props) {
  return (
    <section className={`${props.className} txt-center py-6`}>
      {/* <div className="px-10 container">
        <h1 className="font-bolder">We Think Mobile First.</h1>
        <div className="px-6">We ship rich experiences to the small screens, which translates into the success of your business, ease of operations and engagement of the consumers with our exceptionally deep understanding of user experience and mobile technology. We work with multiple ecosystems in order to create maximum impact to your end-users.</div>
      </div> */}

      <div className="mobile relative">
        <div className="absolute left-50 top-50 z-top event-none trans--50--50">
          {/* todo : add css phone */}
          <img className="img" src={mobilemockup} alt="" />
        </div>

        <Carousel beforeChange={(o, n) => props.onchange(props.colors[n])} className="mt-10 zoom-center" autoplay autoplaySpeed={5000} speed={1000} centerMode dots accessibility draggable variableWidth slidesToShow={5}>
          <div className="flex align-middle justify-center relative">
            <img src={evv1} alt="" className="img" />
          </div>
          <div className="flex align-middle justify-center relative">
            <img src={evv2} alt="" className="img" />
          </div>
          <div className="flex align-middle justify-center relative">
            <img src={evv3} alt="" className="img" />
          </div>
          <div className="flex align-middle justify-center relative">
            <img src={qxc1} alt="" className="img" />
          </div>
          <div className="flex align-middle justify-center relative">
            <img src={qxc2} alt="" className="img" />
          </div>
          <div className="flex align-middle justify-center relative">
            <img src={qxc3} alt="" className="img" />
          </div>
          <div className="flex align-middle justify-center relative">
            <img src={efund1} alt="" className="img" />
          </div>
          <div className="flex align-middle justify-center relative">
            <img src={efund2} alt="" className="img" />
          </div>
          <div className="flex align-middle justify-center relative">
            <img src={efund3} alt="" className="img" />
          </div>
        </Carousel>
      </div>
      {props.child}
    </section>
  );
}
