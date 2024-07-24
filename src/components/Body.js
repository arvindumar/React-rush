import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resObj from "../ulits/mockData";
import { useState, useEffect } from "react";
const Body = () => {
  let [resObje, setresObje] = useState(resObj);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.927517368278828&lng=80.93874458223581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    var json = await data.json();
    const set_data =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setresObje(set_data);
  };

  return (
    <div className="body">
      <div className="search">
        {/* <input type="text" placeholder="Type something to search..." /> */}
        <button
          className="top-resbtn"
          onClick={() => {
            setresObje(
              resObje.filter((reslist) => reslist.info.avgRating >= 4.3)
            );
            // resObje = resObje.filter((reslist) => reslist.info.avgRating > 3);
            console.log("here are the data populated--", resObje);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resObje?.map((resCards) => {
          return <RestaurantCard key={resCards.info.id} resData={resCards} />;
        })}
      </div>
    </div>
  );
};

export default Body;
