import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import SkillTag from "./components/SkillTag.jsx";

const projects = [
    {
        title: "LLM Hallucination Detector",
        points: [
            "Developed a system to detect and reduce hallucinated outputs in AI models",
            "Focused on improving reliability and factual consistency in generated responses"
        ]
    },
    {
        title: "CRM System (Lead Management Platform)",
        points: [
            "Built a full-stack system for tracking and qualifying leads",
            "Implemented API integrations and data-driven workflows"
        ]
    },
    {
        title: "Post-Production Image Generator",
        points: ["Automated image enhancement workflows using AI-based techniques"]
    }
];

const skills = [
    "Full Stack Development",
    "API Integration",
    "LLM Fundamentals",
    "Problem Solving",
    "Analytical Thinking"
];

function App() {
    // useState stores dark mode and causes React to re-render when it changes.
    const [darkMode, setDarkMode] = useState(false);
    const [quote, setQuote] = useState("Loading quote...");

    // useEffect runs once when the component first appears on the page.
    useEffect(() => {
        async function fetchQuote() {
            try {
                const response = await fetch("https://dummyjson.com/quotes/random");
                const data = await response.json();
                setQuote(data.quote);
            } catch (error) {
                setQuote("Could not load quote.");
            }
        }

        fetchQuote();
    }, []);

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <Header
                darkMode={darkMode}
                onToggleDarkMode={() => setDarkMode(!darkMode)}
            />

            <section id="about">
                <h1>Vaibhav Lohani</h1>
                <h2>About Me</h2>
                <p>
                    I am a Computer Science undergraduate with a strong interest in artificial
                    intelligence, software development, and problem solving. I enjoy learning
                    new technologies, building practical projects, and continuously improving
                    my technical skills through hands-on experience.
                </p>

                <h2>Education</h2>
                <ul>
                    <li><strong>B.Tech in Computer Science</strong></li>
                    <li>JSS Academy of Technical Education, AKTU</li>
                    <li>Expected Graduation: 2028</li>
                    <li>Currently in Second Year</li>
                </ul>

                <h2>Quote</h2>
                <p>{quote}</p>
            </section>

            <main id="projects">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            points={project.points}
                        />
                    ))}
                </div>
            </main>

            <section id="experience">
                <h2>Experience</h2>
                <p><strong>AI & Data Science Intern, NEMI</strong> (July-August 2025)</p>
                <ul>
                    <li>Worked on practical AI and data science applications.</li>
                    <li>Gained experience in real-world model deployment and analysis.</li>
                </ul>

                <h2>Technical Skills</h2>
                <div className="skills">
                    {skills.map((skill) => (
                        <SkillTag key={skill} name={skill} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default App;
