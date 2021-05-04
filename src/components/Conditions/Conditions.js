import React from "react";
import classes from "./Conditions.module.css";

const Conditions = ({ responseObj, error, loading }) => {
  return (
    <div className={classes.Wrapper}>
      {error && (
        <small className={classes.Small}>Please enter a valid city.</small>
      )}
      {loading && <div className={classes.Loader} />}

      {responseObj.cod === "200" ? (
        <div>
          <p>
            <strong>{responseObj.list[0].name}</strong>
          </p>
          <p>
            It is currently {Math.round(responseObj.list[0].main.temp)} degrees
            out with {responseObj.list[0].weather[0].description}.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Conditions;
