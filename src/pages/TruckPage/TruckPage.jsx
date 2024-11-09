import { useState } from "react";
import OrderForm from "../../components/OrderForm/OrderForm";
import TruckDetails from "../../components/TruckDetails/TruckDetails";
import TruckFeatures from "../../components/TruckFeatures/TruckFeatures";
import TruckReviews from "../../components/TruckReviews/TruckReviews";
import css from "./TruckPage.module.css";

export default function DetailsPage() {
  const [isActive, setIsActive] = useState(true);

  const handleClickFeatures = () => {
    setIsActive(true);
  };
  const handleClickReviews = () => {
    setIsActive(false);
  };

  return (
    <div className={css.container}>
      <TruckDetails />
      <div className={css.truckDetails}>
        <div className={css.switcher}>
          <div className={css.tabsTitle}>
            <h3 onClick={handleClickFeatures}>Features</h3>
            <h3 onClick={handleClickReviews}>Reviews</h3>
          </div>
          <div className={css.line}></div>
        </div>
        <div className={css.tabs}>
          {isActive ? <TruckFeatures /> : <TruckReviews />}
          <OrderForm />
        </div>
      </div>
    </div>
  );
}
