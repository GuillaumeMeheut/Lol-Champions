import styles from "./Skins.module.css";
import React, { Component } from "react";

class Skins extends Component {
  state = {
    skinNum: this.props.champion.skins[0].num,
  };

  render() {
    return (
      <div
        className={styles.allContainer}
        style={{
          backgroundImage:
            "url(" +
            `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.props.champion.id}_${this.state.skinNum}.jpg` +
            ")",
        }}
      >
        <div className={styles.container}>
          {this.props.champion.skins.map((skin) => {
            return (
              <img
                key={skin.num}
                className={styles.icons}
                onClick={() => this.setState({ skinNum: skin.num })}
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.props.champion.id}_${skin.num}.jpg`}
              ></img>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Skins;
