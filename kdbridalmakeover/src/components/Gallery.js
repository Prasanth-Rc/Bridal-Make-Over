import React from "react";

const Gallery = () => {
    return (
      <div className="gallery text-center py-5">
        {/* Full Slider Section */}
        <div id="full_slider_1" className="container-fluid p-0">
          <div id="slider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://www.bridemakeup.com/wp-content/uploads/2017/03/Bridemakeup-beautyandfashion-1500x430.jpg"
                  className="d-block w-100"
                  alt="Beauty & Fashion"
                  style={{ height: "430px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block text-end" id="quoteText">
                  <h2 style={{ fontSize: "28px" }}>
                    <i>“Let the beauty we love be what we do.”</i>
                  </h2>
                  <p>
                    <strong>- RUMI</strong>
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
                For almost two decades, Kanika Dharshini has worked as a freelance
                artist with some of the most prestigious makeup companies and has
                collaborated with numerous photographers and designers. Her work has
                been featured in publications around the world.
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
        <div
          className="container-fluid text-center text-white py-5"
          style={{
            backgroundImage: `url('https://www.bridemakeup.com/wp-content/uploads/2017/03/Bridemakeup-photo-beauty_15.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "scroll",
            height: "450px",
          }}
        >
          <div className="container">
            <h2
              style={{
                fontFamily: "Playfair Display",
                fontSize: "46px",
                fontStyle: "italic",
              }}
            >
              “Love of beauty is taste. The creation of beauty is art.”
            </h2>
            <p
              style={{
                fontFamily: "Playfair Display",
                fontSize: "36px",
                fontWeight: "400",
              }}
            >
              – R. W. EMERSON
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;