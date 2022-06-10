import React from "react";
import MealIteamForm from "../MealIteam/MealIteamForm";
import clasess from "./MealItem.module.css";

const MealIteam = (props) => {
  const price = `$ ${props.price.toFixed(2)} `;
  return (
    <li className={clasess.meal}>
      <div >
        <h3>{props.name}</h3>
        <div className={clasess.description}>{props.description}</div>
        <div className={clasess.price}>{price}</div>
      </div>
        <div>
          <MealIteamForm />
        </div>
    </li>
  );
};

export default MealIteam;
