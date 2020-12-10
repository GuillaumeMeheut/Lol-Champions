import styles from "./Stats.module.css";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import React, { Component } from "react";
import Image from "next/image";

class Stats extends Component {
  state = {
    stats: [
      { id: 1, myStats: this.props.stats.hp, img: "/icons/health.png", arrow: null },
      { id: 2, myStats: this.props.stats.mp, img: "/icons/mana.png", arrow: null },
      { id: 3, myStats: this.props.stats.attackdamage, img: "/icons/attack.png", arrow: null },
      {
        id: 4,
        myStats: this.props.stats.abilitydamage,
        img: "/icons/abilitypower.png",
        arrow: null,
      },
      { id: 5, myStats: this.props.stats.armor, img: "/icons/armor.png", arrow: null },
      { id: 6, myStats: this.props.stats.spellblock, img: "/icons/magicResist.png", arrow: null },
      { id: 7, myStats: this.props.stats.attackspeed, img: "/icons/attackspeed.png", arrow: null },
      { id: 8, myStats: this.props.stats.movespeed, img: "/icons/moveSpeed.png", arrow: null },
    ],
  };

  componentDidUpdate(prevProps) {
    if (this.props.stats !== prevProps.stats) {
      let stats = [...this.state.stats];
      let propsStats = [
        this.props.stats.hp,
        this.props.stats.mp,
        this.props.stats.attackdamage,
        this.props.stats.abilitydamage,
        this.props.stats.armor,
        this.props.stats.spellblock,
        this.props.stats.attackspeed,
        this.props.stats.movespeed,
      ];
      let prevPropsStats = [
        prevProps.stats.hp,
        prevProps.stats.mp,
        prevProps.stats.attackdamage,
        prevProps.stats.abilitydamage,
        prevProps.stats.armor,
        prevProps.stats.spellblock,
        prevProps.stats.attackspeed,
        prevProps.stats.movespeed,
      ];
      for (let i = 0; i < stats.length; i++) {
        stats[i].myStats = propsStats[i];
        if (propsStats[i] < prevPropsStats[i]) {
          stats[i].arrow = (
            <ArrowDropDown style={{ color: "red" }} className={styles.ArrowDropDown} />
          );
        } else if (propsStats[i] > prevPropsStats[i]) {
          stats[i].arrow = (
            <ArrowDropUp
              style={{ color: "var(--text-color-secondary)" }}
              className={styles.ArrowDropUp}
            />
          );
        } else stats[i].arrow = null;
      }
      this.setState({ stats });
    }
  }

  render() {
    console.log("render stats");
    return (
      <div className={styles.container}>
        {this.state.stats.map((stats) => {
          return (
            <div className={styles.para} key={stats.id}>
              <div className={styles.arrowContainer}>{stats.arrow}</div>
              <div className={styles.icons}>
                <Image src={stats.img} width={12} height={12} />
              </div>
              <p>{Math.round(stats.myStats * 100) / 100}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Stats;
