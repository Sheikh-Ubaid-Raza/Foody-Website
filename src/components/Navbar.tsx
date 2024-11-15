import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="navbar">
      <div className="navbarLogo">
        <Link href="/">
          Foody
        </Link>
      </div>
      <ul className="navbarLinks">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#menu">Menu</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
      <div className="navbarOrder">
        <button className="orderButton">Order Online</button>
      </div>
    </nav>
    );
  }