import { NavLink } from 'react-router-dom';
import styles from './app-nav.module.css';

export function AppNav() {
  return (
    <nav className={styles['nav']}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/automations" end>
        Automations
      </NavLink>
    </nav>
  );
}
