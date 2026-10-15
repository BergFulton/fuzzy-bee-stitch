import {NavLink} from "react-router";

export default function Nav(){
    return(
        <nav>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/">About</NavLink>
        </nav>
    )
}

