function Header({ darkMode, onToggleDarkMode }) {
    return (
        <header className="header">
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
            </nav>

            {/* Calls the parent function to change dark mode state. */}
            <button onClick={onToggleDarkMode}>
                {darkMode ? "Light" : "Dark"}
            </button>
        </header>
    );
}

export default Header;
