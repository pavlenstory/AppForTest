import React from "react"
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div>
                <NavLink to={"/main"}>Main</NavLink>
            </div>
            <div >
                <NavLink to={"/employees"}>Employees</NavLink>
            </div>
        </div>
    )
}

export default Header;
