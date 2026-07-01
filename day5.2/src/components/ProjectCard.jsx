function ProjectCard({ title, points }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <ul>
                {points.map((point) => (
                    <li key={point}>{point}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectCard;
