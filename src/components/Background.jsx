// Background.js

import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-40 overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover opacity-50" autoPlay loop muted playbackrate={1}>
        <source src="src/assets/BgVideo.mp4" type="video/mp4" />
        {/* Include additional video sources if needed (e.g., WebM, Ogg) */}
      </video>
    </div>
  );
};

export default Background;
