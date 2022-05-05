import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div id="home" className="gpt3__header">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          exercitationem! Repudiandae, hic debitis facilis tenetur architecto
          incidunt excepturi in ad labore, dolore saepe nostrum voluptates quos
          quas sit molestiae porro.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,800 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
