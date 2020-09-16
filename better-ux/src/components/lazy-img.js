import React, { useEffect, useState } from "react";

export const LazyImg = ({ lowSrc, highSrc, previewClass, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();

    img.src = highSrc;
    img.onload = function () {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
  }, [highSrc]);

  if (isLoading) {
    return <img className={previewClass} src={lowSrc} {...props} />;
  } else {
    return <img src={highSrc} {...props} />;
  }
};
