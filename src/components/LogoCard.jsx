import React from "react";

function LogoCard({ imgUrl }) {
  return (
    <div className="w-40">
      <img src={imgUrl} alt="" />
    </div>
  );
}

export default LogoCard;
