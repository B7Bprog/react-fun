import { useState } from "react";

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
    <div className="input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="town"
          value={town}
          onChange={(event) => {
            setTown(event.target.value);
          }}
          placeholder="Enter your town here"
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
