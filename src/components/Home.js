import React from 'react';
import './HomeStyles.css';

const Home = () => (
  <div className="home">
    <h1>Welcome to Math Magicians!</h1>
    <p>This a simple Single Page Application developed using the React Library.</p>
    <div className="more">
      Perform simple mathematical operations of addition, substraction, division, multiplication,
      negatations and percentages.
      The numbers and operations are displayed as buttons. Click on your preferred numbers and
      operations to perform an operations.
    </div>
  </div>
);

export default Home;
