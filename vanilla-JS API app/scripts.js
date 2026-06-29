const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const statusText = document.querySelector("#status");
const results = document.querySelector("#results");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const query = input.value.trim();
    results.innerHTML = "";

    if (query === "") {
        statusText.textContent = "Please enter a search term.";
        return;
    }

    statusText.textContent = "Loading...";

    try {
        const response = await fetch(
            `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();
        statusText.textContent = "";

        if (data.items.length === 0) {
            statusText.textContent = "No users found.";
            return;
        }

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

            card.append(image, username, link);
            results.appendChild(card);
        });
    } catch (error) {
        results.innerHTML = "";
        statusText.textContent = "Something went wrong. Please try again.";
    }
});
