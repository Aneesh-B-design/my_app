import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';

import 'flickity/css/flickity.css'; // Import Flickity CSS

const Carousel = ({ children }) => {
  const flickityRef = useRef(null);

  useEffect(() => {
    flickityRef.current = new Flickity('.carousel', {
      wrapAround: true, // Example option
    });

    return () => {
      // Destroy Flickity instance on unmount
      if (flickityRef.current) {
        flickityRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    // Reload Flickity cells when children change
    if (flickityRef.current) {
      flickityRef.current.reloadCells();
      flickityRef.current.resize();
    }
  }, [children]);

  return (
    <div className="carousel">
      {children}
    </div>
  );
};

export default Carousel;
