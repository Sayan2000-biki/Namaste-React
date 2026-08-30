import ResturantCard from "./ResturantCard ";
import resList from "../common/mock-data";
import { useState, useEffect } from "react";

const Body = () => {
  //State - Super powerful Variable

  // const [listOfResturants, setListOfResturants] = useState(resList);

  const arr = useState(resList);

  const [listOfResturants, setListOfResturants] = arr;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const jsonData = await data.json();
    console.log(
      jsonData.data.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants,
    );

    setListOfResturants(
      jsonData.data.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants,
    );
  };

  //Normal JS Variable
  let listOfResturantsJs = [
    {
      info: {
        id: "123456",
        name: "Pizza Paradise",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
        locality: "MG Road",
        areaName: "Central District",
        costForTwo: "₹400 for two",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        avgRating: 3.5,
        avgRatingString: "4.3",
      },
    },

    {
      info: {
        id: "123457",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
        locality: "MG Road",
        areaName: "Central District",
        costForTwo: "₹400 for two",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        avgRating: 4.3,
        avgRatingString: "4.3",
      },
    },

    {
      info: {
        id: "123458",
        name: "MCD",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
        locality: "MG Road",
        areaName: "Central District",
        costForTwo: "₹400 for two",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        avgRating: 4.3,
        avgRatingString: "4.3",
      },
    },
  ];

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4.4,
            );
            setListOfResturants(filteredList);
            // console.log(listOfResturants);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => {
          return <ResturantCard key={resturant.info.id} resData={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
