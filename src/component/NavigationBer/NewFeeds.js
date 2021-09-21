import React from 'react';
import './NewFeeds.scss';
import { HiOutlineDesktopComputer, HiOutlineBadgeCheck } from "react-icons/hi";
import { GiWorld } from "react-icons/gi";
import { RiFlashlightLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
const NewFeeds = () => {
    return (
      <div className="New-Feeds">
        <h6 className="new-feed-hading">New Feeds</h6>
        <div className="Newsfeed">
          <span className="icon1">
            <HiOutlineDesktopComputer />
          </span>
          <a href="/"> Newsfeed</a>
        </div>
        <div className="Badges">
          <span className="icon2">
            <HiOutlineBadgeCheck />
          </span>
          <a href="/">Badges</a>
        </div>
        <div className="Explore Stories">
          <span className="icon3">
            <GiWorld />
          </span>
          <a href="/">Explore Stories</a>
        </div>
        <div className="PopularGroups">
          <span className="icon4">
            <RiFlashlightLine />
          </span>
          <a href="/">Popular Groups</a>
        </div>
        <div className="AuthorProfile">
          <span className="icon5">
            <AiOutlineUser />
          </span>
          <a href="/">Author Profile</a>
        </div>
      </div>
    );
};

export default NewFeeds;