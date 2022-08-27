import React from "react";
import "./About.css";
import images from "../../constants/images";

const About = () => {
  return (
    <section className="about section-p bg-dark" id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={images.about_main_img} alt="" />
          </div>
          <div className="content-right">
            <div className="section-t">
              <h3>About Us</h3>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              officia sit, incidunt similique alias minus nesciunt, repellat
              suscipit blanditiis, facere ullam dolore iste. Temporibus
              accusamus laboriosam quo similique quasi minus excepturi itaque,
              error iure magnam unde consectetur blanditiis fugit sit ut
              praesentium optio voluptatibus, dignissimos, eum porro placeat?
              At, ratione.
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              omnis necessitatibus voluptatum tempora optio quaerat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
