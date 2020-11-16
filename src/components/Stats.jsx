import styles from "./Stats.module.css";

const Stats = ({ champion }) => {
  return (
    <div className={styles.container}>
      <div className={styles.statsContainer}>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/health.png"></img> {champion.stats.hp}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/armor.png"></img>
          {champion.stats.armor}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/magicResist.png"></img>
          {champion.stats.spellblock}
        </p>{" "}
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/mana.png"></img>
          {champion.stats.mp}
        </p>
      </div>
      <div className={styles.statsContainer}>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/attack.png"></img>
          {champion.stats.attackdamage}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/range.png"></img>
          {champion.stats.attackrange}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/attackSpeed.png"></img>
          {champion.stats.attackspeed}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/moveSpeed.png"></img>
          {champion.stats.movespeed}
        </p>
      </div>
    </div>
  );
};

export default Stats;
