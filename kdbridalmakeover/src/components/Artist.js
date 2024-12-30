import React from "react";
import image1 from "../assets/kd.jpg";
import { Link } from "react-router-dom";

const Artist = () => {
  return (
    <section id="Artist" className="artist">
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Artist Image */}
          <div className="col-md-4">
            <img
              src={image1} // Replace with actual image URL
              alt="Artist Pic"
              className="img-fluid rounded-circle" // Make the image responsive and rounded
            />
          </div>

          {/* Artist Bio Content */}
          <div className="col-md-8">
            <h2 className="display-4">Kanika Dharshini</h2>
            <h4 className="text-muted">Professional Makeup Artist</h4>
            <p className="mt-3">
              Kanika Dharshini is a passionate and dedicated makeup artist with
              a strong love for enhancing natural beauty. Though new to the
              bridal makeup industry, Kanika brings fresh creativity and
              enthusiasm to every project. Specializing in bridal makeup, she
              focuses on creating timeless, radiant looks that complement each
              bride's unique personality and features.
            </p>
            <p>
              Kanika's approach is centered around making her clients feel
              confident and beautiful, using a personalized touch to ensure each
              look reflects their individual style. Whether it's for a wedding,
              engagement shoot, or any special event, Kanika’s attention to
              detail and commitment to perfection ensure a flawless finish that
              lasts all day and night.
            </p>
            <p>
              Based in Tamil Nadu, Kanika is available for bridal makeup,
              pre-wedding consultations, makeup trials, and on-location
              services. She strives to provide a relaxed, enjoyable experience
              for every bride, ensuring they feel truly special on their big
              day.
            </p>

            {/* Link to contact page */}
            <Link to="/contact" className="btn btn-primary mt-3">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
