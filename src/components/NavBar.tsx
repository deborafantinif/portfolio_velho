import {
  Browsers,
  GithubLogo,
  House,
  LinkedinLogo,
  User,
} from 'phosphor-react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

// eslint-disable-next-line max-lines-per-function
function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.bloco}>
        <Link to='/' title='Home'> <House size={32} weight="bold" /> </Link>
        <Link to='/sobre' title='Sobre Mim'>
          <User size={32} weight="bold" />
        </Link>
        <Link to='/projetos' title='Projetos'> 
          <Browsers size={32} weight="bold" />
        </Link>
      </div>
      <div className={styles.bloco}>
        <a 
          href="https://github.com/deborafantinif" 
          target='_blank' 
          title='GitHub'
        >
          <GithubLogo size={32} weight="bold" />
        </a>
        <a 
          href="https://www.linkedin.com/in/deborafantini/" 
          target='_blank' 
          title='LinkedIn'
        >
          <LinkedinLogo size={32} weight="bold" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;