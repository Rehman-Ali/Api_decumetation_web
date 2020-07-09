import React from "react";
import { Link } from "react-router-dom";
import { Tabs } from "antd";

import Fluid from "../image/fluid.svg";
import efund from "../image/casestudy/efund/logo.png";

export interface props {
  className?: string;
}

CaseStudy.defaultProps = {
  className: "",
} as props;

export default function CaseStudy(props: props) {
  return (
    <>
      <div className="absolute left-0 top-0 right-0 event-none z--100 overflow-x-hidden h-100">
        <img src={Fluid} className="img absolute w-5 flip-xy" style={{ top: "-227px", right: "-51px" }} />
      </div>

      <section className="pb-6 pt-8 px-6 h-min-75vh flex align-middle w-19">
        <div>
          <h1 className="title is-sm font-bolder">The stories that describe how we ship successful products</h1>
          <div>Problems are not 'Stop' signs, they are guidelines. Read our success stories in delivering custom software solutions to diverse businesses.</div>
        </div>
      </section>

      <section>
        <Tabs defaultActiveKey="1" animated className="centered">
          <Tabs.TabPane className="p-2 mb-2 grid has-gap-lg" tab="Mobile" key="1">
            <div className="column">
              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?construction" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src={efund} alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">Civil Engineraring</div>
                <h5 style={{ letterSpacing: "4px" }}>
                  <Link to="/casestudy/Efund" className="stretch-link">
                    E Fund
                  </Link>
                </h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Construction</span>
                  <span className="clr border is-pill px-7px mr-7px">Developement</span>
                  <span className="clr border is-pill px-7px mr-7px">Maintainance</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Writing" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>
                  <Link to="/casestudy/PackageDelivery" className="stretch-link">
                    Package Delivery
                  </Link>
                </h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Packaging</span>
                  <span className="clr border is-pill px-7px mr-7px">Delivery</span>
                  <span className="clr border is-pill px-7px mr-7px">Data</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Creative" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?space" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Teachers" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Games" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?daughter" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?rocket" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <button className="btn is-sld is-loading is-pill is-block is-primary">Loading</button>
            </div>
            <div className="column">
              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?greet" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?spring" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Teachers" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?mouse" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 grid has-gap-lg" tab="Web Development" key="2">
            <div className="column">
              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Teachers" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Games" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?daughter" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?rocket" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?product" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Writing" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Creative" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?space" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <button className="btn is-sld is-loading is-pill is-block is-primary">Loading</button>
            </div>
            <div className="column">
              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?greet" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?spring" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Teachers" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?mouse" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 grid has-gap-lg" tab="Branding" key="3">
            <div className="column">
              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?greet" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?spring" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Teachers" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?mouse" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?product" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Writing" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Creative" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?space" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <button className="btn is-sld is-loading is-pill is-block is-primary">Loading</button>
            </div>
            <div className="column">
              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Teachers" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Games" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?daughter" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?rocket" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 grid has-gap-lg" tab="Marketing" key="4">
            <div className="column">
              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?product" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Writing" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Creative" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?space" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?greet" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?spring" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Teachers" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?mouse" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <button className="btn is-sld is-loading is-pill is-block is-primary">Loading</button>
            </div>
            <div className="column">
              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Teachers" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?Games" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?daughter" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>

              <div className="masonry-item p-6 card-zoom">
                <div className="image bg-primary">
                  <img className="img img-bg" src="https://source.unsplash.com/random?rocket" alt="" />
                  <div className="about">
                    <img className="absolute top-50 left-50 trans--50--50 img" src="https://www.grab.com/my/wp-content/themes/grabsg/public/img/grab_logo_158.png" alt="" />
                  </div>
                </div>
                <div className="txt-upper my-2 clr-secondary o-50">BARS & RESTAURANTS</div>
                <h5 style={{ letterSpacing: "4px" }}>BOTY</h5>
                <div>Marketing solution connecting bar owners and customers effectively.</div>
                <div className="mt-2 mb-6 o-50 is-sm">
                  <span className="clr border is-pill px-7px mr-7px">Media</span>
                  <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                  <span className="clr border is-pill px-7px mr-7px">Shopping</span>
                </div>
              </div>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </section>
    </>
  );
}
