import React from 'react';
import style from './Nav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >HOME</Link>
            <Link
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >SKILLS</Link>
            <Link
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >PROJECTS</Link>
            {/*<a href="">CONTACTS</a>*/}
            <Link
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >CONTACTS</Link>
        </div>
    );
}
