import Rescard from "./Rescard"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Body=()=>{
    //local state variable
    const [listOfRes,setResList]=useState([])
    const [filteredListOfRes,setFilteredListOfRes]=useState([])
    const [searchText,setSearchText]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5729847&lng=77.32490430000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();
        //console.log(json);
        setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    return (listOfRes.length===0)?<Shimmer/>: (
        <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }} />
                <button className="search-btn" onClick={()=>{
                    const filteredRes=listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredListOfRes(filteredRes);
                }}>Search</button>
            </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRes.filter(
                        (res)=>res.info.avgRating>4.3
                    );
                    setResList(filteredList);
                    }}>Top Rated restaurant</button>
            </div>
                <div className="res-container">
                {filteredListOfRes.map((res)=>(
                    <Link key={res.info.id} to={"/restaurants/" + res.info.id}><Rescard resData={res}/></Link> //key should be unique and mandatory
                ))}
                </div>
        </div>
    )
}

export default Body