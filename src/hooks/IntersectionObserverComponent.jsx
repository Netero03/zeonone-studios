import React, { useRef, useEffect, useState } from 'react';
import useIntersection from '../hooks/useIntersection';

const IntersectionObserverComponent = ({ children }) => {
  const [ref, isIntersecting] = useIntersection({ threshold: 0 });
  return (
    <div ref={ref} className={`film-container cursor-pointer ${isIntersecting ? 'in-view' : ''}`}>
      {children(isIntersecting)}
    </div>
  );
};

export default IntersectionObserverComponent;
