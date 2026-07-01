import { useState } from "react";

function App() {
    // Stores the search input text.
    const [query, setQuery] = useState("");

    // Stores the API results.
    const [users, setUsers] = useState([]);

    // Stores loading and error states.
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Stores the empty state message.
    const [message, setMessage] = useState("");

    async function searchUsers(event) {
        event.preventDefault();

        setUsers([]);
        setError("");
        setMessage("");

        if (query.trim() === "") {
            setMessage("Please enter a search term.");
            return;
        }

        setLoading(true);

        try {
            // Fetches users from the same GitHub API used in the vanilla JS app.
            const response = await fetch(
                `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
            );

            if (!response.ok) {
                throw new Error("Request failed");
            }

            const data = await response.json();

            if (data.items.length === 0) {
                setMessage("No users found.");
            } else {
                setUsers(data.items);
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen p-6 font-sans">
            <h1 className="mb-4 text-2xl font-bold">GitHub User Search</h1>

            <form onSubmit={searchUsers} className="mb-4 flex gap-2">
                <input
                    className="border border-gray-400 px-3 py-2"
                    type="text"
                    placeholder="Search GitHub users"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button className="border border-gray-400 px-3 py-2" type="submit">
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-600">{error}</p>}
            {message && <p>{message}</p>}

            <div className="space-y-3">
                {users.map((user) => (
                    <div className="border border-gray-300 p-3" key={user.id}>
                        <img
                            className="mb-2 h-16 w-16"
                            src={user.avatar_url}
                            alt={`${user.login} avatar`}
                        />
                        <h2 className="text-xl font-bold">{user.login}</h2>
                        <a className="text-blue-600 underline" href={user.html_url} target="_blank">
                            View profile
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default App;
