import Layout from "../../components/Layout/Layout";
import Spells from "../../components/Spells";
import Stats from "../../components/Stats";
import Skins from "../../components/Skins";
import Inventory from "../../components/Inventory";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import styles from "./champion.module.css";
import React, { Component } from "react";
import Link from "next/link";

class Champion extends Component {
  state = {
    champion: this.props.champion,
    items: this.props.items,
    version: this.props.version,
    statsbase: this.props.champion.stats,
    stats: this.props.champion.stats,
  };

  setStats = (inventory) => {
    console.log(this.state.stats);
    let stats = Object.assign({}, this.state.statsbase);
    let rabadon = false;

    inventory.map((item, index) => {
      if (item) {
        if (item.name === "Rabadon's Deathcap") rabadon = true;
        if (item.stats.FlatHPPoolMod) stats.hp = stats.hp + item.stats.FlatHPPoolMod;
        if (item.stats.FlatMPPoolMod) stats.mp = stats.mp + item.stats.FlatMPPoolMod;
        if (item.stats.FlatPhysicalDamageMod)
          stats.attackdamage = stats.attackdamage + item.stats.FlatPhysicalDamageMod;
        if (item.stats.FlatMagicDamageMod)
          stats.abilitydamage = stats.abilitydamage + item.stats.FlatMagicDamageMod;
        if (item.stats.FlatArmorMod) stats.armor = stats.armor + item.stats.FlatArmorMod;
        if (item.stats.FlatSpellBlockMod)
          stats.spellblock = stats.spellblock + item.stats.FlatSpellBlockMod;
        if (item.stats.PercentAttackSpeedMod)
          stats.attackspeed = stats.attackspeed + item.stats.PercentAttackSpeedMod;
        if (item.stats.FlatMovementSpeedMod)
          stats.movespeed = stats.movespeed + item.stats.FlatMovementSpeedMod;
      }
    });
    if (rabadon) stats.abilitydamage = stats.abilitydamage * 1.35;
    this.setState({ stats });
  };

  render() {
    console.log("render champion");
    return (
      <Layout title={this.state.champion.name}>
        <a className={styles.buttonReturn} href={`/`}>
          <ArrowLeft className={styles.ArrowLeft} />
          <p>Return</p>
        </a>
        <div className={styles.wrap}>
          <div className={styles.container_left}>
            <h3 className={styles.h3}>{this.state.champion.name}</h3>
            <h4 className={styles.h4}>{this.state.champion.title}</h4>
            <div className={styles.wrap}>
              <Skins champion={this.state.champion} />
              <Spells version={this.state.version} champion={this.state.champion} />
            </div>
            <Inventory
              setStats={this.setStats}
              version={this.state.version}
              items={this.state.items}
            />
            <Stats stats={this.state.stats} />
          </div>
        </div>
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
  let abilitydamage = 0;
  champion.stats.abilitydamage = abilitydamage;

  return {
    props: {
      champion,
      items,
      version,
    },
  };
};
