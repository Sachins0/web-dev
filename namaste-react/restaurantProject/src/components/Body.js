import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"


const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState([])

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5729847&lng=77.32490430000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json=await data.json()

        setListOfRestaurants(
            json?.data?.cards[1]?.gridElements?.infoWithStyle?.restaurants
        )

        return(
            <div className="body">
                <div>
                {listOfRestaurants.map((restaurant)=>(
                    <RestaurantCard resData={restaurant?.info}/>
                ))}
                    
                </div>
            </div>
        )
    }
}