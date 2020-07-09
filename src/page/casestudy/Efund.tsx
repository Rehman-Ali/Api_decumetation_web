import React from "react";

import image1 from "../../image/casestudy/efund/1.png";
import image2 from "../../image/casestudy/efund/2.png";
import image3 from "../../image/casestudy/efund/3.png";
import image4 from "../../image/casestudy/efund/4.png";
import image5 from "../../image/casestudy/efund/5.png";
import image6 from "../../image/casestudy/efund/6.png";
import allscreens from "../../image/casestudy/efund/allscreens.png";
import typography from "../../image/casestudy/efund/typography.png";
import colorpalette from "../../image/casestudy/efund/colorpalette.png";
import header from "../../image/casestudy/efund/header.jpg";
import headerphones from "../../image/casestudy/efund/headerphones.png";
import icons from "../../image/casestudy/efund/icons.png";
import illustration from "../../image/casestudy/efund/illustration.png";
import wireframes from "../../image/casestudy/efund/wireframes.png";
import wireframestoscreens from "../../image/casestudy/efund/wireframestoscreens.png";
import RequestQuote from "../../component/RequestQuote";
import Clock from "../../component/Clock";

export default function Efund() {
  return (
    <>
      <section className="mt-header w-24">
        <img className="img" src={header} alt="" />
      </section>

      <section className="px-6 pt-6 container grid has-gap-lg align-bottom" style={{ marginTop: "-400px" }}>
        <div className="column mb-8">
          <h1 className="font-bolder">About E-Fund</h1>
          <div className="txt-justify">E-Fund is a full fledged task management system with in depth account management where communication between different roles is normalized and made easy.</div>
        </div>
        <div className="column">
          <img src={headerphones} alt="" className="img" />
        </div>
      </section>

      <section className="txt-center px-6 pt-6 container">
        <h1 className="font-bolder">Wireframe</h1>
        <img src={wireframes} alt="" className="img" />
      </section>

      <section className="txt-center px-6 pt-6 container">
        <h1 className="font-bolder">Wireframe To Screen</h1>
        <img src={wireframestoscreens} alt="" className="img" />
      </section>

      <section className="px-6 pt-6 container grid has-gap-lg bg-light align-middle">
        <div className="column">
          <h1 className="font-bolder">Our Challenges</h1>
          <div className="txt-justify">The challenge for our design team was to brainstorm and conceptualize around making the UX design different from the competitors, yet stay relevant to the industry standards.</div>
        </div>
        <div className="column txt-right">
          <img src={illustration} alt="" className="img" />
        </div>
      </section>

      <section>
        <div className="txt-center px-6 pt-6 container">
          <h1 className="font-bolder">The User Flow</h1>
          <div>One of the other challenges of the project was to identify user personas and map out their user journeys. Doing this was highly crucial for the successful implementation of the idea since we realized there wasn’t any specific target audience and the app would be used by a different set of users belonging to different demographics, it was crucial to design it in a way that it would be relevant and easy to use for everyone.</div>
        </div>

        <div className="pt-6 relative grid has-gap-lg align-middle pr-6">
          <img src={image1} alt="" className="img w-18" />
          <div className="column off-12 w-10 px-4 absolute" style={{ bottom: "10%" }}>
            <h1 className="font-bolder">Home Screen</h1>
            <div className="txt-justify"> The home screen had to be simple yet effective. A status bar had to be integrated in order to keep a check on the progress of the request filed.</div>
          </div>
        </div>

        <div className="pt-6 relative grid has-gap-lg align-middle pl-6">
          <div className="column w-12 pl-6">
            <h1 className="font-bolder">Reporting</h1>
            <div className="txt-justify">Repoting is the most important user flow of any business application. While reporting is confusing, we designed the reporting screen with entire track history dividing it into daily, weekly and monthly checks.</div>
          </div>

          <div className="column w-12">
            <img src={image2} alt="" className="img" />
          </div>
        </div>

        <div className="pt-6 relative grid has-gap-lg align-middle pr-6">
          <img src={image3} alt="" className="img w-18" />
          <div className="column off-12 w-10 px-4 absolute" style={{ top: "10%" }}>
            <h1 className="font-bolder">Settings</h1>
            <div className="txt-justify">The user can easilly update his profile information once he has been given a specific role by the admin.</div>
          </div>
        </div>
      </section>

      <section className="pt-6 px-6 container">
        <h1 className="font-bolder">Iconography</h1>
        <div className="my-2">Our team of graphic designers created several unique icons and illustrations that matched with the brand logo and enhanced the overall theme and look.</div>
        <img src={icons} alt="" className="img" />
        <div className="grid mt-2 has-gap-lg">
          <div className="column">
            <h1 className="font-bolder">Color Palette</h1>
            <div className="my-4 txt-justify">To keep the design minimal and intuitive, we used white as our background colour and shades of blue to create energy.</div>
            <img src={colorpalette} className="img" alt="" />
          </div>
          <div className="column">
            <h1 className="font-bolder">Typography</h1>
            <div className="my-4 txt-justify">Our team of graphic designers created several unique icons and illustrations that matched with the brand logo and enhanced the overall theme and look.</div>
            <img src={typography} className="img w-20" alt="" />
          </div>
        </div>
      </section>

      <section className="pt-6 relative">
        <h1 className="px-10 font-bolder txt-center">The UX Fundamental</h1>
        <div className="px-10 txt-center">To enhance the overall user experience of the app, we not only created thematic UI design but also incorporated a few key features to make Package Delivery a go-to platform for its varied users.</div>

        <div className="pt-6 relative grid has-gap-lg align-middle pr-6">
          <div className="pl-0 column w-12">
            <img src={image4} alt="" className="img" />
          </div>

          <div className="column off-12 w-10 px-4 absolute" style={{ top: "20%" }}>
            <h1 className="font-bolder">Billing Feature</h1>
            <div className="txt-justify">A billing option where users can send in receipts related to their purchases, payment or order status. The user will be connected directly to the superiors which makes it a one of a kind experience on any task management app.</div>
          </div>
        </div>

        <div className="pt-6 relative grid has-gap-lg align-middle pl-6">
          <div className="column w-12 pl-6">
            <h1 className="font-bolder">Pay Orders</h1>
            <div className="txt-justify">The pay order screen was designed to show maximum information with minimum clutter. As there were so many features made to be fit in a confined space of a single screen. From payee’s personal information to the description of the nature of payment.</div>
          </div>

          <div className="column w-12 pr-0">
            <img src={image5} alt="" className="img" />
          </div>
        </div>

        <div className="pt-6 relative grid has-gap-lg align-middle pr-6">
          <div className="pl-0 column w-12">
            <img src={image6} alt="" className="img" />
          </div>

          <div className="column w-12">
            <h1 className="font-bolder">Claim Payments</h1>
            <div className="txt-justify">Claiming payments is the most important user flow of this system. While tracking already paid receipts are confusing and full of clutter, we designed the claim payment screen with a birds-eye view to keep a track of paid receipts.</div>
          </div>
        </div>
      </section>

      <section className="pt-6 relative grid has-gap-lg align-middle pr-6 txt-center">
        <h1 className="px-10 font-bolder txt-center">The Final Screens</h1>
        <div className="px-10 txt-center">All in all the entire app looked extremely modern & minimal with various UX functionalites at the core of its design.</div>
        <img src={allscreens} alt="" className="img" />
      </section>

      <RequestQuote />
      <Clock />
    </>
  );
}
