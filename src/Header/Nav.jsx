import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
