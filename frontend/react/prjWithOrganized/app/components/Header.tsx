import { Link } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <Link to="/">MyApp</Link>
      </div>
      <nav className="header__nav">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
