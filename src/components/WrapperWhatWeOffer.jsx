import React from "react";
import CCTVCamera from "./CCTVCamera";
import Lift from "./Lift";
import Earthing from "./Earthing";

const WrapperWhatWeOffer = () => {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <CCTVCamera />
      <Lift />
      <Earthing />
    </div>
  );
};

export default WrapperWhatWeOffer;
