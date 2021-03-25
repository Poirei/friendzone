import React from "react";
import "./InfoCard.scss";

const InfoCard = (props) => {
  return (
    <div className="info-card">
      <img className="info-card__img" src={props.photoUrl} alt="" />
      <div className="info-card__name">
        Name: <span>{props.name}</span>
      </div>
      <div className="info-card__gender">
        Gender: <span>{props.gender}</span>
      </div>
      <div className="info-card__email">
        Email: <span>{props.email}</span>
      </div>
      <div className="info-card__age">
        Age: <span>{props.age}</span>
      </div>
      <div className="info-card__phone">
        Phone: <span>{props.phone}</span>
      </div>
      <div className="info-card__cell">
        Cell: <span>{props.cell}</span>
      </div>
      <div className="info-card__street">
        Street: <span>{props.street}</span>
      </div>
      <div className="info-card__city">
        City: <span>{props.city}</span>
      </div>
      <div className="info-card__state">
        State: <span>{props.state}</span>
      </div>
      <div className="info-card__country">
        Country: <span>{props.country}</span>
      </div>
    </div>
  );
};

export default InfoCard;
