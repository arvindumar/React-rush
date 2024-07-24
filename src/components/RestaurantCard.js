import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../ulits/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  //de-structuring and optional-chaining

  return (
    <div className="restaurant" style={{ width: "300px", height: "300px" }}>
      <img
        className="food-image"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant food photo"
        // style={{ width: "100px", height: "100px" }}
      />
      <h4>{name}</h4>
      <h6>
        Cuisines:<i>{cuisines.join(", ")}</i>{" "}
      </h6>

      <h3>
        "{resData.info.avgRating} <i>Stars</i>"
      </h3>
      <hr />
      <span className="time-arrival">{resData.info.sla.deliveryTime} mins</span>
      <hr />
      <p style={{ marginTop: "10px" }}>Price-{resData.info.costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
