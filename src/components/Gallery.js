import React from "react";
import image1 from "../assets/Radiant Beauty Portrait.png";
import image2 from "../assets/ChatGPT Image Oct 27, 2025, 04_03_14 PM.png";

const Gallery = () => {
    return (
      <div className="gallery text-center py-5">
        {/* Full Slider Section */}
        <div id="full_slider_1" className="container-fluid p-0">
          <div id="slider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image1}
                  className="d-block w-100"
                  alt="Beauty & Fashion"
                  style={{ height: "430px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block text-end" id="quoteText">
                  <h2 style={{ fontSize: "28px" }}>
                    <i>“Let your love for beauty shine through in all that you do.”</i>
                  </h2>
                  <p>
                    <strong>- Kanika Dharshini</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* About Section */}
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  fontStyle: "italic",
                }}
              >
                Beauty & Fashion
              </h1>
              <p>
               With nearly two decades of experience, Kanika Dharshini has established herself as a versatile freelance artist in the world of beauty and fashion. 
                    She has collaborated with renowned photographers, designers, and leading makeup brands, creating exceptional looks that have been showcased in prestigious publications across the globe.
              </p>
            </div>
          </div>
        </div>
  
        {/* Services Section */}
        <div className="container py-5">
          <h4 className="text-center">Services</h4>
          <hr
            className="mx-auto"
            style={{ width: "50px", borderColor: "#444444" }}
          />
          <div className="row text-center">
            <div className="col-md-4">
              <p>Beauty</p>
            </div>
            <div className="col-md-4">
              <p>Engagement</p>
            </div>
            <div className="col-md-4">
              <p>Pre Wedding</p>
            </div>
            <div className="col-md-4">
              <p>Fashion Shows</p>
            </div>
            <div className="col-md-4">
              <p>Bridal</p>
            </div>
            <div className="col-md-4">
              <p>Party and Events</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <a
              href="#"
              className="btn btn-primary"
            >
              More Info
            </a>
          </div>
        </div>
  
        {/* Quote Section */}
        <div className="container-fluid p-0 position-relative text-center text-white">
          <img
            src={image2}
            alt="Inspiring Beauty"
            className="w-100"
            style={{
              height: "450px",
              objectFit: "cover",
              filter: "brightness(60%)", // optional dark overlay for text visibility
            }}
          />
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ width: "90%" }}
          >
            <h2
              style={{
                fontFamily: "Playfair Display",
                fontSize: "46px",
                fontStyle: "italic",
              }}
            >
              “Where love inspires, beauty comes alive.”
            </h2>
            <p
              style={{
                fontFamily: "Playfair Display",
                fontSize: "36px",
                fontWeight: "400",
              }}
            >
              – Prasanth
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;
