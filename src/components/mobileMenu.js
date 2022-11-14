import { NavLink } from 'react-router-dom';
// eslint-disable-next-line no-empty-pattern
export default function MobileMenu({}) {

return (
  <nav className="mobile-menu">
  <ul className="">

  <li>
    <NavLink exact to="/portfolio"> Portfolio</NavLink>
  </li>
  <li>
    <NavLink exact to="/about">About Me</NavLink>
  </li>
  <li>
    <NavLink exact to="/contact">Contact Me</NavLink>
  </li>
  </ul>
  </nav>
  )
}
