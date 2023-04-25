import React from "react";
import "./advertisement.css";
import adPicture from "../../assets/images/advertisement/Advertisement2.png"
import adPicture2 from "../../assets/images/advertisement/Advertisement3.png"
import adPicture3 from "../../assets/images/advertisement/Advertisement1.png"

const Advertisement = () => {
  return ( 
    <div className="advertisement d-none d-lg-flex align-items-center flex-column col-md-2 col-lg-2 p-0">
          <img
            className="publicity"
            alt="Publicidad"
            src={adPicture}
          />
          <img
            className="publicity"
            alt="Publicidad"
            src={adPicture2}
          />
          <img
            className="publicity"
            alt="Publicidad"
            src={adPicture3}
          />
        </div>
   );
}
 
export default Advertisement;
