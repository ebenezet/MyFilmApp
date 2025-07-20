import Link from "next/link";
import headerStyles from './header.modules.css'



export default function Header() {
  return (
    <header>
         <h1>FILMS BLOG</h1>
         <div>
            <nav className="nav-links" >
             <Link href="/">Home</Link>
             <Link href="/films">Films</Link>
              <Link href="/films/add-film">Add Film</Link>
           </nav>
         </div>
    </header>
    
  );
}