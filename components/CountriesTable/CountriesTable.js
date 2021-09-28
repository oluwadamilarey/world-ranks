import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import { useState } from "react";

import styles from "./CountriesTable.module.css";

const orderBy = (countries, direction, value) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
};

const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setvalue] = useState();
  const orderedCountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDrection = (value) => {
    switchDirection();
    setvalue(value);
  };

  return (
    <div>
      <div className={styles.heading}>
        <button
          className={styles.heading_name}
          onClick={() => setValueAndDrection("name")}
        >
          <div>Name</div>
          <SortArrow />
        </button>
        <button
          className={styles.heading_population}
          onClick={() => setValueAndDrection("callingCode")}
        >
          <div>Calling Code</div>
          <SortArrow direction={direction} />
        </button>
      </div>

      {orderedCountries.map((country) => (
        <div className={styles.row}>
          <div className={styles.name}>{country.name}</div>
          <div className={styles.population}>{country.callingCodes}</div>
        </div>
      ))}
    </div>
  );
};

export default CountriesTable;
