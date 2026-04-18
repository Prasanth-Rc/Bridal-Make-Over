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
              Kanika Dharshini is a passionate and detail-oriented makeup artist with a deep love for enhancing natural beauty. As an emerging talent in the bridal makeup industry, she brings a fresh perspective, creative flair, and genuine enthusiasm to every bride she works with.
            </p>
            <p>
              Specializing in bridal and event makeup, Kanika focuses on creating timeless, radiant looks that highlight each bride’s individuality and natural charm. Her personalized approach ensures that every makeup look reflects the client’s unique style and personality while maintaining elegance and grace.
            </p>
            <p>
              Based in Tamil Nadu, Kanika offers a range of professional services including bridal makeup, pre-wedding consultations, makeup trials, and on-location sessions. Her commitment to excellence, combined with her calm and friendly demeanor, ensures that every bride feels confident, comfortable, and truly beautiful on her special day.
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
