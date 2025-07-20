import Link from "next/link";
import headerStyles from './header.modules.css'



export default function Header() {
  return (
    <header>
         <h1>FILMS BLOG</h1>
         <div>
            <nav className="nav-links" >
             <Link href="/" className="navelement">Home</Link> |
             <Link href="/films" className="navelement">Films</Link> |
              <Link href="/films/add-film" className="navelement" >Add a Film</Link>
           </nav>
         </div>
    </header>
    
  );
}