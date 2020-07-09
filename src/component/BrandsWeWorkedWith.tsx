import React from "react";

import { Carousel } from "antd";

import brand1 from "../image/brand/1.png";
import brand2 from "../image/brand/2.png";
import brand3 from "../image/brand/3.png";
import brand4 from "../image/brand/4.png";
import brand5 from "../image/brand/5.png";
import brand6 from "../image/brand/6.png";
import brand7 from "../image/brand/7.png";
import brand8 from "../image/brand/8.png";
import brand9 from "../image/brand/9.png";
import brand10 from "../image/brand/10.png";
import brand11 from "../image/brand/11.png";
import brand12 from "../image/brand/12.png";
import brand13 from "../image/brand/13.png";
import brand14 from "../image/brand/14.png";
import brand15 from "../image/brand/15.png";
import brand16 from "../image/brand/16.png";
import brand17 from "../image/brand/17.png";
import brand18 from "../image/brand/18.png";
import brand19 from "../image/brand/19.png";
import brand20 from "../image/brand/20.png";
import brand21 from "../image/brand/21.png";
import brand22 from "../image/brand/22.png";
import brand23 from "../image/brand/23.png";
import brand24 from "../image/brand/24.png";
import brand25 from "../image/brand/25.png";
import brand26 from "../image/brand/26.png";
import brand27 from "../image/brand/27.png";
import brand28 from "../image/brand/28.png";

export interface props {
  className?: string;
}

BrandsWeWorkedWith.defaultProps = {
  className: "",
} as props;

export default function BrandsWeWorkedWith(props: props) {
  return (
    <section className={props.className + "py-6"}>
      <h1 className="font-bolder txt-center">Brands we worked with</h1>
      <Carousel variableWidth autoplay autoplaySpeed={3000} speed={1500} accessibility adaptiveHeight dots={false} draggable slidesToShow={8} slidesToScroll={2}>
        <div>
          <img className="img m-2 brands-logo" src={brand1} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand2} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand3} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand4} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand5} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand6} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand7} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand8} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand9} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand10} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand11} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand12} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand13} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand14} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand15} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand16} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand17} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand18} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand19} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand20} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand21} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand22} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand23} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand24} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand25} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand26} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand27} alt="" />
        </div>
        <div>
          <img className="img m-2 brands-logo" src={brand28} alt="" />
        </div>
      </Carousel>
    </section>
  );
}
