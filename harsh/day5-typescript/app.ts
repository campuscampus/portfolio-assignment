// --- Grab elements from the page ---
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const searchBtn = document.getElementById("searchBtn") as HTMLButtonElement;
const statusDiv = document.getElementById("status") as HTMLDivElement;
const resultsDiv = document.getElementById("results") as HTMLDivElement;

// ─────────────────────────────────────
// HELPER: show a status message
// (used for loading, error, and empty states)
// ─────────────────────────────────────
function showStatus(message: string) {
  statusDiv.textContent = message;
  statusDiv.style.display = "block";
  resultsDiv.innerHTML = ""; // clear any old cards
}

function hideStatus() {
  statusDiv.style.display = "none";
}

//  an interface — a custom-made shape describing what a Pokémon object from the API looks like. Looking at how you use pokemon in your code (.sprites.front_default, .name, .types, .stats),

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
// ─────────────────────────────────────
// HELPER: build one Pokémon card
// Creates real DOM elements — no innerHTML hacks
// ─────────────────────────────────────
function buildCard(pokemon: Pokemon) {
  // Create the outer card div
  const card = document.createElement("div");
  card.className = "card";

  // Sprite image
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  img.alt = pokemon.name;

  // Name heading
  const name = document.createElement("h3");
  name.textContent = pokemon.name;

  // Types (e.g. "fire", "flying")
  const typesDiv = document.createElement("div");
  typesDiv.className = "types";
  pokemon.types.forEach((t) => {
    const badge = document.createElement("span");
    badge.textContent = t.type.name;
    typesDiv.appendChild(badge);
  });

  // A couple of stats
  const stats = document.createElement("p");
  stats.className = "stats";
  const hpStat = pokemon.stats.find((s) => s.stat.name === "hp");
  const atkStat = pokemon.stats.find((s) => s.stat.name === "attack");
  const hp = hpStat ? hpStat.base_stat : 0;
  const atk = atkStat ? atkStat.base_stat : 0;
  stats.textContent = `HP: ${hp}  |  ATK: ${atk}`;

  // Assemble the card
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(typesDiv);
  card.appendChild(stats);

  return card;
}

// ─────────────────────────────────────
// MAIN: fetch and render
// This is the async function your mentor
// will ask you to walk through
// ─────────────────────────────────────
async function searchPokemon() {
  const query = searchInput.value.trim().toLowerCase();

  // Don't run if the box is empty
  if (!query) {
    showStatus("Type a Pokémon name first!");
    return;
  }

  // ── REQUIREMENT 4: Loading state ──
  showStatus("Loading...");
  searchBtn.disabled = true; // prevent double-clicks

  try {
    // ── REQUIREMENT 2: fetch with async/await ──
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

    // PokéAPI returns 404 if the name is wrong
    // fetch() doesn't throw on 404 — we must check manually
    if (!response.ok) {
      // ── REQUIREMENT 5: Error state ──
      showStatus(`No Pokémon found for "${query}". Check the spelling!`);
      return;
    }

    const data = await response.json();

    // PokéAPI single-pokemon endpoint always returns exactly one result
    // so we wrap it in an array to keep buildCard logic consistent
    const pokemonList = [data];

    // ── REQUIREMENT 6: Empty state ──
    // (with this API it won't happen for valid names, but the check must exist)
    if (pokemonList.length === 0) {
      showStatus("No results found. Try a different name.");
      return;
    }

    // ── REQUIREMENT 3: Build DOM cards ──
    hideStatus();
    resultsDiv.innerHTML = ""; // clear previous results

    pokemonList.forEach((pokemon) => {
      const card = buildCard(pokemon);
      resultsDiv.appendChild(card);
    });
  } catch (error) {
    // ── REQUIREMENT 5: catches network failures (no internet, etc.) ──
    showStatus("Something went wrong. Check your internet and try again.");
    console.error(error);
  } finally {
    // Always re-enable the button whether it worked or failed
    searchBtn.disabled = false;
  }
}

// ── REQUIREMENT 1: Wire up the button and Enter key ──
searchBtn.addEventListener("click", searchPokemon);

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") searchPokemon();
});
