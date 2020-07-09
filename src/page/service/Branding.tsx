import React from "react";

import Fluid from "../../image/fluid.svg";
import bottom from "../../image/service/branding/bottom.svg";
import Reviews from "../../component/Reviews";

export default function Branding() {
  return (
    <>
      <div className="absolute left-0 top-0 right-0 event-none z--100 overflow-x-hidden h-100">
        <img src={Fluid} className="img absolute w-5" style={{ top: "512px" }} />
        <img src={Fluid} className="img absolute w-5 flip-xy" style={{ top: "-227px", right: "-51px" }} />
      </div>
      <section className="txt-center px-6 container h-min-100vh flex align-middle justify-center">
        <div className="mt-6">
          <h1 className="title is-sm font-bolder">Designing for all taste palettes from Concept to Final Product</h1>
          <div className="is-lg">Simple design is a complex process. We simplify it by focusing on Challenges and Solutions followed by building functional user interfaces that keep the audience at the center.</div>

          <div id="scrolldown" className="bg-white is-circle shadow icon absolute left-50 bottom-0 border border-light">
            <i className="icon ri-2x ri-arrow-down-line" />
          </div>
        </div>
      </section>
      <section className="container txt-center px-6 pt-6 bg-light">
        <h1 className="font-bolder">The Difference</h1>
        <div className="px-10">We say the discovery is at the center of ingenuity. We learned a little dash of crazy mixed with great discipline, creates masterpieces - we call it "Discovery Workshop"</div>

        <img className="img" src={bottom} alt="" />
      </section>

      <section className="container py-4 txt-center">
        <h1 className="font-bolder">From Discovery to Sprints to Agile Development</h1>
        <div className="bg-error h-50vh">Video</div>
      </section>

      <section className="container py-4 bg-light">
        <h1 className="font-bolder txt-center">Benefits Of Discovery / Design First Approach</h1>
        <div className="txt-center mb-2">Discovery Workshop is designed to feed the engineering team, albeit not the other way round that traditionally many IT companies do.</div>
        <div className="grid has-gap-lg">
          <div className="column p-2 txt-center">
            <img className="img mb-6" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/11/ic-benefits-strategy.svg" alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Clear Strategy</h4>
            <p className="txt-justify">We work with you to cut the clutter and stay focused on defining critical system features to build a product that’s launch-ready.</p>
          </div>
          <div className="column p-2 txt-center">
            <img className="img mb-6" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/11/ic-benefits-speed.svg" alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Speed</h4>
            <p className="txt-justify">Making the most of our engagement with an agile mindset to produce visible results - compared to the traditional way.</p>
          </div>
          <div className="column p-2 txt-center">
            <img className="img mb-6" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/11/ic-benefits-lower-risk.svg" alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Lower Risk</h4>
            <p className="txt-justify">Before investing large sum upfront into the entire project and committing in blind, define something that’s sustainable and achievable.</p>
          </div>
          <div className="column p-2 txt-center">
            <img className="img mb-6" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/11/ic-benefits-cost-effective.svg" alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Cost Effective </h4>
            <p className="txt-justify">We work with you to define minimum launchable product so that you can prioritize investments for better ROI, allowing you to focus on growth</p>
          </div>
        </div>
      </section>

      <section className="py-6 px-6 container">
        <div className="txt-center">WHAT WE DO</div>
        <h1 className="font-bolder txt-center">Why Your Idea Needs a "Workshop"?</h1>
        <div className="grid has-gap-lg">
          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Think</h5>
              <div>Not all requirements are development ready</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Organize</h5>
              <div>Ideas evolve and they need to be constrained in a boundary</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Prioritise</h5>
              <div>Organize your thoughts for maximum impact</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Goals</h5>
              <div>A quality product must have clearly defined objectives</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Quantify</h5>
              <div>Deriving scope, for accurate timeline and budget</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Roadmap</h5>
              <div>Choosing the right technology approach to development</div>
              <button className="btn is-min stretch-link border-hide static is-primary" />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4 txt-center">
        <h1 className="font-bolder">How It Works?</h1>
        <div className="mb-2">For each workshop, we assign a dedicated analyst, a UI/UX designer and a technical team who work with you, to do full justice to your ideas with the most relevant and technically advanced solutions.</div>
        <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/ic-design-how-it-work.png" className="img" alt="" />
      </section>

      <section className="container py-4 grid has-gap-lg align-middle">
        <div className="column w-11">
          <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/11/img-process-discover-device.jpg" className="img" alt="" />
        </div>
        <div className="column pl-4">
          <div className="mb-6">
            <h5>Target Audience, Market and the Problem</h5>
            <h1 className="font-bolder">Discover & Devise</h1>
          </div>

          <hr className="mb-6 w-5 border-primary clr-primary border o-100 border-wide clr-dark" />

          <div className="mb-6">
            <h5>Market Analysis</h5>
            <div>Review what's already been done by similar solutions in the market and elevate the experience</div>
          </div>

          <div className="mb-6">
            <h5>Requirements</h5>
            <div>Identify core needs and vision of the solution with elaborated brainstorming sessions</div>
          </div>

          <div className="mb-6">
            <h5>Conceptualisation</h5>
            <div>Identify core business problem to be solved keeping end-users at the center</div>
          </div>
        </div>
      </section>

      <section className="container py-4 grid has-gap-lg align-middle">
        <div className="column pr-4">
          <div className="mb-6">
            <h5>Target Audience, Market and the Problem</h5>
            <h1 className="font-bolder">Discover & Devise</h1>
          </div>

          <hr className="mb-6 w-5 border-primary clr-primary border o-100 border-wide clr-dark" />

          <div className="mb-6">
            <h5>Market Analysis</h5>
            <div>Review what's already been done by similar solutions in the market and elevate the experience</div>
          </div>

          <div className="mb-6">
            <h5>Requirements</h5>
            <div>Identify core needs and vision of the solution with elaborated brainstorming sessions</div>
          </div>

          <div className="mb-6">
            <h5>Conceptualisation</h5>
            <div>Identify core business problem to be solved keeping end-users at the center</div>
          </div>
        </div>
        <div className="column w-11 txt-right">
          <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/11/img-process-define-refine.jpg" className="img" alt="" />
        </div>
      </section>

      <section className="container py-4 grid has-gap-lg align-middle">
        <div className="column w-11">
          <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/11/img-process-ui-ux.jpg" className="img" alt="" />
        </div>
        <div className="column pl-4">
          <div className="mb-6">
            <h5>Target Audience, Market and the Problem</h5>
            <h1 className="font-bolder">Discover & Devise</h1>
          </div>

          <hr className="mb-6 w-5 border-primary clr-primary border o-100 border-wide clr-dark" />

          <div className="mb-6">
            <h5>Market Analysis</h5>
            <div>Review what's already been done by similar solutions in the market and elevate the experience</div>
          </div>

          <div className="mb-6">
            <h5>Requirements</h5>
            <div>Identify core needs and vision of the solution with elaborated brainstorming sessions</div>
          </div>

          <div className="mb-6">
            <h5>Conceptualisation</h5>
            <div>Identify core business problem to be solved keeping end-users at the center</div>
          </div>
        </div>
      </section>

      <section className="container py-4 grid has-gap-lg align-middle">
        <div className="column pr-4">
          <div className="mb-10">
            <h1 className="mb-0 font-bolder">Design is not how it looks.</h1>
            <h1 className="mb-0 font-bolder clr-primary">But how it works.</h1>
            <div>- Steve Jobs</div>
          </div>

          <div className="mb-6">Complex systems are easy to create. It takes a surgical approach to craft functional designs that enable users to feel good while using the web/software or an app.</div>

          <div className="mb-6">Creating simple and meaningful interfaces across screens requires careful orchestration of all the key ingredients.</div>
        </div>
        <div className="column w-11 txt-right">
          <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/02/design-quote-artwork-img.svg" className="img" alt="" />
        </div>
      </section>

      <section className="container py-4 grid has-gap-lg align-middle">
        <div className="column w-11">
          <img src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/11/img-process-ui-ux.jpg" className="img" alt="" />
        </div>
        <div className="column pl-4">
          <div className="mb-6">
            <h5>From Discovery to Development</h5>
            <h1 className="font-bolder">Handover</h1>
          </div>

          <hr className="mb-6 w-5 border-primary clr-primary border o-100 border-wide clr-dark" />

          <div className="mb-6">
            <h5>Continuing from Discovery to Development</h5>
            <div>The handover process - irrespective of who the technical team, they act as a catalyst to continue the same momentum and depth of the concept to be engineered. This is ensured by visual design to the greatest detail, functional flow and design guidelines that are ready to be shipped as a bundle.</div>
          </div>
        </div>
      </section>

      <Reviews />
    </>
  );
}
