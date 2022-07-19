import key from "../api-key.json";
import { useState } from "react";
import { useEffect } from "react";
import ErrorMessage from "./ErrorMessage";

const Temp = ({ townQuery, setErrorState, errorState, setTownQuery }) => {
  const [resultTemp, setResultTemp] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${key.key}&q=${townQuery}&aqi=no`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("got data back");
        console.log("this is data: ", data.current.temp_c);
        setResultTemp(data.current.temp_c);
        setLoading(false);
      })
      .catch((err) => {
        setErrorState({ err });
      });
  }, [townQuery]);
  if (errorState) {
    return <ErrorMessage />;
  }
  return loading ? (
    <p>Retrieving temperature for {townQuery}...</p>
  ) : (
    <div className="temp">
      <p>
        It's {resultTemp} degrees in {townQuery} right now.
      </p>
    </div>
  );
};

export default Temp;
