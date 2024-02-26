import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCards } from "../reduxe/operation";
import { selectError } from "../reduxe/selector"; // selectLoading
// import { MyLoader } from "../Loader/Loader";
// import toast, { Toaster } from "react-hot-toast";

import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [hasErrorOccurred, setHasErrorOccurred] = useState(false);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    if (error && !hasErrorOccurred) {
      error("Waiting please..."); // toast.
      setHasErrorOccurred(true);
    }
  }, [error, hasErrorOccurred]);

  return (
    <div style={{ padding: 8 }}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
