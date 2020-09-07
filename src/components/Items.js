import React from "react";
import houses from "../data";

function Items({ img, alt, price, beds, baths, sqft, address, city, zipcode }) {
  console.log('Image' + price)
  return (
    <div className="items-card">
      <img src={process.env.PUBLIC_URL + img} className="img-card" alt="House" />
      <div className="card-title">
        <p className="price">{price}</p>
        <p className="subtitle">
          <span> {beds}</span> bds
          <span>{baths}</span> ba
          <span>{sqft} </span> sqft
        </p>
      </div>

      <p className="card-description">
        {address} {city} {zipcode}
      </p>
    </div>
  );
}

export default Items;
