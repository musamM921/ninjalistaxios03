import Link from "next/link";

Link

const Navbar = () => {
    return ( 
        <nav>
        <div className="logo">
            <h1>Ninja List</h1>
            </div>
           <Link href="/">Home</Link>
           <Link href="/about">About</Link>
           <Link href="/ninjas">Ninjas Listing</Link>
           </nav>
     );
}
 
export default Navbar;