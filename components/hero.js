import styles from './hero.module.css'

const Hero = ({ children }) => {
  return (
    <div>
      <div className={styles.hero}>
        {children}
      </div>
    </div>
  )
} 

export default Hero