import { useState } from "react";
import ChampionsTable from "../components/ChampionsTable/ChampionsTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput";

export default function Home({ champions }) {
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
      <SearchInput onChange={onInputChange} placeholder="Filter by Name, Type" />

      <ChampionsTable champions={filteredChampions} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");

  let version = await response.json();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/en_US/champion.json`
  );
  let champions = await res.json();

  champions = champions.data;

  champions = Object.values(champions);

  return {
    props: {
      champions,
    },
    revalidate: 10000,
  };
};
