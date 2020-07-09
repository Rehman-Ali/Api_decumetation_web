import React from "react";
import logo from "../image/logo.png";

export default function Footer() {
  return (
    <footer className="lyt-footer sticky bottom-0 container" style={{ lineHeight: 1.8 }}>
      <div className="grid has-gap-lg">
        <div className="column">
          <div>
            <img src={logo} alt="Logo" className="img" />
          </div>
          <div className="my-4">
            <div>Get Free Estimation</div>
            <div className="clr-primary">hello@QuellXCode.com</div>
          </div>
          <div>
            <div>Call</div>
            <div>
              {/* todo : Add Flags */}
              <span className="inline-block mr-1rem pl-7px">X</span> +91 79 6191 6000
            </div>
            <div>
              {/* todo : Add Flags */}
              <span className="inline-block mr-1rem pl-7px">X</span> +1 (424) 283 4679
            </div>
            <div>
              {/* todo : Add Flags */}
              <span className="inline-block mr-1rem pl-7px">X</span> +61 (02) 8317 1138
            </div>
          </div>
        </div>
        <div className="column pt-4">
          <h6 className="font-bolder">Company</h6>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            About Us
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Careers
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Blog
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Branding
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            How to Engage
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            We Work With
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Testimonials
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            FAQs
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Policies
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Sitemap
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Contact
          </a>
        </div>
        <div className="column pt-4">
          <h6 className="font-bolder">Services</h6>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Joomla Development
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Android App Development
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            AngularJS Development
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Augmented Reality
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            AWS Development
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            BigCommerce
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            CakePHP Development
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            CodeIgniter Development
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Cross-platform Apps
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            .Net Development
          </a>
        </div>
        <div className="column pt-4">
          <h6 className="font-bolder">Hire Developer Team</h6>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Android App Developers
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Android Game Developers
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            AngularJS Developers
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Asp.Net Developers
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Drupal Developers
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Ionic App Developers
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            iOS Application Developers
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            iOS Game Developers
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Java Developers
          </a>
          <a href="#" className="block txt-decor-none clr-hover-focus-primary">
            Magento Developers
          </a>
        </div>
      </div>
      <div className="pt-2 flex align-middle justify-between border-top">
        <div>(C) 2020, QuellXCode Infotech Limited</div>
        <div className="flex">
          <i className="mr-1rem inline-flex icon ri-lg mr-2 ri-dribbble-line" />
          <i className="mr-1rem inline-flex icon ri-lg mr-2 ri-facebook-fill" />
          <i className="mr-1rem inline-flex icon ri-lg mr-2 ri-github-fill" />
          <i className="mr-1rem inline-flex icon ri-lg mr-2 ri-instagram-line" />
          <i className="mr-1rem inline-flex icon ri-lg mr-2 ri-behance-fill" />
          <i className="mr-1rem inline-flex icon ri-lg mr-2 ri-skype-fill" />
        </div>
      </div>
    </footer>
  );
}
