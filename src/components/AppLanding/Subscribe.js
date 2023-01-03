import React from "react";
//import projectThumb from "../../assets/images/subscribe.jpg";

function ProjectHomeOne({ className }) {
  return (
    <>
      <section className={`imti-project-area pb-100 ${className || ""}`}>
        <div className="container pt-5 mt-5">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="imti-project-box wow animated slideInUp"
                data-wow-duration="1000ms"
                data-wow-delay="0ms"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="imti-project-content">
                      <h3 className="title">
                        Subscribe to Get Exiciting Offer
                      </h3>
                      <form action="#">
                        <div className="input-box mt-30">
                          <input type="text" placeholder="Your Email" />
                          <button type="button">Subscribe</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectHomeOne;
