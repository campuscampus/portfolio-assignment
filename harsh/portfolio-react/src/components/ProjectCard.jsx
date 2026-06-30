function ProjectCard({ title, description, link }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank">View Project</a>
    </div>
  );
}

export default ProjectCard;