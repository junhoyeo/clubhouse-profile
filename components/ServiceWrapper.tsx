import React from 'react';
import MobileSizedView from 'react-mobile-sized-view';

const ServiceWrapper: React.FC = ({ children }) => {
  return (
    <MobileSizedView
      backgroundColor="#edeade"
      screenBackgroundColor="#edeade"
      screenLightShadow="none"
      screenDarkShadow="none"
    >
      {children}
    </MobileSizedView>
  );
};

export default ServiceWrapper;
