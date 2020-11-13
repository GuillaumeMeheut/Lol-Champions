import Head from "next/head";
import { useState } from "react";
import ChampionsTable from "../components/ChampionsTable/ChampionsTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput";
import styles from "../styles/Home.module.css";

export default function Home({ champions }) {
  console.log(champions);

  const [keyword, setKeyword] = useState("");

  const filteredChampions = champions.filter(
    (champion) =>
      champion.name.toLowerCase().includes(keyword) ||
      champion.tags[0].toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <SearchInput onChange={onInputChange} />

      <ChampionsTable champions={filteredChampions} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json"
  );
  let champions = await res.json();

  champions = champions.data;

  champions = Object.values(champions);

  return {
    props: {
      champions,
    },
  };
};
