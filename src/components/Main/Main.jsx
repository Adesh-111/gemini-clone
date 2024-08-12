import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

function Main() {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello World.</span>
          </p>
          <p>How can I help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest any Tourist place</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize the essay for water shortage</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Give some tasks related to computer science field</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>What is react?</p>
            <img src={assets.question_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Ask about Something..." />
            <div>
              <img src={assets.gallery_icon} alt="add-image" />
              <img src={assets.mic_icon} alt="voice" />
              <img src={assets.send_icon} alt="send" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini(Clone) may display inaccurate info, including about people, so double-check its response. Your privacy and Gemini App
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
