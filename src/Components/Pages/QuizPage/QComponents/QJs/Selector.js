import styles from '../Qjscss/Selector.module.css'

export default function Selector({data}) {
  return (
    <div className={styles.se_main}>
       <h2 className={styles.heading}>{data.heading}</h2>
       <div className={styles.carddetails}>
        <p className={styles.gen}>
        {data.catagory}
        </p>
        <p className={styles.date}>
        {data.date}
        </p>
       </div>
    </div>
  )
}
