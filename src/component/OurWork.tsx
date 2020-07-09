import React from "react";

import { Carousel } from "antd";

import poster1 from "../image/casestudy/poster/1.png";
import poster2 from "../image/casestudy/poster/2.png";
import poster3 from "../image/casestudy/poster/3.png";

export interface props {
  className?: string;
}

OurWork.defaultProps = {
  className: "",
} as props;

export default function OurWork() {
  return (
    <>
      {/* <section className="txt-center px-6 py-6 container">
        <h1 className="font-bolder txt-center">Our Work</h1>
        <div className="grid has-gap-lg">
          <div className="column">
            <div className="masonry-item shadow-sm flex align-middle justify-center card-zoom">
              <div style={{ backgroundImage: "url('https://source.unsplash.com/random?product')" }} className="img-bg" />
              <div className="p-6 about">
                <div className="txt-upper" style={{ letterSpacing: "4px" }}>
                  Package Delivery
                </div>
                <img className="img my-8 w-12" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                <div>Shipping and receiving parcels has never been this easy</div>
              </div>
            </div>
            <div className="masonry-item shadow-sm flex align-middle justify-center card-zoom">
              <div style={{ backgroundImage: "url('https://source.unsplash.com/random?product')" }} className="img-bg" />
              <div className="p-6 about">
                <div className="txt-upper" style={{ letterSpacing: "4px" }}>
                  Package Delivery
                </div>
                <img className="img my-8 w-12" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                <div>Shipping and receiving parcels has never been this easy</div>
              </div>
            </div>
            <div className="masonry-item shadow-sm flex align-middle justify-center card-zoom">
              <div style={{ backgroundImage: "url('https://source.unsplash.com/random?product')" }} className="img-bg" />
              <div className="p-6 about">
                <div className="txt-upper" style={{ letterSpacing: "4px" }}>
                  Package Delivery
                </div>
                <img className="img my-8 w-12" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                <div>Shipping and receiving parcels has never been this easy</div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="masonry-item shadow-sm flex align-middle justify-center card-zoom md">
              <div style={{ backgroundImage: "url('https://source.unsplash.com/random?product')" }} className="img-bg" />
              <div className="p-6 about">
                <div className="txt-upper" style={{ letterSpacing: "4px" }}>
                  Package Delivery
                </div>
                <img className="img my-8 w-12" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                <div>Shipping and receiving parcels has never been this easy</div>
              </div>
            </div>
            <div className="masonry-item shadow-sm flex align-middle justify-center card-zoom">
              <div style={{ backgroundImage: "url('https://source.unsplash.com/random?product')" }} className="img-bg" />
              <div className="p-6 about">
                <div className="txt-upper" style={{ letterSpacing: "4px" }}>
                  Package Delivery
                </div>
                <img className="img my-8 w-12" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                <div>Shipping and receiving parcels has never been this easy</div>
              </div>
            </div>
            <div className="masonry-item sm flex align-middle justify-center">
              <button className="py-4 px-10 btn is-fillout is-primary is-pill">View All</button>
            </div>
          </div>
          <div className="column">
            <div className="masonry-item shadow-sm flex align-middle justify-center card-zoom">
              <div style={{ backgroundImage: "url('https://source.unsplash.com/random?product')" }} className="img-bg" />
              <div className="p-6 about">
                <div className="txt-upper" style={{ letterSpacing: "4px" }}>
                  Package Delivery
                </div>
                <img className="img my-8 w-12" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                <div>Shipping and receiving parcels has never been this easy</div>
              </div>
            </div>
            <div className="masonry-item shadow-sm flex align-middle justify-center card-zoom lg">
              <div style={{ backgroundImage: "url('https://source.unsplash.com/random?product')" }} className="img-bg" />
              <div className="p-6 about">
                <div className="txt-upper" style={{ letterSpacing: "4px" }}>
                  Package Delivery
                </div>
                <img className="img my-8 w-12" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                <div>Shipping and receiving parcels has never been this easy</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="txt-center py-6">
        <h1 className="font-bolder txt-center">Our Work</h1>
        <Carousel autoplay autoplaySpeed={5000} speed={1000} className="work_slider zoom-center" centerMode dots infinite accessibility variableWidth draggable>
          <img className="img" src={poster1} alt="" />
          <img className="img" src={poster2} alt="" />
          <img className="img" src={poster3} alt="" />
        </Carousel>
      </section>
    </>
  );
}
