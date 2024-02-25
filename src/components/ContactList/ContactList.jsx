import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from "../../redux/operation";
import { selectVisibleCard } from "../../redux/selectors";
import { Contact } from "../Contact/Contact";

export const ContactList = () => {
  const selectCard = useSelector(selectVisibleCard);
  const dispatch = useDispatch();
  const handleContactDelete = (contactId) => {
    dispatch(deleteCard(contactId));
  };

  return (
    <ul className={css.contactic}>
      {selectCard.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onButtonClick={() => handleContactDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};
