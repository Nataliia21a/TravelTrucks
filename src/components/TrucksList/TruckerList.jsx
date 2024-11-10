import css from "./TruckerList.module.css";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { incrementPage } from "../../redux/campers/slice";

export default function TruckerList() {
  const campers = useSelector((state) => state.campers.items);
  const page = useSelector((state) => state.campers.page);
  const limit = useSelector((state) => state.campers.limit);
  const total = useSelector((state) => state.campers.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({ page, limit }));
  }, [dispatch, page, limit]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <div className={css.container}>
      <ul className={css.truckerList}>
        {campers.map((camper) => (
          <li key={camper.id} className={css.truckerItem}>
            <img
              className={css.truckImg}
              src={camper.gallery[0].thumb}
              alt={camper.name}
            />
            <div className={css.truckDescription}>
              <div className={css.truckTitle}>
                <h2 className={css.truckName}>{camper.name}</h2>
                <div className={css.priceBlock}>
                  <p className={css.truckPrice}>€{camper.price}.00</p>
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
              <p className={css.truckText}>{camper.description}</p>
              <ul className={css.filterList}>
                {camper.AC && (
                  <li className={css.filterItem}>
                    <svg className={css.svgMap} width={20} height={20}>
                      <use href="/svg/symbol-defs.svg#icon-wind"></use>
                    </svg>
                    <p className={css.filterText}>AC</p>
                  </li>
                )}
                {camper.bathroom && (
                  <li className={css.filterItem}>
                    <svg className={css.svgMap} width={20} height={20}>
                      <use href="/svg/symbol-defs.svg#icon-ph-shower"></use>
                    </svg>
                    <p className={css.filterText}>Bathroom</p>
                  </li>
                )}
                {camper.kitchen && (
                  <li className={css.filterItem}>
                    <svg className={css.svgMap} width={20} height={20}>
                      <use href="/svg/symbol-defs.svg#icon-cup-hot"></use>
                    </svg>
                    <p className={css.filterText}>Kitchen</p>
                  </li>
                )}
                {camper.TV && (
                  <li className={css.filterItem}>
                    <svg className={css.svgMap} width={20} height={20}>
                      <use href="/svg/symbol-defs.svg#icon-tv"></use>
                    </svg>
                    <p className={css.filterText}>TV</p>
                  </li>
                )}
                {camper.radio && (
                  <li className={css.filterItem}>
                    <svg className={css.svgMap} width={20} height={20}>
                      <use href="/svg/symbol-defs.svg#icon-ui-radios"></use>
                    </svg>
                    <p className={css.filterText}>Radio</p>
                  </li>
                )}
                {camper.refrigerator && (
                  <li className={css.filterItem}>
                    <svg className={css.svgMap} width={20} height={20}>
                      <use href="/svg/symbol-defs.svg#icon-solar-fridge-outline"></use>
                    </svg>
                    <p className={css.filterText}>Refrigerator</p>
                  </li>
                )}
                {camper.microwave && (
                  <li className={css.filterItem}>
                    <svg className={css.svgMap} width={20} height={20}>
                      <use href="/svg/symbol-defs.svg#icon-lucide-microwave"></use>
                    </svg>
                    <p className={css.filterText}>Microwave</p>
                  </li>
                )}
                {camper.gas && (
                  <li className={css.filterItem}>
                    <svg className={css.svgMap} width={20} height={20}>
                      <use href="/svg/symbol-defs.svg#icon-hugeicons_gas-stove"></use>
                    </svg>
                    <p className={css.filterText}>Gas</p>
                  </li>
                )}
                {camper.water && (
                  <li className={css.filterItem}>
                    <svg className={css.svgMap} width={20} height={20}>
                      <use href="/svg/symbol-defs.svg#icon-ion-water-outline2x"></use>
                    </svg>
                    <p className={css.filterText}>Water</p>
                  </li>
                )}
              </ul>
              <Link
                to={`/catalog/${camper.id}`}
                className={css.btn}
                type="button"
              >
                Show more
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {campers.length < total && (
        <button
          className={css.btnLoadMore}
          type="button"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
}
