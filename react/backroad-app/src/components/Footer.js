const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {linkList.map((data) => (
          <FooterLinks link={data} />
        ))}
      </ul>
      <ul className="footer-icons">
        {socialsList.map((data) => (
          <FooterIcons social={data} />
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span className="date"></span> all rights reserved
      </p>
    </footer>
  );
};

const linkList = ["home", "about", "services", "tours"];
const socialsList = ["facebook", "twitter", "squarespace"];

const FooterLinks = ({ link }) => {
  return (
    <li>
      <a href={`#${link}`} className="footer-link">
        {link}
      </a>
    </li>
  );
};

const FooterIcons = ({ social }) => {
  return (
    <ul className="footer-icons">
      <li>
        <a
          href={`https://www.${social}.com`}
          target="_blank"
          className="footer-icon"
        >
          <i className={`fab fa-${social}`}></i>
        </a>
      </li>
    </ul>
  );
};

export default Footer;
