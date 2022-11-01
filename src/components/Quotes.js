import React from 'react';

const quotesStyles = { textAlign: 'center' };
const headerStyles = {
  marginBottom: 40,
  color: 'rgba(40, 0, 199, 0.4)',
};
const pStyles = {
  fontStyle: 'italics',
};

const Quotes = () => (
  <div style={quotesStyles}>
    <h2 style={headerStyles}>Maths qoute of the day!</h2>
    <hr className="hrQuotes" />
    <p style={pStyles}>
      If it seems easy, you are doing it wrong!
    </p>
    <hr className="hrQuotesBottom" />
  </div>
);

export default Quotes;
