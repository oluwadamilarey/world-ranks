import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/layout";
import styles from "../styles/Home.module.css";
import SearchInput from "../components/SearchInput/SearchInput";
import CountriesTable from "../components/CountriesTable/CountriesTable";

export default function Home({ countries }) {
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>
      <SearchInput placeholder="filter by name, region or subregion" />
      <CountriesTable countries={countries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "http://api.countrylayer.com/v2/all?access_key=de4ba57b05459b975a724db9bf359191"
  );
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
