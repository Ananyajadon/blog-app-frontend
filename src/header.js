import{Link} from "react-router-dom";
export default function Header() {
    return(
        <header>
        <Link to="/" className="logo">Mylogo</Link>
        <nav>
          <Link to="/login">login</Link>
          <Link to="/Register">Register</Link>
        </nav>
      </header>
    );
}