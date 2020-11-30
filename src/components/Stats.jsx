import styles from "./Stats.module.css";

const Stats = ({ stats }) => {
  console.log("render stats");
  return (
    <div className={styles.container}>
      <div className={styles.statsContainer}>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/health.png"></img>
          {Math.round(stats.hp * 100) / 100}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/attack.png"></img>
          {Math.round(stats.attackdamage * 100) / 100}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/armor.png"></img>
          {Math.round(stats.armor * 100) / 100}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/attackSpeed.png"></img>
          {Math.round(stats.attackspeed * 100) / 100}
        </p>
      </div>
      <div className={styles.statsContainer}>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/mana.png"></img>
          {Math.round(stats.mp * 100) / 100}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/abilitypower.png"></img>
          {Math.round(stats.abilitydamage * 100) / 100}
        </p>
        <p className={styles.para}>
          <img className={styles.icons} src="/icons/magicResist.png"></img>
          {Math.round(stats.spellblock * 100) / 100}
        </p>

        <p className={styles.para}>
          <img className={styles.icons} src="/icons/moveSpeed.png"></img>
          {Math.round(stats.movespeed * 100) / 100}
        </p>
      </div>
    </div>
  );
};

export default Stats;
