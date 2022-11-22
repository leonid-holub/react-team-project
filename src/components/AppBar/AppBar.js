import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { AuthNav } from './AuthNav/AuthNav';
import { CalcNav } from './CalcNav/CalcNav';
import { UserMenu } from './UserMenu/UserMenu';
import css from './AppBar.module.css';

export function AppBar() {
  return (
    <section className={`container ${css['header-container']}`}>
      <header className={css.header}>
        <div className={css.logo}>
          <Link>
            <img src={logo} alt="Кот" width="167" />
          </Link>
        </div>
        <nav className={css.nav}>
          <AuthNav /> <CalcNav /> <UserMenu />
        </nav>
      </header>
    </section>
  );
}
