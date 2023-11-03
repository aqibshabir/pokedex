import React from "react";

const Card = ({ id, name, image, type, type2 }) => {
  return (
    <div className="cardContainer">
      <div className="numberImageWrapper">
        <div className="number">
          <p>#0{id}</p>
        </div>
        <div className="image">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="name">
        <h2>{name[0].toUpperCase() + name.substr(1)}</h2>
      </div>
      <div className="type">
        <h3>
          {type[0].toUpperCase() + type.substr(1)}
          {type2 ? ` + ${type2[0].toUpperCase() + type2.substr(1)}` : ""}
        </h3>
      </div>
    </div>
  );
};

export default Card;
