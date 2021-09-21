import React from 'react';
import { FiInbox } from "react-icons/fi";
import { AiOutlineHome, AiOutlineYoutube } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import './MorePages.scss'
const MorePages = () => {
    return (
      <div className="More-Pages">
        <h6>More Pages</h6>
        <div className="Email-Box">
          <span>
            <FiInbox />
          </span>
          <a href="/">Email Box</a>
        </div>
        <div className="Near-hotel">
          <span>
            <AiOutlineHome />
          </span>
          <a href="/">Near Hotel</a>
        </div>
        <div className="Latest-Event">
          <span>
            <VscLocation />
          </span>
          <a href="/">Latest Event</a>
        </div>
        <div className="Live-Stream">
          <span>
            <AiOutlineYoutube />
          </span>
          <a href="/">Live Stream</a>
        </div>
      </div>
    );
};

export default MorePages;