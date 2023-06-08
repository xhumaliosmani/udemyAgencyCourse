import React from 'react'
import Card from './Card'
import image1 from "../../images/Price/1.png";
import image2 from "../../images/Price/2.png";
import image3 from "../../images/Price/3.png";

const CardComponent = () => {
  return (
    <div>
      <Card
        image={image1}
        Package={"Growth Package"}
        Price={"$350"}
        Feature1={"Advanced Algorithmic Solutions"}
        Feature2={"Trained Personnel Support"}
        Feature3={"Innovative Technology Integration"}
        Feature4={"Powerful Analytics Capabilities"}
        Feature5={"Personalized Solutions"}
        Feature6={"Continuous Innovation"}
        iconColor1={"text-green-500"}
        iconColor2={"text-green-500"}
        iconColor3={"text-green-500"}
        iconColor4={"text-green-300"}
        iconColor5={"text-green-300"}
        iconColor6={"text-green-300"}
        buttonBg={"bg-gray-300"}
        hoverBgButton={"hover:bg-gray-200"}
      />
      <Card
        image={image2}
        Package={"Standard Package"}
        Price={"$1200"}
        Feature1={"Advanced Algorithmic Solutions"}
        Feature2={"Trained Personnel Support"}
        Feature3={"Innovative Technology Integration"}
        Feature4={"Powerful Analytics Capabilities"}
        Feature5={"Personalized Solutions"}
        Feature6={"Continuous Innovation"}
        iconColor1={"text-green-500"}
        iconColor2={"text-green-500"}
        iconColor3={"text-green-500"}
        iconColor4={"text-green-500"}
        iconColor5={"text-green-300"}
        iconColor6={"text-green-300"}
        buttonBg={"bg-green-400"}
        hoverBgButton={"hover:bg-green-500"}
        buttonTextColor={"text-white"}
      />

      <Card
        image={image3}
        Package={"Enterprise Package"}
        Price={"$7500"}
        Feature1={"Advanced Algorithmic Solutions"}
        Feature2={"Trained Personnel Support"}
        Feature3={"Innovative Technology Integration"}
        Feature4={"Powerful Analytics Capabilities"}
        Feature5={"Personalized Solutions"}
        Feature6={"Continuous Innovation"}
        iconColor1={"text-green-500"}
        iconColor2={"text-green-500"}
        iconColor3={"text-green-500"}
        iconColor4={"text-green-500"}
        iconColor5={"text-green-500"}
        iconColor6={"text-green-500"}
        buttonBg={"bg-gray-300"}
        hoverBgButton={"hover:bg-gray-200"}
      />
    </div>
  );
}

export default CardComponent