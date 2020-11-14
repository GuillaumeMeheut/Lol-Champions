import Layout from "../../components/Layout/Layout";
import Spells from "../../components/Spells";
import style from "./champion.module.css";

const Champion = ({ champion }) => {
  console.log(champion);
  return (
    <Layout title={champion.name}>
      <div>
        <h3 className={style.h3}>{champion.name}</h3>
        <h4 className={style.h4}>{champion.title}</h4>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
          alt=""
        />
        <Spells champion={champion} />
      </div>
    </Layout>
  );
};

export default Champion;

export async function getStaticPaths() {
  const response = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");

  const version = await response.json();

  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${version[0]}/data/en_US/champion.json`
  );

  let champions = await res.json();

  champions = champions.data;

  champions = Object.values(champions);

  // Get the paths we want to pre-render based on posts
  const paths = champions.map((champion) => ({
    params: { id: champion.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const response = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");

  const version = await response.json();

  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${version[0]}/data/en_US/champion/${params.id}.json`
  );
  let champion = await res.json();

  champion = champion.data[params.id];

  return {
    props: {
      champion,
    },
  };
};
