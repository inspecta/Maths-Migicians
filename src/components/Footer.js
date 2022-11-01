import React from 'react';

const divSytles = {
  textAlign: 'center', background: 'rgba(40, 0, 199, 0.05)', bottom: 0, position: 'absolute', width: '100%',
};
const footerStyles = { padding: 20, color: 'rgba(40, 0, 199, 0.74)', fontStyle: 'normal' };
const hrFooter = { borderColor: 'rgba(40, 0, 199, 0.13)' };

const Footer = () => (
  <div style={divSytles}>
    <hr style={hrFooter} />
    <p style={footerStyles}>Designed and Developed by Derrick Mulinde</p>
  </div>
);

export default Footer;
