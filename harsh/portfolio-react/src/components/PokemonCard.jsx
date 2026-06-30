function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-64 text-center text-black">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto w-32 h-32"
      />
      <h2 className="text-2xl font-bold capitalize mb-2">{pokemon.name}</h2>

      <div className="flex gap-2 justify-center mb-3">
        {pokemon.types.map(t => (
          <span
            key={t.type.name}
            className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm"
          >
            {t.type.name}
          </span>
        ))}
      </div>

      <p className="text-gray-600">
        HP: {pokemon.stats.find(s => s.stat.name === 'hp')?.base_stat} | 
        ATK: {pokemon.stats.find(s => s.stat.name === 'attack')?.base_stat}
      </p>
    </div>
  );
}

export default PokemonCard;