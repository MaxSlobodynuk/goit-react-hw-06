import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, handleInput }) => {
  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="search">
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        id="search"
        value={inputValue}
        onChange={handleInput}
      />
    </div>
  );
};

export default SearchBox