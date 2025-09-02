import styles from "../styles/About.module.css"

export default function About({ iconStar, iconMinus }) {
    return (
        <>
            <div className={styles.containerTitle}>
                <img className={styles.star} src={iconStar} alt="icon star" />
                <h1 className={styles.title}>FAQs</h1>
            </div>
            <div className={styles.faq}>
                <p>What is Frontend Mentor, and how will it help me?</p>
                <img src={iconMinus} alt="icon minus" />
            </div>
            <p style={{ marginBottom: "40px", color: "hsl(292, 16%, 49%)" }}>Frontend Mentor offers realistic coding challenges to help developers improve their
                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
                all levels and ideal for portfolio building.</p>
        </>
    )
}