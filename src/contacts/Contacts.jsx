import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={"Contacts"} />
                <form className={style.contactForm}>
                    <input type="text"></input>
                    <input type="text"></input>
                    <textarea/>
                    <button type="submit" className={style.submitBtn}>Send</button>
                </form>
            </div>
        </div>
    )
}