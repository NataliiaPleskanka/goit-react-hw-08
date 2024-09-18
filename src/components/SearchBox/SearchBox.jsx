import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  const inputId = useId();
  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={inputId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
        id={inputId}
      ></input>
    </div>
  );
}
