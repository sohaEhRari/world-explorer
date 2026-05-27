
import Link from "next/link";

export default function Navbar(){
    return (
        <div className="navplus">
            <div className="logo">World Explorer</div>
        <nav className="navi">


            <Link href="/">Home</Link>
            <Link href="/countries">countries</Link>
            <Link href="/search">search</Link>
            
           <Link href="/about">about</Link>
 </nav>           
</div>

        
    )
}