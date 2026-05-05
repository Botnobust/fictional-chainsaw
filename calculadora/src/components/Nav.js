import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>Login</NavLink>
        </li>
        <li>
          <NavLink to="/cadastro">Cadastro</NavLink>
        </li>
        <li>
          <NavLink to="/principal">Principal</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;