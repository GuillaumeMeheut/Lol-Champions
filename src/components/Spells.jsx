import styles from "./Spells.module.css";
import Image from "next/image";

const Spells = ({ champion, version }) => {
  console.log("render spells");
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.captionContainer}>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version[0]}/img/passive/${champion.passive.image.full}`}
            alt="spell_1"
            width="64"
            height="64"
          />
          <span className={styles.captionDesc}>Passive</span>
        </div>

        <p className={styles.description}>{champion.passive.description}</p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.captionContainer}>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version[0]}/img/spell/${champion.spells[0].image.full}`}
            alt="spell_1"
            width="64"
            height="64"
          />
          <span className={styles.captionDesc}>Q</span>
        </div>
        <p className={styles.description}>{champion.spells[0].description}</p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.captionContainer}>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version[0]}/img/spell/${champion.spells[1].image.full}`}
            alt="spell_1"
            width="64"
            height="64"
          />
          <span className={styles.captionDesc}>W</span>
        </div>
        <p className={styles.description}>{champion.spells[1].description}</p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.captionContainer}>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version[0]}/img/spell/${champion.spells[2].image.full}`}
            alt="spell_1"
            width="64"
            height="64"
          />
          <span className={styles.captionDesc}>E</span>
        </div>
        <p className={styles.description}>{champion.spells[2].description}</p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.captionContainer}>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version[0]}/img/passive/${champion.passive.image.full}`}
            alt="spell_1"
            width="64"
            height="64"
          />
          <span className={styles.captionDesc}>R</span>
        </div>
        <p className={styles.description}>{champion.spells[3].description}</p>
      </div>
    </div>
  );
};

export default Spells;
