import React from 'react';
import style from './Nav.module.scss';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">HOME</a>
            <a href="">SKILLS</a>
            <a href="">PROJECTS</a>
            <a href="">CONTACTS</a>
        </div>
    );
}
