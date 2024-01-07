import { res_img } from "../utils/constants";

const Rescard=(props)=>{
    const {resData}=props;
    const {
     cloudinaryImageId,
     name,
     cuisines,
     avgRating,
     costForTwo,
     sla,
    } = resData?.info;
   /* ?. if resData is undefined*/
     return(
         <div className="rescard" style={{backgroundColor: "#f0f0f0"}}>
         <img className="resimg" src={
             res_img
             + cloudinaryImageId}/>
             <h3>{name}</h3>
             <h4>{cuisines?cuisines.join(", "):"no cuisines"}</h4>
             {/*condition for no cuisines */}
             <h4>{avgRating} stars</h4>
             <h4>{sla.deliveryTime} minutes</h4>
             <h4>{costForTwo}</h4>
         </div>
     )
 }

 export default Rescard;