import React from "react";
import ImageWrapper from "./ImageWrapper";
import Image from "../assets/roadster.png";

const Roadster = () => {
  return (
    <div className="roadster">
      <ImageWrapper
        title="Mission to Mars"
        subtitle={"subtitle"}
        link={Image}
        externalLink={"roadster"}
        showButton={true}
      />
    </div>
  );
};

export default Roadster;
