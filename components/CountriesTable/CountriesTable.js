import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import { useState } from "react";

import styles from "./CountriesTable.module.css";

const orderBy = (countries, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) =>
      a.callingCodes > b.callingCodes ? 1 : -1
    );
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) =>
      a.callingCodes > b.callingCodes ? -1 : 1
    );
  }
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
  const orderedCountries = orderBy(countries, "desc");
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Name</div>
          <SortArrow />
        </button>
        <button className={styles.heading_population}>
          <div>Callng Code</div>
          <SortArrow direction="asc" />
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
