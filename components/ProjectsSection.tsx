// components/ProjectsSection.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição do Projeto 1',
    imageUrl: '/project1.png', // Substitua pela imagem real do projeto
    link: 'https://link-do-projeto1.com',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2',
    imageUrl: '/project2.png',
    link: 'https://link-do-projeto2.com',
  },
  // Adicione mais projetos aqui
];

const ProjectsSection: React.FC = () => {
  return (
    <section className={styles.projectsSection}>
      <h2>Meus Projetos</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
