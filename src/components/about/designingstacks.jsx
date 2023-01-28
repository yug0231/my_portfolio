import React from "react";
import "./Skillstack.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiAdobephotoshop,
  SiAdobeillustrator
} from "react-icons/si";
import {
  HiOutlinePencil
} from "react-icons/hi";
import { DiCss3, DiIllustrator, DiMongodb, DiPhotoshop } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Designingstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Designing Skills</h2>
        <div className="designsection">
          <div>
            <DiPhotoshop />
            <h5>Photoshop</h5>
          </div>
          <div>
            <HiOutlinePencil/>
            <h5>Coreldraw</h5>
          </div>
          <div>
            <DiIllustrator />
            <h5>Illustrator</h5>
          </div>
        </div>
      </div>
    </>
  );
};
