import React from 'react';
import iconHtml from "../assets/portfolio logo design/2.png"
import iconNode from "../assets/portfolio logo design/3.png"
import iconReact from "../assets/portfolio logo design/4.png"
import iconGit from "../assets/portfolio logo design/5.png"
import iconBoot from "../assets/portfolio logo design/6.png"
import iconCss from "../assets/portfolio logo design/7.png"
import iconExpress from "../assets/portfolio logo design/8.png"
import iconMongo from "../assets/portfolio logo design/9.png"
import iconjs from '../assets/portfolio logo design/10.png';

import './Skills.css';

const Skills = () => {
  return (
    <>
    <section className="con">
      <marquee  behavior="alternate" scrollamount="5" direction="right">
          <img className='image js'  src={iconjs} alt="javascript"/>
          <img className='image html' src={iconHtml} alt="javascript"/>
          <img className='image node' src={iconNode} alt="javascript"/>
          <img className='image react' src={iconReact} alt="javascript"/>
          <img className='image git' src={iconGit} alt="javascript"/>
          <img className='image boot' src={iconBoot} alt="javascript"/>
          <img className='image css' src={iconCss} alt="javascript"/>
          <img className='image express' src={iconExpress} alt="javascript"/>
          <img className='image mongo' src={iconMongo} alt="javascript"/>
        </marquee>
    </section>
    </>
  );
};

export default Skills;
