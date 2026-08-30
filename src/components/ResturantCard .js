import { CDN_URL } from "../common/constants";

//const {resName , cuisine} = props // Destructring from js
const ResturantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, cloudinaryImageId, avgRatingString } = resData?.info; // optional chainning

  // console.log(resData);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-card-img" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRatingString}</h5>
    </div>
  );
};

export default ResturantCard;
