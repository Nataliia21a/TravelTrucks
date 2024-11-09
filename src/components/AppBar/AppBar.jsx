import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import css from "../AppBar/AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.nav}>
        <Navigation />
      </div>
    </header>
  );
}
