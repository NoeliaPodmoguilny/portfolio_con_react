import { Link } from "react-router-dom";
import { dataLinks } from "./dataLinks.js";


export const MenuItems = ({ handleMenuToggle}) => {
    return (
        <div> 
            <ul className="navbar-nav ml-auto">
                {
                    dataLinks.map( ({id, to, name}) => (
                        <li className="nav-item"> 
                            <Link 
                                key={id}
                                to={to}
                                className="nav-link items-hover subtitle" 
                                onClick={handleMenuToggle}
                            > {name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
