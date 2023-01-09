import React from "react";
import trafficThumb from "../../assets/images/feature.png";

function FeaturesHomeFour() {
  return (
    <>
      <section className="imti-features-area pt-90 pb-100" id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="imti-section-title text-center">
                <h3 className="imti-title">Why Our App</h3>
              </div>
            </div>
          </div>
          <div className="row mt-30 align-items-center">
            <div className="col-lg-6">
              <div className="imti-features-boxes ">
                <div className="imti-features-box-item">
                  <h4 className="title">Well Integrated</h4>
                </div>
                <div className="imti-features-box-item item-2">
                  <h4 className="title">Clean and modern Design</h4>
                </div>
                <div className="imti-features-box-item item-3">
                  <h4 className="title">Light and dark mode</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="imti-features-thumb wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <img src={trafficThumb} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesHomeFour;
