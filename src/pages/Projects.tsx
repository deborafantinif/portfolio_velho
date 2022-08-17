import NavBar from '../components/NavBar';
import Project from '../components/Project';
import styles from './Projects.module.css';
import pixelArt from '../assets/pexelArt.jpg';

// eslint-disable-next-line max-lines-per-function
function Projects() {
  return (
    <div>
      <NavBar/>
      <main className={styles.main}>
        <h1>Projetos</h1>
        <div className={styles.blocos}>
          <Project 
            github='https://github.com/deborafantinif/project-pixels-art'
            site='https://pixels-art-eight.vercel.app/'
            title='Pixel Art'
            description='Site de desenho com base em pixels'
            image={pixelArt} 
          />
        </div>
      </main>
    </div>
  );
}

export default Projects;