import React from "react";
import { Formik } from "formik";

const Form = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        tel: "",
        amount: "",
        currency: "",
        text: "",
        terms: false,
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
        <form className="form">
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
          <label htmlFor="email">Ваша почта</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="tel">Ваш телефон</label>
          <input
            id="tel"
            name="tel"
            type="tel"
            value={values.tel}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="amount">Количество</label>
          <input
            id="amount"
            name="amount"
            type="number"
            value={values.amount}
            onChange={handleChange}
            onBlur={handleBlur}
          />
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
            <option value="RUB">RUB</option>
          </select>
          <label htmlFor="text">Ваше сообщение</label>
          <textarea
            id="text"
            name="text"
            value={values.text}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label className="checkbox">
            <input
              name="terms"
              type="checkbox"
              value={values.terms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            Соглашаетесь с политикой конфиденциальности?
          </label>
          <button type="submit">Отправить</button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
