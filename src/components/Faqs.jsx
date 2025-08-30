import styles from "../styles/Faqs.module.css"
import IconPlus from "../assets/images/icon-plus.svg"
import IconMinus from "../assets/images/icon-minus.svg"
import { useRef } from "react"

export default function Faqs(prop) {

    const iconRef = useRef(null)
    const messageRef = useRef(null)

    const showAndHideMessage = () => {
        messageRef.current.classList.toggle(styles.hide)
        iconRef.current.src = iconRef.current.src === IconPlus ? IconMinus : IconPlus
    }

    return (
        <button onClick={() => {
            showAndHideMessage()
        }} className={styles.btn}>
            <p>{prop.description}</p>
            <img ref={iconRef} src={IconPlus} alt="icon plus" />
            <div ref={messageRef} className={`${styles.message} ${styles.hide}`}>
                <p>{prop.message}</p>
            </div>
        </button>
    )
}