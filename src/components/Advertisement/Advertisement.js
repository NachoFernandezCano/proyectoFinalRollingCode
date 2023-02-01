import React from "react";
import "./advertisement.css";
import adPicture from "../../Assets/images/Advertisement/Advertisement2.png"
import adPicture2 from "../../Assets/images/Advertisement/Advertisement3.png"
import adPicture3 from "../../Assets/images/Advertisement/Advertisement1.png"

const Advertisement = () => {
  return ( 
    <div className="advertisement d-none d-lg-flex align-items-center flex-column col-md-2 col-lg-2 p-0">
          <img
            className="publicity my-3"
            alt="Publicidad"
            src={adPicture}
          />
          <img
            className="publicity my-3"
            alt="Publicidad"
            src={adPicture2}
          />
          <img
            className="publicity my-3"
            alt="Publicidad"
            src={adPicture3}
          />
        </div>
   );
}
 
export default Advertisement;
