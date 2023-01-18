import "./homepage.css"
import Navbar from "../navbar/Navbar";
import {HeroSection} from "../heroSection/Hero.js"
import { About } from "../about/About";
const Homepage =()=>{
    return <div>
        <Navbar/>
        <HeroSection/>
        <About/>
    </div>
}

export {Homepage};