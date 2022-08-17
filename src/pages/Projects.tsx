import NavBar from '../components/NavBar';
import Project from '../components/Project';
import styles from './Projects.module.css';

function Projects() {
  return (
    <div>
      <NavBar/>
      <main className={styles.main}>
        <h1>Projetos</h1>
        <div className={styles.blocos}>
          <Project/>
          <Project/>
          <Project/>
        </div>
      </main>
    </div>
  );
}

export default Projects;