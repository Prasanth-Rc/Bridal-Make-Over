import React from "react";
import image1 from "../assets/blog1.JPG";
import image2 from "../assets/blog2.webp";
import image3 from "../assets/blog3.JPG";
import image4 from "../assets/blog4.JPG";
import image5 from "../assets/blog5.jpg";
import image6 from "../assets/blog6.jpg";
import image7 from "../assets/blog7.jpg";
import image8 from "../assets/blog8.jpg";
import image9 from "../assets/blog9.jpg";
import image10 from "../assets/blog10.jpg";
import image11 from "../assets/blog11.jpg";
import image12 from "../assets/blog12.jpg";


const Blog = () => {
  return (
    <section id="blog" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Latest Blog Posts</h2>
        <div className="row">
          <img
            src={image1}
            className="card-img-top fade-in p-2"
            alt="Blog Post 1"
          />
          <img
            src={image2}
            className="card-img-top fade-in  p-2"
            alt="Blog Post 1"
          />
          <img
            src={image3}
            className="card-img-top fade-in p-2"
            alt="Blog Post 1"
          />
          <img
            src={image4}
            className="card-img-top fade-in p-2"
            alt="Blog Post 1"
          />
          <img
            src={image5}
            className="card-img-top fade-in p-2"
            alt="Blog Post 1"
          />
          <img
            src={image6}
            className="card-img-top fade-in p-2"
            alt="Blog Post 1"
          />
          <img
            src={image7}
            className="card-img-top fade-in p-2"
            alt="Blog Post 1"
          />
          <img
            src={image8}
            className="card-img-top fade-in p-2"
            alt="Blog Post 1"
          />
          <img
            src={image9}
            className="card-img-top fade-in p-2"
            alt="Blog Post 1"
          />
          <img
            src={image10}
            className="card-img-top fade-in p-2"
            alt="Blog Post 1"
          />
          <img
            src={image11}
            className="card-img-top fade-in p-2"
            alt="Blog Post 1"
          />
          <img
            src={image12}
            className="card-img-top fade-in p-2"
            alt="Blog Post 1"
          />

        </div>
      </div>
    </section>
  );
};

export default Blog;
