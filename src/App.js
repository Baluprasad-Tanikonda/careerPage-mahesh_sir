import React from 'react';
import ProfileHeader from './components/profileHeader/ProfileHeader';
import ProfileDetails from './components/profileFooter/ProfileDetails';
import WhatWillYouGet from './components/whatWillYouGet/WhatWillYouGet';
import Bonuses from './components/Bonuses/Bonuses';
import Faq from './components/Faq/Faq';
import Banner from './components/banner/Banner';

const App = () => {
  return (
    <div>
      <ProfileHeader/>
      <WhatWillYouGet/>
      <Bonuses/>
      <ProfileDetails/>
      <Faq/>
    </div>
  );
};

export default App;