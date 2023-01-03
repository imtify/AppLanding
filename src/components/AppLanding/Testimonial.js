import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import user from "../../assets/images/testimonial.png";

function TestimonialHomeOne() {
  const sliderRef = useRef();
  const sliderNext = () => {
    sliderRef.current.slickNext();
  };
  const sliderPrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="imti-testimonial-area pt-100 pb-160" id="testimonial">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="imti-testimonial-slider"
              style={{ position: "relative" }}
            >
              <span
                className="prev slick-arrow"
                style={{ display: "block" }}
                onClick={sliderNext}
                role="button"
                tabIndex="0"
              >
                <i className="fal fa-arrow-left" />
              </span>
              <Slider ref={sliderRef} dots arrows={false} {...settings}>
                <div className="imti-testimonial-item text-center">
                  <div className="author-info">
                    <img src={user} alt="" />
                    <h5 className="title">Jason Response</h5>
                    <span>April 14, 2022</span>
                  </div>
                  <div className="text">
                    <p>Top-notch and very professional. Recommended!</p>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="imti-testimonial-item text-center">
                  <div className="author-info">
                    <img src={user} alt="" />
                    <h5 className="title">Jason Response</h5>
                    <span>April 14, 2022</span>
                  </div>
                  <div className="text">
                    <p>Excellent Service. Got delivery before estimate time.</p>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="imti-testimonial-item text-center">
                  <div className="author-info">
                    <img src={user} alt="" />
                    <h5 className="title">Jason Response</h5>
                    <span>April 14, 2022</span>
                  </div>
                  <div className="text">
                    <p>
                      Very Good Service. The App is so user-friendly.
                      Recommended!
                    </p>
                    <ul>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
              </Slider>
              <span
                onClick={sliderPrev}
                role="button"
                tabIndex="-1"
                className="next slick-arrow"
                style={{ display: "block" }}
              >
                <i className="fal fa-arrow-right" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialHomeOne;
