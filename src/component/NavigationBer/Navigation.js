import React from 'react';
import Account from './Account';
import MorePages from './MorePages';
//import Home from './HomeF/Home';
import './Navigaton.scss';
import NewFeeds from './NewFeeds';

const Navigation = ({children}) => {
    return (
      <div className="grope-siteber-page">
        <div className="navigation">
          <span>
            <NewFeeds />
          </span>
          <span>
          
            <MorePages />
          </span>
          <span>
          
            <Account />
          </span>
        </div>
        <div className="allpage-main-content">{children}</div>
      </div>
    );
};

export default Navigation;