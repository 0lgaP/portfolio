import React, { useState } from "react";
import './portfolio.css';

const PortfolioImg = (props) => {
  const [visible, setVisible] = useState(false);
  const [showClass, setShowClass] = useState(false)

  const { img, gif, alt, className } = props;
  const showImgHandler = () => {
    setVisible(prev => !prev);
    setShowClass(prev => !prev)
  };
  return (
    <div onClick={showImgHandler} className={showClass ? "clicked" : "unclicked"}>
      {visible ? <img src={gif} alt={alt} className={className}/> : <img src={img} alt={alt} className={className}/>}
    </div>
  );
};

export default PortfolioImg;
