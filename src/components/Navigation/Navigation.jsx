import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";

const makeNavlinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.linkActive);
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink className={makeNavlinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={makeNavlinkClass} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
}
