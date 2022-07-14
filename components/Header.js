import styles from './Header.module.css'

export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}<img src="/SSPARK logo.svg" alt="Strijp Spark Logo" className={styles.logo} /></h1>
  </>
  )
}
