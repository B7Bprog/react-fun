import { useState } from "react";
import styles from "../styles/InputForm.module.css";
export default function Input({ setTownQuery, setErrorState }) {
  const [town, setTown] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorState(null);
    console.log(town);
    setTownQuery(town);
    setTown("");
  };
  return (
    <div className={styles.input}>
      <form onSubmit={handleSubmit}>
        <input
          id={styles.inputField}
          type="text"
          name="town"
          value={town}
          onChange={(event) => {
            setTown(event.target.value);
          }}
          placeholder="Enter your town here"
        ></input>
        <button id={styles.submitButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
