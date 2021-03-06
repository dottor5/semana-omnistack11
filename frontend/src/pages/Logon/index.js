import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero" />
        <form action="">
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button type="submit">Entrar</button>
          <FiLogIn />
          <a href="/register">Não tenho cadastro</a>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}
