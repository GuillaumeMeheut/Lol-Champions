import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@material-ui/icons";
import styles from "./ChampionsTable.module.css";
import { useState } from "react";
import Link from "next/link";

const orderBy = (champions, value, direction) => {
  if (value === "name" || value === "tags") {
    if (direction === "desc") {
      return [...champions].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }

    if (direction === "asc") {
      return [...champions].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }
  }
  // else if (value === "stats") {
  //   if (direction === "desc") {
  //     return [...champions].sort((a, b) => {
  //       return a[value] - b[value];
  //     });
  //   }

  //   if (direction === "asc") {
  //     return [...champions].sort((a, b) => {
  //       return b[value] - a[value];
  //     });
  //   }
  // }

  return champions;
};

const SortArrow = ({ direction }) => {
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

const ChampionsTable = ({ champions }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderedChampions = orderBy(champions, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name} onClick={() => setValueAndDirection("name")}>
          <div>Name</div>
          <SortArrow direction={direction} />
        </button>

        <button className={styles.heading_type} onClick={() => setValueAndDirection("tags")}>
          <div>Type</div>
          <SortArrow direction={direction} />
        </button>
      </div>

      {orderedChampions.map((champion) => {
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
              <div className={styles.filter} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ChampionsTable;
