import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark flex w-full px-52 drop-shadow-md justify-between items-center h-11 py-11 fixed  top-0 z-[1000]">
      <div className="logo w-72">
        <Link to="/">
          <img className="cursor-pointer" src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="menu">
        <ul className="flex text-white justify-between gap-7">
          <li>Home</li>
          <li>About</li>
          <li>
            <Link to="/favorites">Favorits</Link>
          </li>
          <li>Movies</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
