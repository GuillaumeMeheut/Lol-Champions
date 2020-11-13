import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from "./SearchInput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded />
      <input className={styles.input} {...rest} placeholder="Filter by Name, Type"></input>
    </div>
  );
};

export default SearchInput;
