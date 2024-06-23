import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (values, actions) => {
    handleAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <div className={css.container}>
        <Form className={css.form}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <Field className={css.input} type="text" id="name" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label className={css.label} htmlFor="number">
            Number
          </label>
          <Field className={css.input} type="text" id="number" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
          <div className={css.containerButton}>
            <button className={css.button} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
