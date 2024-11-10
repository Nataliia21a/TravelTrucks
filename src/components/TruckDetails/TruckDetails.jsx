import css from "./TruckDetails.module.css";

export default function TruckDetails({ camper }) {
  return (
    <div className={css.container}>
      <div className={css.truckDescription}>
        <div className={css.truckTitle}>
          <h2 className={css.truckName}>{camper.name}</h2>
        </div>
        <div className={css.truckDetails}>
          <div className={css.truckReviews}>
            <svg className={css.svgStar} width={16} height={16}>
              <use href="/svg/symbol-defs.svg#icon-star"></use>
            </svg>
            <p>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.truckLocation}>
            <svg className={css.svgMap} width={16} height={16}>
              <use href="/svg/symbol-defs.svg#icon-Map"></use>
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.truckPrice}>€{camper.price}.00</p>
      </div>
      <ul className={css.imgList}>
        {camper.gallery.map((photo, index) => (
          <li key={index}>
            <img className={css.truckImg} src={photo.thumb} alt={camper.name} />
          </li>
        ))}
      </ul>
      <p className={css.truckText}>{camper.description}</p>
    </div>
  );
}
