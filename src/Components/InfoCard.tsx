import React, { ReactElement } from "react";

interface InfoCardProps {
  label: string;
  value: string;
  icon: ReactElement;
}

const InfoCard: React.FC<InfoCardProps> = ({ label, value, icon }) => {
  return (
    <div className="infoCard">
      {icon}
      <div className="infoCard__content">
        <p className="infoCard__label">{label}</p>
        <p className="infoCard__value">{value}</p>
      </div>
    </div>
  );
};

export default InfoCard;
