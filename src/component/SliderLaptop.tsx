import React from "react";
import { Carousel } from "antd";

import laptopmockup from "../image/laptopmockup.png";
import bolan_lapi from "../image/service/mobile/crossplatform/bolan_lapi.jpg";
import citzen_lapi from "../image/service/mobile/crossplatform/citzen_lapi.jpg";
import connector_lapi from "../image/service/mobile/crossplatform/connector_lapi.jpg";
import shatgo_lapi from "../image/service/mobile/crossplatform/shatgo_lapi.jpg";
import startem_lapi from "../image/service/mobile/crossplatform/startem_lapi.jpg";
import supportladz_lapi from "../image/service/mobile/crossplatform/supportladz_lapi.jpg";
import winningsolutions_lapi from "../image/service/mobile/crossplatform/winningsolutions_lapi.jpg";

import "../component/SliderLaptop.scss";

export interface props {
  className?: string;
  onchange: Function;
  colors: string[];
  child: any;
}

SliderLaptop.defaultProps = {
  className: "",
  onchange: () => {},
  colors: ["rgb(3,88,152)", "#5400ff", "#805ad5", "#eb2f96", "#f5222d", "#fa8c16", "#fadb14", "#52c41a", "#20c997", "#13c2c2", "#6d4c41", "#a0d911", "#faad14", "#fa541c", "#2f54eb", "#b721ff"],
  child: null,
} as props;

export default function SliderLaptop(props: props) {
  return (
    <section className="txt-center py-6">
      {/* <div className="px-10 container">
        <h1 className="font-bolder">We Think Web First.</h1>
        <div className="px-6">We ship rich experiences to the small screens, which translates into the success of your business, ease of operations and engagement of the consumers with our exceptionally deep understanding of user experience and Web technology. We work with multiple ecosystems in order to create maximum impact to your end-users.</div>
      </div> */}

      <div className="laptop relative">
        <div className="absolute left-50 top-50 z-top event-none w-12 trans--50--50">
          {/* todo : add css phone */}
          <img className="img" src={laptopmockup} alt="" />
        </div>

        <Carousel beforeChange={(o, n) => props.onchange(props.colors[n])} className="mt-10 zoom-center" autoplay autoplaySpeed={5000} speed={1000} centerMode dots accessibility draggable slidesToShow={1} variableWidth>
          <div className="test flex align-middle justify-center relative">
            <img src={bolan_lapi} alt="bolan" className="img" />
          </div>
          <div className="test flex align-middle justify-center relative">
            <img src={citzen_lapi} alt="citzen" className="img" />
          </div>
          <div className="test flex align-middle justify-center relative">
            <img src={connector_lapi} alt="connector" className="img" />
          </div>
          <div className="test flex align-middle justify-center relative">
            <img src={shatgo_lapi} alt="shatgo" className="img" />
          </div>
          <div className="test flex align-middle justify-center relative">
            <img src={startem_lapi} alt="startem" className="img" />
          </div>
          <div className="test flex align-middle justify-center relative">
            <img src={supportladz_lapi} alt="supportladz" className="img" />
          </div>
          <div className="test flex align-middle justify-center relative">
            <img src={winningsolutions_lapi} alt="winningsolutions" className="img" />
          </div>
        </Carousel>
      </div>
      {props.child}
    </section>
  );
}
