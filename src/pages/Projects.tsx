import NavBar from '../components/NavBar';
import Project from '../components/Project';
import styles from './Projects.module.css';
import ghibli from '../assets/ghibli.png';
import todo from '../assets/todo.png';
import feedget from '../assets/feedget.png';
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
            github='https://github.com/deborafantinif/todo'
            site='https://todo-deborafantinif.vercel.app/'
            title='Todo'
            description='O Todo é um controlador de 
            tarefas, onde se consegue criar, deletar e definir o status das 
            tarefas.'
            image={todo} 
          />

          <Project 
            github='https://github.com/deborafantinif/project-pixels-art'
            site='https://pixels-art-eight.vercel.app/'
            title='Pixel Art'
            description='Site de desenho com base em pixels'
            image={pixelArt} 
          />

          <Project 
            github='https://github.com/deborafantinif/frontend-test'
            site='https://ghible-search.vercel.app'
            title='Ghibli Search'
            description='Aplicativo web que recupera os dados disponíveis da 
            API do Studio Ghibli e os exibi.'
            image={ghibli} 
          />

          <Project 
            github='https://github.com/deborafantinif/nlw-return-impulse-web'
            site='https://nlw-return-impulse-web-deborafantinif.vercel.app/'
            title='Feedback Widget'
            description='Um widget que coletar feedbacks dos usuários da 
            aplicação que o utiliza.'
            image={feedget} 
          />
        </div>
      </main>
    </div>
  );
}

export default Projects;