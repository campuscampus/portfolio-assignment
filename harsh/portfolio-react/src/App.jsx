import { useState } from 'react';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';

function App() {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function searchPokemon() {
    if (!query) return;

    setLoading(true);
    setError('');
    setPokemon(null);

    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
      );

      if (!res.ok) {
        setError(`No Pokémon found for "${query}". Check the spelling!`);
        return;
      }

      const data = await res.json();
      setPokemon(data);

    } catch  {
      setError('Something went wrong. Check your internet.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-2">Pokémon Search</h1>
      <p className="text-gray-400 mb-8">Search any Pokémon by name</p>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={searchPokemon}
      />

      {loading && (
        <p className="text-yellow-400 text-lg">Loading...</p>
      )}

      {error && (
        <p className="text-red-400 text-lg">{error}</p>
      )}

      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}

export default App;