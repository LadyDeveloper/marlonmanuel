import React from "react";
import Items from "./Items";
import { houses } from "../data";

function Card() {
  return (
    <div className="card">
      {houses.map((house) => (
        <Items
          key={house.id}
          img={house.imgCard}
          alt={house.alt}
          price={house.price}
          beds={house.beds}
          baths={house.baths}
          sqft={house.sqft}
          address={house.address}
          city={house.city}
          zipcode={house.zipcode}
        />
      ))}
    </div>
  );
}

export default Card;
