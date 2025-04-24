const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavHeader />
        <ul className="nav-links" id="nav-links">
          {navLinks.map((link, idx) => (
            <NavLink href={`#${link}`} text={link} key={idx + 1} />
          ))}
        </ul>

        <ul className="nav-icons">
          {navSocials.map((social, idx) => (
            <NavSocial
              href={`https://www.${social}.com`}
              className={`fab fa-${social}`}
              key={idx + 1}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

const NavHeader = () => {
  return (
    <div className="nav-header">
      <img src="../../images/logo.svg" className="nav-logo" alt="backroads" />
      <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

const navLinks = ["home", "about", "services", "tours"];

const NavLink = ({ href, text }) => {
  return (
    <>
      <li>
        <a href={href} className="nav-link">
          {""}
          {text}
          {""}
        </a>
      </li>
    </>
  );
};

const navSocials = ["facebook", "twitter", "squarespace"];

const NavSocial = ({ href, className }) => {
  return (
    <li>
      <a href={href} target="_blank" className="nav-icon">
        <i className={className}></i>
      </a>
    </li>
  );
};

export default Nav;
