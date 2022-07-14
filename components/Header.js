import styles from './Header.module.css'

export default function Header({ title }) {
  return (
    <>
      <img src="/SSLogo.png" alt="Strijp Spark Logo" className={styles.logo} />
      <h1 className="title">{title}</h1>
  </>
  )
}
