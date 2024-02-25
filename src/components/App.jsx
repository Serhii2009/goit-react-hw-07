import "./App.css";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";

export const App = () => {
  return (
    <div style={{ padding: 8 }}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
