import Layout from "../../components/Layout/layout";
import styles from "./Country.module.css";

const Country = ({ country }) => {
  const extractedCountry = country[0];
  return (
    <Layout title={extractedCountry.name}>
      <div>
        <div className={styles.overview_panel}>
          <img src={extractedCountry.flag} alt={extractedCountry.name} />
          <h1>{extractedCountry.name}</h1>
          <div>{extractedCountry.region}</div>

          <div>
            <div className={styles.overview_population}>
              <div className={styles.overview_value}>
                {extractedCountry.population}
              </div>
              <div className={styles.overview_label}>Population</div>
            </div>

            <div className={styles.overview_area}>
              <div className={styles.overview_value}>{country.area}</div>
              <div className={styles.overview_label}>Area</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `http://api.countrylayer.com/v2/callingcode/${params.id}?access_key=de4ba57b05459b975a724db9bf359191&FullText=true`
  );

  const country = await res.json();
  return {
    props: {
      country,
    },
  };
};
