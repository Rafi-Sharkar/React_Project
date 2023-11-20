import React from 'react'
import styles from "./Question.module.css"
import Selector from '../QuizPage/QComponents/QJs/Selector'
export default function Question() {
  return (
    <div>
        <Selector data={""}/>
        <div className={styles.questions_div}>
          <div className={styles.questions_card}>
            <div className={styles.Question_main}>
                <h4>Question 01</h4>
                <h2>She insisted on --- leaving the house.</h2>
            </div>
            <div className={styles.answers}>
                <p><span>A</span> he </p>
                <p><span>B</span> Him</p>
                <p><span>C</span> her</p>
                <p><span>D</span> herself</p>
            </div>
          </div>
        </div>
    </div>
  )
}
