import "./hero.css";
import wd from "../../images/wd.png"
import myCv from "../../images/Yugal_Nemade_Resume.pdf"
import { Link } from "react-router-dom";
import linkedin from "../../images/smedia-linkedin.png";
import github from "../../images/smedia-github.png";
import insta from "../../images/smedia-insta.png";
import twitter from "../../images/smedia-twitter.png";
import scroll from "../../images/scroll.png";

const HeroSection=()=>{
return <div>
    <div id="HeroMainDiv">
    <div id="HeroDiv">
    <h5 className="btn-shine">Hello, World..!</h5>
    <h3 className="heroA3">This is</h3>
    <h1 className="heroA1">Yugal Nemade</h1>
    <h3 className="heroA3">FULL STACK <span className="colorChange">WEB DEVLOPER</span></h3>
    <p>Full Stack Web Developer with intensive coding skill
and well balanced interpersonal skills.</p>
    <a href={myCv} download="Yugal_Nemade_Resume" target='_blank'>
   <button className="cvBtn">Download My Resume</button>
    </a>
    <a href="#portfolio">
   <button className="cvBtn" style={{"margin-left":"10px"}}>See My Work</button>
    </a>
    </div>
    <div id="HeroImgDiv">
    <img src={wd} className="devImg"/>
    </div>
    <div id="HeroSocialDiv">
        <Link href=""><img src={linkedin} className="HeroSocialIcon"/></Link>
        <Link href=""><img src={github} className="HeroSocialIcon"/></Link>
        <Link href=""><img src={insta} className="HeroSocialIcon"/></Link>
        <Link href=""><img src={twitter} className="HeroSocialIcon"/></Link>
    </div>
</div>
    <div id="scroll">
<img src={scroll} className="scrollimg"/>
</div>
</div>
}

export {HeroSection};
