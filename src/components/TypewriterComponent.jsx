import React from 'react';
import Typist from 'react-typist';

const TypewriterComponent = () => {
  return (
    <div className="typewriter-container">
      <Typist cursor={{ show: false }}>
        <span className="digital-text">J.A.R.V.I.S.</span>
      </Typist>
    </div>
  );
};

export default TypewriterComponent;
