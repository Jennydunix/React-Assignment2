import { NavLink } from "react-router-dom";

import "../App.css";
const Header = () => {
  return (
    <header>
      <nav>
        <ul className="ul">
          <li className="li">
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li className="li">
            <NavLink to="/items" className="link">
              Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className="link">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
