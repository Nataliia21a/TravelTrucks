import css from "./TruckerList.module.css";

export default function TruckerList() {
  return (
    <div className={css.container}>
      <ul className={css.truckerList}>
        <li className={css.truckerItem}>
          <img className={css.truckImg} src="/img/pic.jpg" alt="pig" />
          <div className={css.truckDescription}>
            <div className={css.truckTitle}>
              <h2 className={css.truckName}>Mavericks</h2>
              <div className={css.priceBlock}>
                <p className={css.truckPrice}>€8000.00</p>
                <svg className={css.svgHeart} width={26} height={24}>
                  <use href="/svg/symbol-defs.svg#icon-heart"></use>
                </svg>
              </div>
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
            <p className={css.truckText}>
              Embrace simplicity and freedom with the Mavericks panel truck...
            </p>
            <ul className={css.filterList}>
              <li className={css.filterItem}>
                <svg className={css.svgMap} width={20} height={20}>
                  <use href="/svg/symbol-defs.svg#icon-Map"></use>
                </svg>
                <p className={css.filterText}>Automatic</p>
              </li>
              <li className={css.filterItem}>
                <svg className={css.svgMap} width={20} height={20}>
                  <use href="/svg/symbol-defs.svg#icon-Map"></use>
                </svg>
                <p className={css.filterText}>Automatic</p>
              </li>
              <li className={css.filterItem}>
                <svg className={css.svgMap} width={20} height={20}>
                  <use href="/svg/symbol-defs.svg#icon-Map"></use>
                </svg>
                <p className={css.filterText}>Automatic</p>
              </li>
              <li className={css.filterItem}>
                <svg className={css.svgMap} width={20} height={20}>
                  <use href="/svg/symbol-defs.svg#icon-Map"></use>
                </svg>
                <p className={css.filterText}>Automatic</p>
              </li>
            </ul>
            <button className={css.btn} type="button">
              Show more
            </button>
          </div>
        </li>
      </ul>
      <button className={css.btnLoadMore} type="button">
        Load more
      </button>
    </div>
  );
}
