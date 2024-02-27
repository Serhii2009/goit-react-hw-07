import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectCards } from "../../reduxe/selector";
import { addCard } from "../../reduxe/operation";

import { toast } from "react-hot-toast";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const allCards = useSelector(selectCards);

  const handleSubmit = (values, actions) => {
    const isCardExist = allCards.some((card) => card.name === values.name);
    if (isCardExist) {
      toast.error("Contact with this name already exists.", {
        position: "top-right",
      });
      actions.resetForm();
    } else {
      const newContact = {
        id: values.id,
        name: values.name,
        number: values.number,
      };

      dispatch(addCard(newContact));
      actions.resetForm();
    }
  };
  const initialValues = { id: "", name: "", number: "" };
  const nameFieldId = useId();
  const numberFieldId = useId();

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 symb long")
      .required("This is a required field"),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        "Phone number must have only numbers and in xxx-xxx-xxxx format"
      )
      .required("This is a required field"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form>
        <div className="inputBox">
          <label htmlFor={nameFieldId}>Name</label>
          <Field id={nameFieldId} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className="inputBox">
          <label htmlFor={numberFieldId}>Number</label>
          <Field id={numberFieldId} type="text" name="number" />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
