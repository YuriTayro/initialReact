import React from 'react'
import style from './Header.module.css'
import innovation from '../assets/innovation.png'

console.log(style.h1);

const Header = () => {
  return (
    <header className={style.cabecalho}>
      <img src={innovation} alt="Logo da Página" />
        <strong>Hello World</strong>
    </header>
  )
}

export default Header