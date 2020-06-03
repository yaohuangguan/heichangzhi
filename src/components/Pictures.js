import React from "react";
import Images from "./Images";
const Pictures = () => {
  return (
    <div>
      {Images.map((image) => (
        <div className='image-section'>
          <img width="200px" height="200px" src={image.src} alt={image.date} />
          <span>{image.date}</span>
          <span>
              {image.content}
              </span>
        </div>
      ))}
    </div>
  );
};

export default Pictures;
