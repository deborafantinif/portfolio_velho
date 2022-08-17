import NavBar from '../components/NavBar';
import homeProfile from '../assets/home.svg';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <NavBar/>
      <main className={styles.main}>
        <article className={styles.article}>
          <h2>Olá,</h2>
          <p>
            Meu nome é Debora Fantini, sou desenvolvedora Fullstack, focada
            em React e Node.js, mas já me aventurei em outras tecnologias. Aqui
            você vai conhecer um pouco da minha história e alguns projetos que
            já desenvolvi!
          </p>
        </article>
        <img src={homeProfile} alt="desenho de mulher codando no computador" />
      </main>
    </div>
  );
}

export default Home;