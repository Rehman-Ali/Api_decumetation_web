import React, { useRef, useEffect } from "react";
import { Carousel, Tabs } from "antd";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "../vendor/video.scss";
import { Link } from "react-router-dom";

import OurWork from "../component/OurWork";
import BrandsWeWorkedWith from "../component/BrandsWeWorkedWith";
import RequestQuote from "../component/RequestQuote";
import Reviews from "../component/Reviews";
import Clock from "../component/Clock";

import Fluid from "../image/fluid.svg";
import home from "../image/home.svg";

export interface props {
  className?: string;
}

Home.defaultProps = {
  className: "",
} as props;

export default function Home(props: props) {
  var video1 = useRef<any>(null);

  useEffect(() => {
    var player1 = videojs(video1.current, {
      controls: true,
      sources: [{ src: "http://techslides.com/demos/sample-videos/small.mp4", type: "video/mp4" }],
    });
    return () => {
      if (player1) player1.dispose();
    };
  }, []);

  return (
    <>
      <div className="absolute left-0 top-0 right-0 event-none z--100 overflow-x-hidden h-100">
        <img src={Fluid} className="img absolute w-5" style={{ top: "512px" }} />
      </div>
      <section className="pl-10 pt-2 pr-2 h-min-100vh grid align-middle">
        <div className="column">
          <div>Top Web and Mobile Apps Development Company</div>
          <h1 className="title is-sm font-bolder">Your Trusted Development Partner</h1>
          <div className="mb-6">We deliver web and mobile app development services to global businesses since 1997, with 100% project delivery success. Hire the best programmers at affordable prices. Our design-focused approach and project execution processes help you to deliver the right solutions.</div>
          <Link to="/about" className="btn is-sld is-pill is-primary px-4 py-2">
            What we do
          </Link>
        </div>
        <div className="column">
          <img className="img" src={home} alt="" />
        </div>

        <div id="scrolldown" className="bg-white is-circle shadow icon absolute left-50 bottom-0 border border-light">
          <i className="icon ri-2x ri-arrow-down-line" />
        </div>
      </section>

      <section className="container px-6 py-6 grid has-gap-lg bg-light">
        <h1 className="font-bolder">Hire the Best Web and Mobile App Developers</h1>
        <div className="grid has-gap-lg">
          <div className="column w-16 txt-justify">
            <div className="mb-1rem">QuellXCode is a top web design agency and software development company with a large pool of software developers available for dedicated and fixed time/cost projects. Hire web developers from QuellXCode who have proven expertise in trending web technologies like PHP, Laravel, Magento, ReactJS, front-end technologies like AngularJS and back-end technologies like Node.js to develop custom and responsive websites, web apps and eCommerce solutions.</div>
            <div>Our Android app, iOS app and cross-platform mobile app developers are adroit in the latest mobile technologies and tools like Android Studio, Xcode, Kotlin, Xamarin, PhoneGap, React Native, etc. to build next-gen mobile applications.</div>
          </div>
          <div className="column pl-4">
            <div>
              <Link to="/services" className="border-hide btn is-min is-primary">
                Our services
              </Link>
            </div>
            <div>
              <Link to="/about" className="border-hide btn is-min is-primary">
                Read our story
              </Link>
            </div>
            <div>
              <Link to="/contactus" className="border-hide btn is-min is-primary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BrandsWeWorkedWith />

      <section className="txt-center px-6 pb-6 container w-18">
        <div className="embed">
          <div data-vjs-player>
            <video ref={video1} className="video-js vjs-theme-forest embed-item" />
          </div>
        </div>
      </section>

      <section className="px-6 py-6 container bg-light">
        <h1 className="font-bolder mb-6 txt-center">We Simplify Software Development Process</h1>
        <div className="grid has-gap-lg">
          <div className="column">
            <div className="flex align-middle">
              <div>
                <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-new-process-discover.svg" alt="" />
              </div>
              <div className="line" />
            </div>
            <h5 className="mt-10 mb-6">Discover</h5>
            <div>We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.</div>
          </div>

          <div className="column">
            <div className="flex align-middle">
              <div>
                <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-new-process-design.svg" alt="" />
              </div>
              <div className="line" />
            </div>
            <h5 className="mt-10 mb-6">Design</h5>
            <div>Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.</div>
          </div>

          <div className="column">
            <div className="flex align-middle">
              <div>
                <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-new-process-build.svg" alt="" />
              </div>
              <div className="line" />
            </div>
            <h5 className="mt-10 mb-6">Build</h5>
            <div>Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.</div>
          </div>

          <div className="column">
            <div>
              <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-new-process-deliver.svg" alt="" />
            </div>
            <h5 className="mt-10 mb-6">Deliver</h5>
            <div>We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.</div>
          </div>
        </div>
      </section>

      <section className="txt-center py-6">
        <h1 className="font-bolder mb-4">Our Core Services</h1>
        <Carousel className="services" autoplay autoplaySpeed={5000} speed={1000} centerMode dots accessibility draggable slidesToShow={3} slidesToScroll={1}>
          <div className="txt-center p-4 relative is-round">
            <div>
              <img className="img inline-block pt-10" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/services-mobile-apps.svg" alt="" />
            </div>
            <h6 className="font-bolder txt-cap my-10 pt-4">Mobile Developement</h6>
            <div className="mt-10 mb-4">Create your own team of developers for your software development project on short term, long term or permanent basis with guaranteed project delivery at affordable prices.</div>
            <Link to="/services/mobile" className="btn is-min is-primary stretch-link static border-hide font-bolder">
              Read More
            </Link>
          </div>

          <div className="txt-center p-4 relative is-round">
            <div>
              <img className="img inline-block pt-10" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/services-web-development.svg" alt="" />
            </div>
            <h6 className="font-bolder txt-cap my-10 pt-4">Web Development</h6>
            <div className="mt-10 mb-4">Create your own team of developers for your software development project on short term, long term or permanent basis with guaranteed project delivery at affordable prices.</div>
            <Link to="/services/web" className="btn is-min is-primary stretch-link static border-hide font-bolder">
              Read More
            </Link>
          </div>

          <div className="txt-center p-4 relative is-round">
            <div>
              <img className="img inline-block pt-10" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/services-mobile-apps.svg" alt="" />
            </div>
            <h6 className="font-bolder txt-cap my-10 pt-4">Branding</h6>
            <div className="mt-10 mb-4">Create your own team of developers for your software development project on short term, long term or permanent basis with guaranteed project delivery at affordable prices.</div>
            <Link to="/services/branding" className="btn is-min is-primary stretch-link static border-hide font-bolder">
              Read More
            </Link>
          </div>

          <div className="txt-center p-4 relative is-round">
            <div>
              <img className="img inline-block pt-10" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/services-devops.svg" alt="" />
            </div>
            <h6 className="font-bolder txt-cap my-10 pt-4">Marketing</h6>
            <div className="mt-10 mb-4">Create your own team of developers for your software development project on short term, long term or permanent basis with guaranteed project delivery at affordable prices.</div>
            <Link to="/services/marketing" className="btn is-min is-primary stretch-link static border-hide font-bolder">
              Read More
            </Link>
          </div>
        </Carousel>
      </section>

      <section className="px-6 py-6 container bg-light">
        <h1 className="font-bolder mb-6 txt-center">Technologies we work with</h1>

        <Tabs defaultActiveKey="1" className="centered">
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="Mobile" key="1">
            <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ri-flutter-fill" />
              <span className="block">Flutter</span>
            </a>

            <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ri-reactjs-fill" />
              <span className="block">React Native</span>
            </a>

            <a href="https://ionicframework.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-ionic2x.svg" alt="ionic" />
              </i>
              <span className="block">Ionic</span>
            </a>

            <a href="https://developer.apple.com/swift/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-swift2x.svg" alt="swift" />
              </i>
              <span className="block">Swift</span>
            </a>

            <a href="https://kotlinlang.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-kotlin2x.svg" alt="kotlin" />
              </i>
              <span className="block">Kotlin</span>
            </a>

            <a href="https://en.wikipedia.org/wiki/Objective-C" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-objectivec2x.svg" alt="objectivec" />
              </i>
              <span className="block">Objective C</span>
            </a>

            <a href="https://dotnet.microsoft.com/apps/xamarin" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-xamarin2x.svg" alt="xamarin" />
              </i>
              <span className="block">Xamarin</span>
            </a>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="Front End" key="2">
            <a href="https://angular.io/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-angular-js2x.svg" alt="angular" />
              </i>
              <span className="block">Angular</span>
            </a>

            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-react-native2x-1.svg" alt="react" />
              </i>
              <span className="block">React</span>
            </a>

            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-typescript2x-2.svg" alt="typescript" />
              </i>
              <span className="block">Type Script</span>
            </a>

            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-vue2x.svg" alt="vue" />
              </i>
              <span className="block">Vue</span>
            </a>

            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-html52x.svg" alt="html5" />
              </i>
              <span className="block">HTML 5</span>
            </a>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="DataBase" key="3">
            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-mango-db.svg" alt="mango" />
              </i>
              <span className="block">Mango</span>
            </a>

            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-my-sql2x.svg" alt="mysql" />
              </i>
              <span className="block">My SQL</span>
            </a>

            <a href="https://www.microsoft.com/en-us/sql-server/sql-server-2019" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-ms-sql2x1.svg" alt="mssql" />
              </i>
              <span className="block">Ms SQL</span>
            </a>

            <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-firebase2x.svg" alt="firebase" />
              </i>
              <span className="block">Firebase</span>
            </a>

            <a href="https://aws.amazon.com/dynamodb/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-dynamodb2x.svg" alt="dynamodb" />
              </i>
              <span className="block">Dynamo Db</span>
            </a>

            <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-postgresql2x.svg" alt="postgresql" />
              </i>
              <span className="block">Postgre SQL</span>
            </a>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="Back End" key="4">
            <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-php2x.svg" alt="php" />
              </i>
              <span className="block">PHP</span>
            </a>

            <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-java2x.svg" alt="java" />
              </i>
              <span className="block">JAVA</span>
            </a>

            <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-microsoft-dot-net2x.svg" alt="microsoft" />
              </i>
              <span className="block">Dot Net</span>
            </a>

            <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-node-js2x.svg" alt="node" />
              </i>
              <span className="block">Node</span>
            </a>

            <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-rails2x.svg" alt="rails" />
              </i>
              <span className="block">Rails</span>
            </a>

            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-phthon2x.svg" alt="python" />
              </i>
              <span className="block">python</span>
            </a>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="CMS" key="5">
            <a href="https://www.drupal.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-drupal2x.svg" alt="drupal" />
              </i>
              <span className="block">Drupal</span>
            </a>

            <a href="https://www.joomla.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-joomla2x.svg" alt="joomla" />
              </i>
              <span className="block">Joomla</span>
            </a>

            <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-wordpress2x.svg" alt="wordpress" />
              </i>
              <span className="block">Wordpress</span>
            </a>

            <a href="https://magento.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-magento2x.svg" alt="magento" />
              </i>
              <span className="block">Megneto</span>
            </a>

            <a href="https://www.shopify.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-shopify-plus2x.svg" alt="shopify" />
              </i>
              <span className="block">Shopify</span>
            </a>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="Infra and DevOps" key="6">
            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-aws2x.svg" alt="aws" />
              </i>
              <span className="block">AWS</span>
            </a>

            <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-google-cloud2x.svg" alt="google" />
              </i>
              <span className="block">Google</span>
            </a>

            <a href="https://gradle.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-gradle2x.svg" alt="gradle" />
              </i>
              <span className="block">Gradle</span>
            </a>

            <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-jenkins2x.svg" alt="jenkins" />
              </i>
              <span className="block">Jekins</span>
            </a>

            <a href="http://appium.io/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-appium2x.svg" alt="appium" />
              </i>
              <span className="block">Appium</span>
            </a>

            <a href="https://www.selenium.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/ic-technology-selenium2x-1.svg" alt="selenium" />
              </i>
              <span className="block">Selenium</span>
            </a>
          </Tabs.TabPane>
        </Tabs>
      </section>

      <OurWork />

      <section className="px-6 py-6 container bg-light txt-center">
        <h1 className="font-bolder mb-6">Industries We have Worked with</h1>

        <div>
          <button className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2 p-0" style={{ height: "130px", width: "130px" }}>
            <i className="icon ri-3x mb-7px">
              <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-industry-insurance.svg" alt="" />
            </i>
            <span className="block ri-sm Poppins">Insurance</span>
          </button>

          <button className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2 p-0" style={{ height: "130px", width: "130px" }}>
            <i className="icon ri-3x mb-7px">
              <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-industry-healthcare.svg" alt="" />
            </i>
            <span className="block ri-sm Poppins">Healthcare</span>
          </button>

          <button className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2 p-0" style={{ height: "130px", width: "130px" }}>
            <i className="icon ri-3x mb-7px">
              <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-industry-manufacturing.svg" alt="" />
            </i>
            <span className="block ri-sm Poppins">Manufacturing</span>
          </button>

          <button className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2 p-0" style={{ height: "130px", width: "130px" }}>
            <i className="icon ri-3x mb-7px">
              <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-industry-education.svg" alt="" />
            </i>
            <span className="block ri-sm Poppins">FMCG</span>
          </button>

          <button className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2 p-0" style={{ height: "130px", width: "130px" }}>
            <i className="icon ri-3x mb-7px ri-shopping-cart-2-line" />
            <span className="block ri-sm Poppins">Finance & Banking</span>
          </button>

          <button className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2 p-0" style={{ height: "130px", width: "130px" }}>
            <i className="icon ri-3x mb-7px">
              <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-industry-education.svg" alt="" />
            </i>
            <span className="block ri-sm Poppins">Education</span>
          </button>

          <button className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2 p-0" style={{ height: "130px", width: "130px" }}>
            <i className="icon ri-3x mb-7px">
              <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-industry-it-telecom.svg" alt="" />
            </i>
            <span className="block ri-sm Poppins">IT & Telecom</span>
          </button>

          <button className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2 p-0" style={{ height: "130px", width: "130px" }}>
            <i className="icon ri-3x mb-7px">
              <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-industry-it-telecom.svg" alt="" />
            </i>
            <span className="block ri-sm Poppins">Media</span>
          </button>

          <button className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2 p-0" style={{ height: "130px", width: "130px" }}>
            <i className="icon ri-3x mb-7px ri-bank-line" />
            <span className="block ri-sm Poppins">Legal</span>
          </button>

          <button className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2 p-0" style={{ height: "130px", width: "130px" }}>
            <i className="icon ri-3x mb-7px ri-store-3-line" />
            <span className="block ri-sm Poppins">Retail</span>
          </button>

          <button className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2 p-0" style={{ height: "130px", width: "130px" }}>
            <i className="icon ri-3x mb-7px ri-government-line" />
            <span className="block ri-sm Poppins">Government</span>
          </button>

          <button className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2 p-0" style={{ height: "130px", width: "130px" }}>
            <i className="icon ri-3x mb-7px ri-plane-line" />
            <span className="block ri-sm Poppins">Transportation</span>
          </button>
        </div>
      </section>

      <Reviews />

      <RequestQuote />

      <Clock />
    </>
  );
}
