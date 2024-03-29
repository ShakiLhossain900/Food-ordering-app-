import React, { useEffect,useState } from "react";
import Card from "../UI/Card";
import MealIteam from "./MealIteam/MealIteam";
import classes from "./AvailableMeals.module.css";

//comment out the dummey meal data now time to use Http data
// const DUMMY_MEALS = [
//   //manual 4 data alrady created in firebase
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {

 // i need to work for this the fetch why not working  
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      
      const response = await fetch('https://food-app-75f79-default-rtdb.firebaseio.com/meals.json');
       
      //if error is happen that time it will be executed
      if(!response.ok) {
        throw new Error ('Something went wrong');   ///jenuric error
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false)
    };


    //async await promise try avabe kaj korbe na so onnu akta tradditional system ache atar jonnu 
    // try{
    //   fetchMeals();

    // }
    // catch(e){
    //   setIsLoading(false);
    //   setHttpError(e.message);
    // }

    //like
     fetchMeals().catch((e) => {
      setIsLoading(false);
      setHttpError(e.message);
     })



  }, []);
  
if(isLoading){
  return(
    <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  )
}

if(httpError){
  return (
    <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  )
}
  const mealsList = meals.map((meal) => (
    <MealIteam
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

