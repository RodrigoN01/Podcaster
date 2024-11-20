import styles from "./SearchBar.module.scss";

const SearchBar = ({ onSearch }) => {
  // TODO: use debounce or useDeferredValue

  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type='text'
      className={styles.searchBar}
      placeholder='Filter podcasts...'
      onChange={handleChange}
    />
  );
};

export default SearchBar;
