import React, { useEffect } from 'react';

const FadeInText = ({ text }) => {
    const chars = text.split('').map((char, i) => (
        <span
          key={i}
          className="char"
          style={{ animationDelay: `${i * 6}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    
  return (
    <div id="fadein-text" className="">
      {chars}
    </div>
  );
};

export default FadeInText;