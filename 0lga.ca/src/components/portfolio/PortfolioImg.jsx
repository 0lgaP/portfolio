import React, { useState } from "react";

const PortfolioImg = (props) => {
  const [visible, setVisible] = useState(false);
  const [showClass, setShowClass] = useState(false)

  const { img, gif, alt } = props;
  const showImgHandler = () => {
    setVisible(prev => !prev);
    setShowClass(prev => !prev)
  };
  return (
    <div onClick={showImgHandler} className={showClass ? "clicked" : "unclicked"}>
      {visible ? <img src={gif} alt={alt} /> : <img src={img} alt={alt} />}
    </div>
  );
};

export default PortfolioImg;
