import styles from "./Stats.module.css";

const Stats = ({ stats }) => {
  console.log("render stats");
  return (
    <div className={styles.container}>
      <div className={styles.statsContainer}>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/health.png"></img> {stats.hp}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/armor.png"></img>
          {stats.armor}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/magicResist.png"></img>
          {stats.spellblock}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/mana.png"></img>
          {stats.mp}
        </p>
      </div>
      <div className={styles.statsContainer}>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/attack.png"></img>
          {stats.attackdamage}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/range.png"></img>
          {stats.attackrange}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/attackSpeed.png"></img>
          {stats.attackspeed}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/moveSpeed.png"></img>
          {stats.movespeed}
        </p>
      </div>
    </div>
  );
};

export default Stats;
