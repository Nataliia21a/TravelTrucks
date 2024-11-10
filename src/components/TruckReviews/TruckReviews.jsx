import css from "./TruckReviews.module.css";
import clsx from "clsx";

export default function TruckReviews({ camper }) {
  return (
    camper && (
      <div className={css.container}>
        <ul className={css.reviewsList}>
          {camper.reviews.map((review, index) => (
            <li key={index}>
              <div className={css.userInfo}>
                <div className={css.userIcon}>
                  <p className={css.firstLater}>{review.reviewer_name[0]}</p>
                </div>
                <div>
                  <p className={css.name}>{review.reviewer_name}</p>
                  <div className={css.svgList}>
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className={clsx(css.svgStar, {
                          [css.active]: starIndex < review.reviewer_rating,
                        })}
                        width={16}
                        height={16}
                      >
                        <use href="/svg/symbol-defs.svg#icon-star"></use>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.textReview}>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
