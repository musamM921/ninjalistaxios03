import Link from "next/link";

const NotFound = () => {
    return ( 
        <div>
        <h1>Oooooops...</h1>
        <h2>That page cannot be found</h2>
        <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;