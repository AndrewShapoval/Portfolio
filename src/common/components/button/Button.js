import React from "react";
import style from "src/common/components/button/Button.module.scss";

export const Button = (props) => {
    return (
        <a href="" className={style.btn}>{props.text}</a>
    )
}