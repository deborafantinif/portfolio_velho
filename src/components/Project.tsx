import styles from './Project.module.css';

interface IProjectProps {
  github: string,
  site: string,
  title: string,
  description: string,
  image: string,
}

function Project(props: IProjectProps) {
  return (
      <div className={styles.bloco}>
        <img src={props.image} alt="tela do projeto feedget" />
        <div className={styles.content}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className={styles.button}>
            <a href={props.site} target='_blank'>SITE</a>
            <a href={props.github} target='_blank'>REPOSITÓRIO</a>
          </div>
        </div>
      </div>
  );
}

export default Project;