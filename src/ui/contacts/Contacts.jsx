import React, {useState} from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import {useFormik} from "formik";
import {send} from "emailjs-com";
import {Preloader} from "../../common/components/preloader/Preloader";
import {Modal} from "../../common/Modal/Modal";

export const Contacts = () => {

    const [status, setStatus] = useState("")
    const [modalActive, setModalActive] = useState(false)
    const [modalMessage, setModalMessage] = useState("")

    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            textarea: ""
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.userName) {
                errors.userName = 'Name is required'
            }
            if (!values.textarea) {
                errors.textarea = 'Message is required'
            }
            return errors;
        },
        onSubmit: values => {
            setStatus("loading")
            send('default_service', 'template_mz0tn0q', values, "user_utXgN5fzrjN8Wsfl18yzq")
                .then((result) => {
                    setStatus("")
                    formik.resetForm()
                    setModalMessage("The message was delivered to Andrew Shapoval !")
                    setModalActive(true)
                }, (error) => {
                    setStatus("")
                    setModalMessage("Error. Please repeat again")
                    setModalActive(true)
                });
        },
    })

    return (
        <>
            {
                modalActive
                    ? <Modal active={modalActive} setActive={setModalActive} text={modalMessage}/>
                    : <></>
            }
            <div id={"contacts"} className={style.contactsBlock}>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title text={"Contacts"}/>
                    <Fade>
                        <form onSubmit={formik.handleSubmit} className={style.form}>
                            <div>
                                <input type="text"
                                       className={style.formArea}
                                       placeholder="Enter your name"
                                       onChange={formik.handleChange}
                                       name={"userName"}
                                       value={formik.values.userName}
                                       onBlur={formik.handleBlur}/>
                                {
                                    formik.touched.userName && formik.errors.userName
                                        ? <div className={style.errorEmail}>{formik.errors.userName}</div>
                                        : null
                                }
                            </div>
                            <div>
                                <input type="text"
                                       className={style.formArea}
                                       placeholder="Your email"
                                       onChange={formik.handleChange}
                                       name={"email"}
                                       value={formik.values.email}
                                       onBlur={formik.handleBlur}/>
                                {
                                    formik.touched.email && formik.errors.email
                                        ? <div className={style.errorEmail}>{formik.errors.email}</div>
                                        : null
                                }
                            </div>
                            <div>
                            <textarea className={style.messageArea}
                                      placeholder="Message"
                                      onChange={formik.handleChange}
                                      name={"textarea"}
                                      value={formik.values.textarea}
                                      onBlur={formik.handleBlur}/>
                                {
                                    formik.touched.textarea && formik.errors.textarea
                                        ? <div className={style.errorEmail}>{formik.errors.textarea}</div>
                                        : null
                                }
                            </div>
                            <button type="submit"
                                    value={"send"}
                                    onClick={formik.handleSubmit}
                            >Send message
                            </button>
                        </form>
                    </Fade>
                    {status === "loading" ? <Preloader/> : null}
                </div>
            </div>
        </>
    )
}