import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          repellendus vero ad velit, quos quo quod dicta quia dolor ullam ea hic
          optio asperiores. Corporis fugiat asperiores ratione ea praesentium?"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyound your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto corporis deleniti odio consectetur ex. Repellendus recusandae quo harum natus."
        />
        <Feature
          title="Knowledgebase"
          text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          corporis deleniti odio consectetur ex. Repellendus recusandae quo
          harum natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis."
        />
        <Feature
          title="Education"
          text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          corporis deleniti odio consectetur ex. Repellendus recusandae quo
          harum natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
