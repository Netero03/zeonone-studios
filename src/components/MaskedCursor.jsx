import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MaskedCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
      const [cursorVariant, setCursorVariant] = useState("default");
    
    
      useEffect(() => {
        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, []);
    
      const variants = {
        default: {
          x: mousePosition.x ,
          y: mousePosition.y ,
        },
        text: {
          height: 150,
          width: 150,
          x: mousePosition.x ,
          y: mousePosition.y ,
          backgroundColor: "yellow",
          mixBlendMode: "difference"
        }
      }
    
      const textEnter = () => setCursorVariant("text");
      const textLeave = () => setCursorVariant("default");
    
    
      return (
          <motion.div
            className='cursor'
            variants={variants}
            animate={cursorVariant}
          />
  );
};

export default MaskedCursor;
