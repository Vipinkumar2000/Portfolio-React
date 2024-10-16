import "./topbar.scss";
import Person2Icon from "@mui/icons-material/Person2";
import EmailIcon from "@mui/icons-material/Email";
const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#contact" className="logo">
            Haru
          </a>
          <div className="itemContainer">
            <Person2Icon className="icon" />
            <span>+44 924 12 75</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>wadewillsion907@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
