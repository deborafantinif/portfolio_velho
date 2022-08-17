import styles from './Project.module.css';
import feedGet from '../assets/feedget.jpg';

function Project() {
  return (
    <div className={styles.bloco}>
      <img src={feedGet} alt="tela do projeto feedget" />
      <div className={styles.content}>
        <h2>Feedget</h2>
        <p>Formulário de feedback em formato de chat</p>
        <div className={styles.button}>
          <button>
            SITE
          </button>
          <button>
            REPOSITÓRIO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;