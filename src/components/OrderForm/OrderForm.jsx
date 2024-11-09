// import { Form } from "react-router-dom";
import css from "./OrderForm.module.css";
import { Field, Formik, Form } from "formik";

export default function OrderForm() {
  return (
    <div className={css.container}>
      <div className={css.orderFormInfo}>
        <h3 className={css.orderFormTitle}>Book your campervan now</h3>
        <p className={css.orderFormDescription}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          date: "",
          description: "",
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="username"
            placeholder="Name*"
          />
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <Field
            className={css.input}
            type="text"
            name="date"
            placeholder="Booking date*"
          />
          <Field
            className={css.inputComment}
            as="textarea"
            type="text"
            name="description"
            placeholder="Comment"
            maxLength={300}
            rows={4}
          />
          <button className={css.formBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
