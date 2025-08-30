import Faqs from "./components/Faqs";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import styles from "./styles/App.module.css"

import IconStar from "./assets/images/icon-star.svg"
import IconMinus from "./assets/images/icon-minus.svg"
import Background from "./assets/images/background-pattern-desktop.svg"

export default function App() {

  return (
    <Wrapper>
      <img className={styles.background} src={Background} alt="backgrund" />
      <Container>
        <div className={styles.containerTitle}>
          <img className={styles.star} src={IconStar} alt="icon star" />
          <h1 className={styles.title}>FAQs</h1>
        </div>
        <div className={styles.faq}>
          <p>What is Frontend Mentor, and how will it help me?</p>
          <img src={IconMinus} alt="icon minus" />
        </div>
        <p style={{ marginBottom: "40px", color: "hsl(292, 16%, 49%)" }}>Frontend Mentor offers realistic coding challenges to help developers improve their
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
          all levels and ideal for portfolio building.</p>
        <ul className={styles.faqs}>
          <li>
            <Faqs
              description="Is Frontend Mentor free?"
              message="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
              option providing access to a range of projects suitable for all skill levels."
            />
          </li>
          <li>
            <Faqs
              description="Can I use Frontend Mentor projects in my portfolio?"
              message="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
            way to showcase your skills to potential employers!"
            />
          </li>
          <li>
            <Faqs
              description="How can I get help if I'm stuck on a Frontend Mentor challenge?"
              message="The best place to get help is inside Frontend Mentor's Discord community. There's a help
              channel where you can ask questions and seek support from other community members."
            />
          </li>
        </ul>
      </Container>
    </Wrapper>
  )
}