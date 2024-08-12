import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
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
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? <div className="loader">
                <hr />
                <hr />
                <hr />
              </div> : <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Ask about Something..."
            />
            <div>
              <img src={assets.gallery_icon} alt="add-image" />
              <img src={assets.mic_icon} alt="voice" />
              <img
                onClick={() => onSent()}
                src={assets.send_icon}
                alt="send"
                onClick={() => onSent()}
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini(Clone) may display inaccurate info, including about people,
            so double-check its response. Your privacy and Gemini App
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
