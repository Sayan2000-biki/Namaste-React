import { CDN_URL } from "../common/constants";

//const {resName , cuisine} = props // Destructring from js
const ResturantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, cloudinaryImageId, avgRatingString } = resData?.info; // optional chainning

  // console.log(resData);
  return (
    <div className="res-card p-4 m-4 w-[250] rounded-2xl bg-gray-50 hover:bg-gray-200" style={{}}>
      <img className="res-card-img" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRatingString}</h5>
    </div>
  );
};

export const withLabelRestaurantCard = (ResturantCard) => {

  return (props) => {

    return (
      <div>
        <label>Top Restaurant</label>
        <ResturantCard {...props}/>
      </div>

    )

  }

}

export default ResturantCard;
