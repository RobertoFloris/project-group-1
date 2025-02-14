const SearchBar = ({ setSearchText }) => {
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Cerca turisti..."
      onChange={handleSearchChange}
      className="form-control"
    />
  );
};

export default SearchBar;