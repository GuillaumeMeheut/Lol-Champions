import Layout from "../../components/Layout/Layout";
import Spells from "../../components/Spells";
import Stats from "../../components/Stats";
import Skins from "../../components/Skins";
import Shop from "../../components/Shop";
import styles from "./champion.module.css";
import React, { Component } from "react";

class Champion extends Component {
  state = {
    champion: this.props.champion,
    items: this.props.items,
    version: this.props.version,
    stats: this.props.champion.stats,
  };

  setStats = (inventory) => {
    let stats = Object.assign({}, this.state.stats);
    inventory.map((item, index) => {
      if (item) {
        if (item.name === "B. F. Sword") {
          stats.attackdamage = stats.attackdamage + item.stats.FlatPhysicalDamageMod;
          // this.setState({ stats });
        }
      }
    });
  };

  render() {
    console.log("render champion");
    return (
      <Layout title={this.state.champion.name}>
        <div className={styles.wrap}>
          <div className={styles.container_left}>
            <h3 className={styles.h3}>{this.state.champion.name}</h3>
            <h4 className={styles.h4}>{this.state.champion.title}</h4>
            <div className={styles.wrap}>
              <Skins champion={this.state.champion} />
              <Spells version={this.state.version} champion={this.state.champion} />
            </div>
            <Shop setStats={this.setStats} version={this.state.version} items={this.state.items} />
          </div>
        </div>

        <Stats stats={this.state.stats} />
      </Layout>
    );
  }
}

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

  let res2 = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${version[0]}/data/en_US/item.json`
  );

  let champion = await res.json();
  let items = await res2.json();

  items = items.data;
  items = Object.values(items);
  champion = champion.data[params.id];

  return {
    props: {
      champion,
      items,
      version,
    },
  };
};
