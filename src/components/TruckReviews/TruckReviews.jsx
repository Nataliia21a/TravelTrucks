import css from "./TruckReviews.module.css";

export default function TruckReviews() {
  return (
    <div className={css.container}>
      <ul className={css.reviewsList}>
        <li>
          <div className={css.userInfo}>
            <div className={css.userIcon}>
              <p className={css.firstLater}>B</p>
            </div>
            <div>
              <p className={css.name}>Bob</p>
              <div className={css.svgList}>
                <svg className={css.svgStar} width={16} height={16}>
                  <use href="/svg/symbol-defs.svg#icon-star"></use>
                </svg>
                <svg className={css.svgStar} width={16} height={16}>
                  <use href="/svg/symbol-defs.svg#icon-star"></use>
                </svg>
                <svg className={css.svgStar} width={16} height={16}>
                  <use href="/svg/symbol-defs.svg#icon-star"></use>
                </svg>
                <svg className={css.svgStar} width={16} height={16}>
                  <use href="/svg/symbol-defs.svg#icon-star"></use>
                </svg>
                <svg className={css.svgStar} width={16} height={16}>
                  <use href="/svg/symbol-defs.svg#icon-star"></use>
                </svg>
              </div>
            </div>
          </div>
          <p className={css.textReview}>
            The Mavericks panel truck was a perfect choice for my solo road
            trip. Compact, easy to drive, and had all the essentials. The
            kitchen facilities were sufficient, and the overall experience was
            fantastic.
          </p>
        </li>
        <li>
          <div className={css.userInfo}>
            <div className={css.userIcon}>
              <p className={css.firstLater}>B</p>
            </div>
            <div>
              <p className={css.name}>Bob</p>
              <div className={css.svgList}>
                <svg className={css.svgStar} width={16} height={16}>
                  <use href="/svg/symbol-defs.svg#icon-star"></use>
                </svg>
                <svg className={css.svgStar} width={16} height={16}>
                  <use href="/svg/symbol-defs.svg#icon-star"></use>
                </svg>
                <svg className={css.svgStar} width={16} height={16}>
                  <use href="/svg/symbol-defs.svg#icon-star"></use>
                </svg>
                <svg className={css.svgStar} width={16} height={16}>
                  <use href="/svg/symbol-defs.svg#icon-star"></use>
                </svg>
                <svg className={css.svgStar} width={16} height={16}>
                  <use href="/svg/symbol-defs.svg#icon-star"></use>
                </svg>
              </div>
            </div>
          </div>
          <p className={css.textReview}>
            The Mavericks panel truck was a perfect choice for my solo road
            trip. Compact, easy to drive, and had all the essentials. The
            kitchen facilities were sufficient, and the overall experience was
            fantastic.
          </p>
        </li>
      </ul>
      <p>Bob</p>
    </div>
  );
}
