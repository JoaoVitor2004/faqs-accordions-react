import styles from "../styles/Faqs.module.css"
import IconPlus from "../assets/images/icon-plus.svg"
import IconMinus from "../assets/images/icon-minus.svg"
import { useState } from "react"

export default function Faqs({ description, message }) {

    const [classHide, setClassHide] = useState(styles.hide)
    const [icon, setICon] = useState(IconPlus)

    const changeClass = () => setClassHide((prev) => prev === styles.hide ? "" : styles.hide)
    const changeIcon = () => setICon((prev) => prev === IconPlus ? IconMinus : IconPlus)

    return (
        <button onClick={() => {
            changeClass()
            changeIcon()
        }} className={`${styles.btn} ${classHide}`}>
            <p>{description}</p>
            <img src={icon} alt="icon plus" />
            <div className={`${styles.message} ${classHide}`}>
                <p>{message}</p>
            </div>
        </button>
    )
}