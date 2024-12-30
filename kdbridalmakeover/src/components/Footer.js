import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>© 2024 Bridal Makeover. All Rights Reserved.</p>
        <p>
          Follow us on :&nbsp;&nbsp;
          <a
            href="https://www.instagram.com/good_luck_bridal_makeover/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-instagram fs-3"></i>
          </a>
          <br></br>
          Email to :&nbsp;&nbsp;
          <a href="mailto:dharshinithangaraj24@gmail.com">
             dharshinithangaraj24@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
