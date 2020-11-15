import styles from "./Spells.module.css";

const placeholdereN = () => {};

const Spells = ({ champion }) => {
  return (
    <div className={styles.wrap}>
      <img
        className={styles.img}
        src={`http://ddragon.leagueoflegends.com/cdn/10.23.1/img/passive/${champion.passive.image.full}`}
        alt=""
      />

      <img
        className={styles.img}
        src={`http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/${champion.spells[0].image.full}`}
        alt=""
      />
      <img
        className={styles.img}
        src={`http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/${champion.spells[1].image.full}`}
        alt=""
      />
      <img
        className={styles.img}
        src={`http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/${champion.spells[2].image.full}`}
        alt=""
      />
      <img
        className={styles.img}
        src={`http://ddragon.leagueoflegends.com/cdn/10.23.1/img/spell/${champion.spells[3].image.full}`}
        alt=""
      />
    </div>
  );
};

export default Spells;
