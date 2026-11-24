import { CDN_URL } from "../common/constants";

const RestaurantCategoryItem = ({data}) =>{

    // console.log(data);

    return(
        <div className="border-b border-black-50 flex justify-between items-center">
            <div className="py-5 my-4 w-9/12">
                <h3 className="font-bold">{data.card.info.name}</h3>
                <h4>{data.card.info.price/100}</h4>
                <p>{data.card.info.description}</p>
            </div>
            <div className="w-3/12 relative">
                <img className="w-40 h-auto" src={CDN_URL +  data.card.info.imageId} />

                <div className="absolute p-2 bg-black text-white right-10 top-18 shadow-2xl">
                    <button>Add +</button>
                </div>

            </div>
        </div>
    )
}

export default RestaurantCategoryItem