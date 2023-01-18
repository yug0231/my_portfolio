import "./navbar.css";
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return <div id="navbar">
        <div id="navbarInner">
        <Link to="/"><button className="navButton">Home</button></Link>
        <Link to="/about"><button className="navButton">About</button></Link>
        <Link to="/project"><button className="navButton">Projects</button></Link>
        <Link to="/contact"><button className="navButton">Contact</button></Link>
        </div>
    </div>
}

export default Navbar;

// div><Link to="/"><button>Home</button></Link></div>
//             <div><Link to="/about"><button>About</button></Link></div>
//             <div><Link to="/projects"><button>Projects</button></Link></div>
//             <div><Link to="/contact"><button>Contacts</button></Link></div>


// return <div id="navbar">
// <div id="navLeft"></div>
// <div id="navright">
//         <div><Link to="/"><button>Home</button></Link></div>
//         <div><Link to="/about"><button>About</button></Link></div>
//         <div><Link to="/projects"><button>Projects</button></Link></div>
//         <div><Link to="/contact"><button>Contacts</button></Link></div>
// </div>
// </div>