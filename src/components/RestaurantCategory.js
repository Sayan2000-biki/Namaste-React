import { useEffect, useState } from "react";
import RestaurantCategoryItem from "./RestaurantCategoryItem";
const RestaurantCategory = ({data , showItems, setShowIndex}) => {

    console.log(data);

    // const [showItems,  setShowItems] = useState(false);
    // const[active ,  setActive] = useState(false);

  

    const handleClick = () => {

      setShowIndex();
        

    } 

    return(
        <div className=" cursor-pointer p-4 w-6/12 m-auto my-5 shadow-2xl bg-gray-50 rounded-2xl"
         onClick={handleClick}>

            <div className="flex justify-between">
                <h2 className="font-bold text-[font-size:18px]">{data.title}</h2>
                <span>↓</span>
            </div>

            <div>
               
               

                { showItems && 
                    data.itemCards.map((item) => {
                    return <RestaurantCategoryItem key={item.card.info.id} data={item} />
                    }) 
                
                }
            </div>



          

        </div>
    )

}

export default RestaurantCategory;