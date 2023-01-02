import React from "react";
//import heroThumbOne from "../../assets/images/hero-thumb-1.png";
//import heroThumbTwo from "../../assets/images/hero-thumb-2.png";
import trafficThumb from "../../assets/images/traffic-thumb-2.png";

function HeroHomeOne({ className }) {
  return (
    <>
      <section className={`appie-hero-area ${className || ""}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="appie-hero-content p-3">
                <h1 className="appie-title">
                  Satisfy Your Cravings, <br />
                  Anytime, <br />
                  Anywhere.
                </h1>
                <ul>
                  <li>
                    <a href="#top">
                      <i className="fab fa-apple" /> Download for iOS
                    </a>
                  </li>
                  <li>
                    <a className="item-2" href="#top">
                      <i className="fab fa-google-play" /> Download for Android
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-hero-thumb pt-3">
                <div
                  className="thumb wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <img src={trafficThumb} alt="" />
                </div>
                <div
                  className="thumb-2 wow animated fadeInRight"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHomeOne;
