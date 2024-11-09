import css from "./TruckDetails.module.css";

export default function TruckDetails() {
  return (
    <div className={css.container}>
      <div className={css.truckDescription}>
        <div className={css.truckTitle}>
          <h2 className={css.truckName}>Mavericks</h2>
        </div>
        <div className={css.truckDetails}>
          <div className={css.truckReviews}>
            <svg className={css.svgStar} width={16} height={16}>
              <use href="/svg/symbol-defs.svg#icon-star"></use>
            </svg>
            <p>4.4(2 Reviews)</p>
          </div>
          <div className={css.truckLocation}>
            <svg className={css.svgMap} width={16} height={16}>
              <use href="/svg/symbol-defs.svg#icon-Map"></use>
            </svg>
            <p>Kyiv, Ukraine</p>
          </div>
        </div>
        <p className={css.truckPrice}>€8000.00</p>
      </div>
      <ul className={css.imgList}>
        <li>
          <img className={css.truckImg} src="/img/pic.jpg" alt="truck" />
        </li>
        <li>
          <img className={css.truckImg} src="/img/pic.jpg" alt="truck" />
        </li>
      </ul>
      <p className={css.truckText}>
        Embrace simplicity and freedom with the Mavericks panel truck, an ideal
        choice for solo travelers or couples seeking a compact and efficient way
        to explore the open roads. This no-frills yet reliable panel truck
        offers the essentials for a comfortable journey, making it the perfect
        companion for those who value simplicity and functionality.
      </p>
    </div>
  );
}
