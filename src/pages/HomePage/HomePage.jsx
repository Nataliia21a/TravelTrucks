import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homePage}>
      <div className={css.heroText}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.description}>
          You can find everything you want in our catalog
        </p>
      </div>
      <button className={css.button}>View Now</button>
    </div>
  );
}
