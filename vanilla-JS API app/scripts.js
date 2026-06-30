// Select the form, input, status text, and results container from the page.
const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const statusText = document.querySelector("#status");
const results = document.querySelector("#results");

// Run this code when the user submits the search form.
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Get the user's search text and clear old results.
    const query = input.value.trim();
    results.innerHTML = "";

    // Show a message if the search box is empty.
    if (query === "") {
        statusText.textContent = "Please enter a search term.";
        return;
    }

    // Show loading text while waiting for the API response.
    statusText.textContent = "Loading...";

    try {
        // Fetch GitHub users that match the search term.
        const response = await fetch(
            `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
        );

        // Stop if the API request fails.
        if (!response.ok) {
            throw new Error("Request failed");
        }

        // Convert the API response into JavaScript data.
        const data = await response.json();
        statusText.textContent = "";

        // Show an empty state if no users are found.
        if (data.items.length === 0) {
            statusText.textContent = "No users found.";
            return;
        }

        // Create one card for each GitHub user returned by the API.
        data.items.forEach((user) => {
            const card = document.createElement("div");
            card.className = "card";

            const image = document.createElement("img");
            image.src = user.avatar_url;
            image.alt = `${user.login} avatar`;

            const username = document.createElement("h2");
            username.textContent = user.login;

            const link = document.createElement("a");
            link.href = user.html_url;
            link.target = "_blank";
            link.textContent = "View profile";

            // Add the image, username, and link to the card.
            card.append(image, username, link);

            // Add the completed card to the results section.
            results.appendChild(card);
        });
    } catch (error) {
        // Show a friendly error message if something goes wrong.
        results.innerHTML = "";
        statusText.textContent = "Something went wrong. Please try again.";
    }
});
