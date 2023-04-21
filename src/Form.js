import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

const Form = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("field is required"),
    email: yup.string().required("field is required").email(),
    tel: yup
      .number()
      .typeError("Must be number!")
      .required("field is required")
      .positive()
      .integer(),
    amount: yup
      .number()
      .typeError("Must be number!")
      .required("field is required")
      .positive("Must be positive number!")
      .integer(),
    currency: yup.string().required("field is required"),
    text: yup.string().min(20, "min length of message must be 20 chars"),
    terms: yup.boolean().oneOf([true], "You must confirm the privacy policy"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        tel: "",
        amount: 0,
        currency: "",
        text: "",
        terms: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("http://localhost:3001/forms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
          .then((res) => {
            setSubmitting(false);
            if (res.ok) console.log(res, "Отправка успешна");
          })
          .catch((err) => {
            setSubmitting(false);
            console.log(err);
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="form" onSubmit={handleSubmit}>
          <h2>Отправить пожертвование</h2>
          <label htmlFor="name">Ваше имя</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && errors.name}
          <label htmlFor="email">Ваша почта</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && errors.email}
          <label htmlFor="tel">Ваш телефон</label>
          <input
            id="tel"
            name="tel"
            type="tel"
            value={values.tel}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.tel && touched.tel && errors.tel}
          <label htmlFor="amount">Количество</label>
          <input
            id="amount"
            name="amount"
            type="number"
            value={values.amount}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.amount && touched.amount && errors.amount}
          <label htmlFor="currency">Валюта</label>
          <select
            id="currency"
            name="currency"
            value={values.currency}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Выберите валюту</option>
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
            <option value="EUR">EUR</option>
          </select>
          {errors.currency && touched.currency && errors.currency}
          <label htmlFor="text">Ваше сообщение</label>
          <textarea
            id="text"
            name="text"
            value={values.text}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.text && touched.text && errors.text}
          <label className="checkbox">
            <input
              name="terms"
              type="checkbox"
              checked={values.terms}
              //   value={values.terms}
              onChange={handleChange}
              //   onBlur={handleBlur}
            />
            Соглашаетесь с политикой конфиденциальности?
          </label>
          {errors.terms && touched.terms && errors.terms}
          <button type="submit" disabled={isSubmitting}>
            Отправить
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
