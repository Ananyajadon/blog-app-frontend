import { useEffect } from "react";
import{Link} from "react-router-dom";


export default function Header() {
  useEffect(() =>{
    fetch('h')
  })
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