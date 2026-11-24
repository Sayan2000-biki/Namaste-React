import ResturantCard, { withLabelRestaurantCard } from "./ResturantCard ";
import resList from "../common/mock-data";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { MENU_URL } from "../common/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../common/useOnlineStatus";

const Body = () => {
  //State - Super powerful Variable

  const [listOfResturants, setListOfResturants] = useState([]);

  const [filteredRes, setFilteredRes] = useState([]);

  //State variable for storing the search input box data
  const [searchText, setSearchText] = useState("");

  // const arr = useState(resList);

  // const [listOfResturants, setListOfResturants] = arr;

  const RestaurantCardPromoted = withLabelRestaurantCard(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const jsonData = await data.json();

    setListOfResturants(
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants,
    );

    setFilteredRes(
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants,
    );

    console.log(jsonData);
  };

  // if (listOfResturants.length === 0) {
  //   return <Shimmer />;
  // }

  const status = useOnlineStatus();

  if (status === "false") return <h1>Meao meao you are offline !!</h1>

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // fetchData();
            }}
          />
          <button className="login-btn px-4 py-2 bg-green-100 m-4 rounded-2xl"
            onClick={() => {
              const filteredRes = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredRes(filteredRes);
              console.log(listOfResturants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn login-btn px-4 py-2 bg-green-100 m-4 rounded-2xl"
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
      <div className="res-container flex flex-wrap">
        {filteredRes.map((resturant) => {
          return <Link key={resturant.info.id} to={"restaurants/" + resturant.info.id}>           

            {
              resturant.info.avgRating > 4.3 ? 
              <ResturantCard key={resturant.info.id} resData={resturant} /> : 
              <RestaurantCardPromoted key={resturant.info.id} resData={resturant} />

            }
          

          </Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
