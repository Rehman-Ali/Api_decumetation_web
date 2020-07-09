import React, { useRef, useEffect } from "react";
import { Carousel } from "antd";

import crossplatformmockup from "../image/crossplatformmockup.png";

import "../component/SliderCrossPlatform.scss";

import bolan_lapi from "../image/service/mobile/crossplatform/bolan_lapi.jpg";
import citzen_lapi from "../image/service/mobile/crossplatform/citzen_lapi.jpg";
import connector_lapi from "../image/service/mobile/crossplatform/connector_lapi.jpg";
import shatgo_lapi from "../image/service/mobile/crossplatform/shatgo_lapi.jpg";
import startem_lapi from "../image/service/mobile/crossplatform/startem_lapi.jpg";
import supportladz_lapi from "../image/service/mobile/crossplatform/supportladz_lapi.jpg";
import winningsolutions_lapi from "../image/service/mobile/crossplatform/winningsolutions_lapi.jpg";

import bolan_mobl from "../image/service/mobile/crossplatform/bolan_mobl.jpg";
import citzen_mobl from "../image/service/mobile/crossplatform/citzen_mobl.jpg";
import connector_mobl from "../image/service/mobile/crossplatform/connector_mobl.jpg";
import shatgo_mobl from "../image/service/mobile/crossplatform/shatgo_mobl.jpg";
import startem_mobl from "../image/service/mobile/crossplatform/startem_mobl.jpg";
import supportladz_mobl from "../image/service/mobile/crossplatform/supportladz_mobl.jpg";
import winningsolutions_mobl from "../image/service/mobile/crossplatform/winningsolutions_mobl.jpg";

export interface props {
  className?: string;
  onchange: Function;
  colors: string[];
  child: any;
}

SliderCrossPlatform.defaultProps = {
  className: "",
  onchange: () => {},
  colors: ["#E33A13", "#1180F3", "#01303E", "#0090D6", "#17181C", "#5CC9E8", "#571F9C"],
  child: null,
} as props;

export default function SliderCrossPlatform(props: props) {
  const laptopref = useRef(null);
  const mobileref = useRef(null);

  useEffect(() => {
    // console.log((ref.current as any).slick);
  }, [mobileref.current]);

  return (
    <section className="txt-center py-6 px-6 container">
      {/* <div className="px-10 container">
        <h1 className="font-bolder">We Think Web First.</h1>
        <div>We ship rich experiences to the small screens, which translates into the success of your business, ease of operations and engagement of the consumers with our exceptionally deep understanding of user experience and Web technology. We work with multiple ecosystems in order to create maximum impact to your end-users.</div>
      </div> */}

      <div className="CrossPlatform relative">
        <div className="absolute left-50 top-50 z-top event-none w-19 trans--50--50">
          <img className="img mt-6" src={crossplatformmockup} alt="" />
        </div>

        <Carousel
          ref={laptopref}
          arrows
          draggable
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          className="mt-4 container crosslaptop"
          autoplay
          style={{
            paddingLeft: "15%",
            paddingRight: "15%",
          }}
          autoplaySpeed={5000}
          speed={1000}
          dots
          accessibility
          beforeChange={(o, n) => {
            ((mobileref.current as any) as Carousel).goTo(n);
            props.onchange(props.colors[n]);
          }}
        >
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={bolan_lapi} alt="bolan" className="img" />
          </div>
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={citzen_lapi} alt="citzen" className="img" />
          </div>
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={connector_lapi} alt="connector" className="img" />
          </div>
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={shatgo_lapi} alt="shatgo" className="img" />
          </div>
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={startem_lapi} alt="startem" className="img" />
          </div>
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={supportladz_lapi} alt="supportladz" className="img" />
          </div>
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={winningsolutions_lapi} alt="winningsolutions" className="img" />
          </div>
        </Carousel>

        <Carousel
          beforeChange={(o, n) => {
            ((laptopref.current as any) as Carousel).goTo(n);
          }}
          ref={mobileref}
          draggable
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          className="crossmobile"
          dots={false}
          speed={1000}
        >
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={bolan_mobl} alt="bolan" className="img" />
          </div>
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={citzen_mobl} alt="citzen" className="img" />
          </div>
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={connector_mobl} alt="connector" className="img" />
          </div>
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={shatgo_mobl} alt="shatgo" className="img" />
          </div>
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={startem_mobl} alt="startem" className="img" />
          </div>
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={supportladz_mobl} alt="supportladz" className="img" />
          </div>
          <div className="bg-error test flex align-middle justify-center relative">
            <img src={winningsolutions_mobl} alt="winningsolutions" className="img" />
          </div>
        </Carousel>
      </div>
      {props.child}
    </section>
  );
}

function NextArrow(props) {
  return <div className={`${props.className}`} style={{ ...props.style }} onClick={props.onClick} />;
}

function PrevArrow(props) {
  return <div className={`${props.className}`} style={{ ...props.style }} onClick={props.onClick} />;
}
