import React from "react";
import IconOne from "../../assets/images/icon/icon.png";
import IconTwo from "../../assets/images/icon/icon.png";
import IconThree from "../../assets/images/icon/icon.png";
import IconFour from "../../assets/images/icon/icon.png";

function ServicesHomeOne() {
  return (
    <section className="imti-service-area pt-90 pb-100" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="imti-section-title text-center">
              <h3 className="imti-title">Why Our Service</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div
              className="imti-single-service text-center mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <div className="icon">
                <img src={IconOne} alt="" />
                <span>1</span>
              </div>
              <h4 className="imti-title">Fastest Delivery</h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="imti-single-service text-center mt-30 item-2 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <div className="icon">
                <img src={IconTwo} alt="" />
                <span>2</span>
              </div>
              <h4 className="imti-title">Pickup</h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="imti-single-service text-center mt-30 item-3 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <div className="icon">
                <img src={IconThree} alt="" />
                <span>3</span>
              </div>
              <h4 className="imti-title">Best Deals</h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="imti-single-service text-center mt-30 item-4 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="800ms"
            >
              <div className="icon">
                <img src={IconFour} alt="" />
                <span>4</span>
              </div>
              <h4 className="imti-title">Loyalty Program</h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHomeOne;
