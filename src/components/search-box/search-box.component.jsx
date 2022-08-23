import "./search-box.styles.css";

function SearchBox(props) {
  return (
    <input
      className={`search-box ${props.className_}`}
      type="search"
      placeholder={props.placeholderInfo}
      onChange={props.onChangedHandler}
    />
  );
}

export default SearchBox;
