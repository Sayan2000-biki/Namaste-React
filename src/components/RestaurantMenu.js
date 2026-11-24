import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../common/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurentMenu = () => {

  const [showIndex , setShowIndex] = useState(1);


  const {resId} = useParams();
  console.log(resId)

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, avgRating, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
    return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"; 
  })

  // console.log(category);

  return (
    <div className="menu">
      <h1 className="text-center font-bold text-3xl pt-10">{name}</h1>
      <p className="text-center">{cuisines.join(" , ")}</p>
      {/* <h2>Menu</h2> */}
      <ul>
        {category.map((cat , index) => {
          return(
             <RestaurantCategory key={cat.card.card.title} data = {cat.card.card}
              showItems={showIndex === index ? true : false}
              setShowIndex = {() => setShowIndex(index)}
              />
            
          )
         
        })}

        {/* <li>
          {itemCards[0].card.info.name}
        </li> */}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
