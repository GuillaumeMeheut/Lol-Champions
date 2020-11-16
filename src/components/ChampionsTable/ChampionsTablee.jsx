import React, { Component } from "react";
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@material-ui/icons";
import styles from "./ChampionsTable.module.css";
import Link from "next/link";

class AllWorks extends Component {
  state = {
    value: null,
    direction: null,
    champions: this.props.champions,
  };

  orderBy = (aarchampions, value, direction) => {
    // if (value === "name" || value === "tags") {
    //   if (direction === "desc") {
    //     return [...champions].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    //   }

    //   if (direction === "asc") {
    //     return [...champions].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    //   }
    // } else if (value === "hp" || value === "mp" || value === "armor" || value === "attackdamage") {
    //   if (direction === "desc") {
    //     return [...champions].sort((a, b) => {
    //       return a.stats[value] - b.stats[value];
    //     });
    //   }

    //   if (direction === "asc") {
    //     return [...champions].sort((a, b) => {
    //       return b.stats[value] - a.stats[value];
    //     });
    //   }
    // }
    const champions = [aarchampions];

    this.setState({ champions: champions });
    console.log(this.state.champions);
  };

  SortArrow = (direction) => {
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

  render() {
    this.orderBy(this.state.champions, this.state.value, this.state.direction);

    const switchDirection = () => {
      if (!this.state.direction || this.state.direction === "asc") {
        this.setState({ value: "desc" });
      } else if (direction === "desc") {
        this.setState({ value: "asc" });
      }
    };

    const setValueAndDirection = (value) => {
      switchDirection();
      this.setState({ value: value });
    };

    return (
      <div>
        <div className={styles.heading}>
          <button className={styles.heading_name} onClick={() => setValueAndDirection("name")}>
            <div>Name</div>
            {this.SortArrow(this.state.direction)}
          </button>

          <button className={styles.heading_type} onClick={() => setValueAndDirection("tags")}>
            <div>Type</div>
            {this.SortArrow(this.state.direction)}
          </button>

          <select
            className={styles.heading_stats}
            name="Stats"
            onChange={() => setValueAndDirection(event.target.value)}
          >
            <option value="hp">Health</option>
            <option value="mp">Mana</option>
            <option value="armor">Armor</option>
            <option value="attackdamage">AD</option>
          </select>
        </div>

        {this.state.champions.map((champion) => {
          return (
            <Link href={`/champion/${champion.id}`}>
              <div
                className={styles.row}
                key={champion.id}
                style={{
                  backgroundImage:
                    "url(" +
                    `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg` +
                    ")",
                }}
              >
                <div className={styles.name}>
                  <p>{champion.name}</p>
                </div>
                <div className={styles.type}>
                  <p>{champion.tags[0]}</p>
                </div>
                <div className={styles.stats}>
                  <p>{champion.stats.armor}</p>
                </div>
                <div className={styles.filter} />
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default AllWorks;
