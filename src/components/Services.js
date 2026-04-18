import React from "react";
import hairstyle from "../assets/hairstyle.webp";
import image2 from "../assets/4.jpg";
import image3 from "../assets/nailart.webp";

const Services = () => {
  return (
    <div className="servies  text-center py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src={hairstyle}
                className="card-img-top"
                alt="Makeup"
              />
              <div className="card-body">
                <h5 className="card-title">Hairstyling</h5>
                <p className="card-text">
                  Professional hairstyling and makeup services to help you shine with confidence on your big day.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={image2}
                className="card-img-top"
                alt="Bridal"
              />
              <div className="card-body">
                <h5 className="card-title">Bridal Makeup</h5>
                <p className="card-text">
               Experience flawless, radiant bridal makeup tailored to your unique style — because every bride deserves to look unforgettable.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={image3}
                className="card-img-top"
                alt="Nail Art"
              />
              <div className="card-body">
                <h5 className="card-title">Nail Art</h5>
                <p className="card-text">
                Exquisite bridal nail art crafted to enhance your elegance and complete your wedding-day glow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
