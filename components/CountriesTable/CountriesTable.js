import styles from "./CountriesTable.module.css";

const CountriesTable = ({ countries }) => {
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Name</div>
        </button>
      </div>
    </div>
  );
};

export default CountriesTable;
