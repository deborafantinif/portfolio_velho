import {
  Browsers,
  GithubLogo,
  House,
  LinkedinLogo,
  User,
} from 'phosphor-react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.bloco}>
        <Link to='/'> <House size={32} weight="bold" /> </Link>
        <Link to='/sobre'> <User size={32} weight="bold" /> </Link>
        <Link to='/projetos'> <Browsers size={32} weight="bold" /> </Link>
      </div>
      <div className={styles.bloco}>
        <a href="https://github.com/deborafantinif" target='_blank'>
          <GithubLogo size={32} weight="bold" />
        </a>
        <a href="https://www.linkedin.com/in/deborafantini/" target='_blank'>
          <LinkedinLogo size={32} weight="bold" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;