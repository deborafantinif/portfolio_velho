import NavBar from '../components/NavBar';
import styles from './About.module.css';

// eslint-disable-next-line max-lines-per-function
function About() {
  return (
    <div>
      <NavBar/>
      <main className={styles.main}>
        <article>
          <h1>Sobre Mim</h1>
          <p>
            Descobri meu amor por Tecnologia ao me deparar com a imensidão de 
            caminhos que poderia seguir e construir a partir dela.
          </p>
          <p>
            Iniciei meus estudos no início de 2021 entrando no curso de Análise 
            e Desenvolvimento de Sistemas na FIAP e tranquei o curso no final 
            do segundo semestre. Posteriormente ingressei no curso de 
            Desenvolvimento Web na Trybe, onde conclui em dezembro de 2022.
          </p>
          <p>
            Hoje estou em busca de uma oportunidade para poder aplicar tudo que 
            aprendi ao longo desses messes tendo como objetivo estar numa 
            empresa que tem como pilar respeito, cooperação, aprendizagem 
            contínua e com foco em gerar impacto positivo na sociedade.
          </p>
        </article>
        <div className={styles.skills}>
          <h2>Skills</h2>
          <div>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-tailwindcss-original-wordmark colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-mysql-plain-wordmark colored"></i>
            <i className="devicon-nodejs-plain-wordmark colored"></i>
            <i className="devicon-git-plain-wordmark colored"></i>
            <i className="devicon-github-original-wordmark colored"></i>
            <i className="devicon-docker-plain-wordmark colored"></i>
            <i className="devicon-redux-original colored"></i>
            <i className="devicon-express-original-wordmark colored"></i>
            <i className="devicon-sequelize-plain-wordmark colored"></i>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;