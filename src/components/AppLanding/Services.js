import React from "react";
import IconOne from "../../assets/images/icon/icon.png";
import IconTwo from "../../assets/images/icon/icon.png";
import IconThree from "../../assets/images/icon/icon.png";
import IconFour from "../../assets/images/icon/icon.png";

function ServicesHomeOne({ className }) {
  return (
    <section
      className={`appie-service-area pt-90 pb-100 ${className}`}
      id="service"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="appie-section-title text-center">
              <h3 className="appie-title">Why Our Service</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <div className="icon">
                <img src={IconOne} alt="" />
                <span>1</span>
              </div>
              <h4 className="appie-title">Fastest Delivery</h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <div className="icon">
                <img src={IconTwo} alt="" />
                <span>2</span>
              </div>
              <h4 className="appie-title">Pickup</h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <div className="icon">
                <img src={IconThree} alt="" />
                <span>3</span>
              </div>
              <h4 className="appie-title">Best Deals</h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="800ms"
            >
              <div className="icon">
                <img src={IconFour} alt="" />
                <span>4</span>
              </div>
              <h4 className="appie-title">Loyalty Program</h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHomeOne;
