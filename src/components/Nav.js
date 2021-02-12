import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  let className = ''
  switch(location.pathname) {
    case '/':
      className += 'home';
      break;
    case '/about':
      className += 'about';
      break;
  }

  return (
    <nav className={className}>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/work">WORK</Link>
      <Link to="/gallery">GALLERY</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  );
}

export default Nav;
