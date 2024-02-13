import { LOGO_URL } from "../utils/constants"

const Header=()=>{

    return(
        <div>
            <div className="logo-container">
                <img src={LOGO_URL}/>
            </div>
            <div>
                <ul>
                    <li>Online Status: </li>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Grocery</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;