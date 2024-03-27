import React from 'react'
import styles from './Hero.module.sass'

export const Hero = () => {
    console.log( styles)
  return (
    <section className={styles.Hero}>
        <h1>future world</h1>
        <h2>Empowering </h2>
    </section>
  )
}
