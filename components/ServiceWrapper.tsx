import React from 'react';
import MobileSizedView from 'react-mobile-sized-view';

const ServiceWrapper: React.FC = ({ children }) => {
  return (
    <MobileSizedView
      backgroundColor="#eeecdd"
      screenBackgroundColor="#eeecdd"
      screenLightShadow="none"
      screenDarkShadow="none"
    >
      {children}
    </MobileSizedView>
  );
};

export default ServiceWrapper;
