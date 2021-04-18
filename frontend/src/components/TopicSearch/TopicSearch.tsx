type Props = {
  className?: string;
  searchText?: string;
  searchResult?: [];
  onSearchTextChange?: (val: string) => void;
  onSearch: () => void;
};

/**
 * Component responsible for searching related topics
 * 
 * @param {string} className style classes
 * @param {string} searchText search made by the user
 * @param {array} searchResult result of the search (made outside of the component)
 * @param {func} onSearchTextChange function to be executed when the searchText changes (handle input change)
 * @param {func} onSearch function to be executed when the search button is pressed
 */
function TopicSearch({ className, searchText, searchResult, onSearchTextChange, onSearch }: Props) {
  return (
    <section className={className}>
      <form className="app-form">
        <label htmlFor="search">Search for a topic</label>
        <div className="flex-container">
          <input
            type="text"
            id="search"
            className="mt--2"
            value={searchText || ''}
            onChange={(e) => onSearchTextChange?.(e.target.value)}
          />
          <button type="button" className="app-btn-primary max-height--30" onClick={onSearch}>
            Search
          </button>
        </div>
      </form>
      <ul>
        {searchResult?.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
        {searchResult?.length === 0 && <p>No results found</p>}
      </ul>
    </section>
  );
}

export default TopicSearch;
