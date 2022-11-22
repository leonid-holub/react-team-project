import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export function AuthNav() {
  return (
    <div className={css.AuthNav}>
      <NavLink className={`${css['AuthNav-link']}`}>SIGN IN</NavLink>
      <NavLink className={`${css['AuthNav-link']}`}>REGISTER</NavLink>
    </div>
  );
}
