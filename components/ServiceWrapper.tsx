import React from 'react';
import MobileSizedView from 'react-mobile-sized-view';

const ServiceWrapper: React.FC = ({ children }) => {
  return (
    <MobileSizedView
      backgroundColor="#f2efe4"
      screenBackgroundColor="#f2efe4"
      screenLightShadow="none"
      screenDarkShadow="none"
    >
      {children}
    </MobileSizedView>
  );
};

export default ServiceWrapper;
