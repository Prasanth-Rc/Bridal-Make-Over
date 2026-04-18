import React from "react";
import image1 from "../assets/1.webp";
import image2 from "../assets/2.webp";
import image3 from "../assets/123.jpg";
import image4 from "../assets/234.jpg";
import image5 from "../assets/345.jpg";
import image6 from "../assets/435.jpg";

const Hero = () => {
  return (
    <div className="hero  text-center">
      <div className="container-fluid">
        <section id="full_slider_1">
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            {/* Carousel indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>

            {/* Carousel inner */}
            <div className="carousel-inner bg-dark" align="center">
              <div className="carousel-item active">
                <img
                  src={image3}
                  className="d-block w-75"
                  alt="New York Fashion Makeup Artist Natalia Garro"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image5}
                  className="d-block w-75"
                  alt="New York Fashion Makeup Artist Natalia Garro"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image4}
                  className="d-block w-75"
                  alt="New York Bridal Makeup Artist Natalia Garro"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.bridemakeup.com/wp-content/uploads/2017/03/Bridemakeup-home-full-1500x630-4.jpg"
                  className="d-block w-100"
                  alt="New York Bridal Makeup Artist Natalia Garro"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image6}
                  className="d-block w-75"
                  alt="New York Beauty Makeup Artist Natalia Garro"
                />
              </div>
              {/* <div className="carousel-item">
                <img
                  src="https://www.bridemakeup.com/wp-content/uploads/2017/03/Bridemakeup-home-full-1500x630-6.jpg"
                  className="d-block w-100"
                  alt="New York Beauty Makeup Artist Natalia Garro"
                />
              </div> */}
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </div>

      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <div className="text-center mb-4">
            <p className="lead text-warning">
              Transform your bridal look with the best makeover artists.
            </p>
            <a href="/artist" className="button-link">
              <span className="me-2">About Artist</span>
              <span className="fa fa-arrow-right"></span>
            </a>
          </div>
        </div>

        <div className="col-md-1"></div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="text-center">
              <h3 className="fw-bold">Bridal Makeup</h3>
            <img className="img-fluid" src={image1} alt="Bridal Makeup" />
            <p className="text-center">
              Kanika Dharshini aims to craft an elegant and timeless bridal look that celebrates every bride’s individuality. 
                  By thoughtfully blending shades and textures that complement the bride’s personal style and skin tone, Kanika creates a luminous, picture-perfect finish. 
                  Her approach focuses on enhancing natural beauty with a modern touch — helping each bride feel effortlessly confident, graceful, and authentically herself on her special day.
            </p>
            <a
              href="#"
              className="btn btn-outline-dark btn-lg"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <div className="text-center">
              <h3 className="fw-bold">Beauty Makeup</h3>
            <img className="img-fluid" src={image2} alt="Beauty Makeup" />
            <p className="text-center">
              Kanika Dharshini is a talented and rising bridal makeup artist who specializes in highlighting natural beauty and bringing out every bride’s inner glow. 
                With a creative eye and a personalized touch, she crafts flawless makeup looks that perfectly capture each bride’s individuality, style, and confidence — making their special day truly unforgettable.
            </p>
            <a
              href="#"
              className="btn btn-outline-dark btn-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
