import css from "./SearchBox.module.css";
import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../../reduxe/filterSlice";
import { selectStatusFilter } from "../../reduxe/selector";

export const SearchBox = () => {
  const id = useId();
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(setStatusFilter(value));
  };

  return (
    <div>
      {/* <label htmlFor={id}>Finde contacts by name</label> */}
      <input
        id={id}
        className={css.serchInput}
        placeholder="Find users"
        value={filter}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};
