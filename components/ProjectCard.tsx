// components/ProjectCard.tsx
import React from 'react';
import styles from './ProjectCard.module.css'; // Estilos específicos para o card do projeto

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className={styles.projectCard}>
      <img className={styles.projectImage} src={imageUrl} alt={title} />
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <a className={styles.projectLink} href={link} target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>
  );
};

export default ProjectCard;
