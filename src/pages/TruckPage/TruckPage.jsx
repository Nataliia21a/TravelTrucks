import { useEffect, useState } from "react";
import OrderForm from "../../components/OrderForm/OrderForm";
import TruckDetails from "../../components/TruckDetails/TruckDetails";
import TruckFeatures from "../../components/TruckFeatures/TruckFeatures";
import TruckReviews from "../../components/TruckReviews/TruckReviews";
import css from "./TruckPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";

export default function DetailsPage() {
  const [isActive, setIsActive] = useState(true);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const handleClickFeatures = () => {
    setIsActive(true);
  };
  const handleClickReviews = () => {
    setIsActive(false);
  };

  const camper = useSelector((state) => state.campers.selectedCamper);

  return (
    camper && (
      <div className={css.container}>
        <TruckDetails camper={camper} />
        <div className={css.truckDetails}>
          <div className={css.switcher}>
            <div className={css.tabsTitle}>
              <h3 onClick={handleClickFeatures}>Features</h3>
              <h3 onClick={handleClickReviews}>Reviews</h3>
            </div>
            <div className={css.line}></div>
          </div>
          <div className={css.tabs}>
            {isActive ? (
              <TruckFeatures camper={camper} />
            ) : (
              <TruckReviews camper={camper} />
            )}
            <OrderForm />
          </div>
        </div>
      </div>
    )
  );
}
