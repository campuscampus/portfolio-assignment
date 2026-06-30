import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import SkillTag from './components/SkillTag';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [quote, setQuote] = useState('');
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

  useEffect(() => {
  fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(data => setQuote(data.quote));
}, []);

  return (
    <div style={{
      backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
      color: darkMode ? '#ffffff' : '#000000',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <Header />

      <p>💬 {quote}</p>

      <ProjectCard
        title="Pokémon Search App"
        description="Search any Pokémon and see their stats"
        link="https://github.com/harsh"
      />
      <ProjectCard
        title="Portfolio Website"
        description="My personal portfolio built with HTML CSS JS"
        link="https://github.com/harsh"
      />

      <div>
        {skills.map(skill => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default App;