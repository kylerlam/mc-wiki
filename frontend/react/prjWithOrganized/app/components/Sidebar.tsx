import { Link } from "react-router";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <Link to="/home">Dashboard</Link>
        <Link to="/home/profile">Profile</Link>
        <Link to="/home/settings">Settings</Link>
      </nav>
    </aside>
  );
}
