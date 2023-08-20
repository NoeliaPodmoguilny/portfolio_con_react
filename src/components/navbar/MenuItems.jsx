import { Link } from "react-router-dom";
import { dataLinks } from "./dataLinks.js";


export const MenuItems = ({ handleMenuToggle }) => {
    return (
        <div className="d-flex">
            <ul className="navbar-nav ml-auto justify-content-center">
                {
                    dataLinks.map(({ to, name }) => (
                        <li key={name} className="nav-item text-center">
                            <Link
                                to={to}
                                className="nav-link items-hover subtitle"
                                onClick={handleMenuToggle}
                            >
                                {name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
