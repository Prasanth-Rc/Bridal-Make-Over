import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Side – Bridal Makeover Info */}
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="fw-bold">Good Luck Bridal Makeover</h5>
            <p className="mb-1">© 2024 Bridal Makeover. All Rights Reserved.</p>

            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/good_luck_bridal_makeover/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="bi bi-instagram"></i>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917397152340"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              {/* Email */}
              <a
                href="mailto:dharshinithangaraj24@gmail.com"
                className="text-white fs-5"
              >
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>

          {/* Right Side – Developer Info */}
          <div className="col-md-6 text-center text-md-end">
            <h6 className="fw-bold text-warning">Developed & Designed By</h6>
            <p className="mb-1">
                Prasanth R
            </p>

            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/rc_kuruvila/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <i className="bi bi-instagram"></i>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917397152340"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              {/* Email */}
              <a
                href="mailto:prasanth98780@gmail.com"
                className="text-white fs-5"
              >
                <i className="bi bi-envelope"></i>
              </a>
                  <a
                href="mailto:prasanth98780@gmail.com"
                className="text-white fs-5"
              >
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
