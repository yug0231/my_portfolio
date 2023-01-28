import React from "react";
import "./Projects.css";
import frankbody from "../../assets/frank-body.png";
import fatsecret from "../../assets/fatsecret.png";
import revpro from "../../assets/revpro.png";
import zomato from "../../assets/zomato.png";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={frankbody}
                    alt="Frank Body Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Frank Body Clone</h2>
                <p>
                  This was a team project in which 4 of us have contibuted. This whole project was completed within a time frame of 5 days.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://darling-sorbet-a495bc.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Mr-raaz/Frank_Body_Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={zomato}
                    alt="Zomato-clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Zomato Clone</h2>
                <p>
                  Team Project executed within 5 days. With Special feature of admin panel.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://clone-zomato-project.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Rajatsinha05/Zomato-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={fatsecret} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Fat Secret</h2>
                <p>
                  Team project in which 5 teammates have contibuted& completed this whole project in timespan of 5 days.
                </p>
                <div>
                  <SiJavascript />
                  <SiHtml5 />
                  <SiCss3 />
                </div>
                <div>
                  <a
                    href="https://gentle-kashata-e21372.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/senCoder12/masai-fatsecret-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={revpro}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Rev.co.in</h2>
                <p>
                Team Project executed within 5 days. With Special feature of admin panel.
                </p>
                <div>
                <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/yug0231/revvpro"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Uniqlo Clone</h2>
                <p>
                  UNIQLO is a clothing apparel company, from Japan. They also
                  sell their products in online mode through their website. We
                  cloned their website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PulsePlus Clone</h2>
                <p>
                  PulsePlus is an E-commerce web application for online Buying
                  Medicines and Consult to Doctor and Book a near Testlab.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
