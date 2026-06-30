function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="flex gap-2 justify-center mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        placeholder="Enter Pokémon name..."
        className="px-4 py-2 rounded-lg border border-gray-300 text-black w-64 focus:outline-none"
      />
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;