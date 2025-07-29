import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="blog">Blog </Link>
        <Link to="Dashboard">Dashboard</Link>
      </nav>
    </>
  );
};
