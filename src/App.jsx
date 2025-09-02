import Faqs from "./components/Faqs";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import styles from "./styles/App.module.css"

import IconStar from "./assets/images/icon-star.svg"
import IconMinus from "./assets/images/icon-minus.svg"
import Background from "./assets/images/background-pattern-desktop.svg"
import About from "./components/About";

export default function App() {

  return (
    <Wrapper>
      <img className={styles.background} src={Background} alt="backgrund" />
      <Container>
        <About iconStar={IconStar} iconMinus={IconMinus}/>
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