import React from 'react';
import './Account.scss';
import { FiSettings } from "react-icons/fi";
import { SiGoogleanalytics } from "react-icons/si";
import { MdChatBubble } from "react-icons/md";
const Account = () => {
    return (
        <div className="Account">
            <h6>Account</h6>
        <div className="Settings">
          <span>
            <FiSettings />
          </span>
          <a href="/">Settings</a>
        </div>
        <div className="Analytics">
          <span>
            <SiGoogleanalytics />
          </span>
          <a href="/">Analytics</a>
        </div>
        <div className="Chat">
          <span>
            <MdChatBubble />
          </span>
          <a href="/">Chat</a>
        </div>
      </div>
    );
};

export default Account;