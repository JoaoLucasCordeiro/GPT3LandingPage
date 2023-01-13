import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__fotter-heading'>
        <h1 className='gradient__text'>Dê o primeiro passo para o futuro antes dos outros</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Garanta seu acesso antecipado</p>
      </div>

      <div className='gpt3__footer-links'>

        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Redes Sociais</p>
          <p>Contadores</p>
          <p>Contato</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Compania</h4>
          <p>Termos e condições</p>
          <p>Política de privacidade</p>
          <p>Contato</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Fale com a gente</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>

      </div>

      <div className='gpt3__footer-copyright'>
        <p>© 2022 GPT-3. All rights reserved. Desenvolvido por <strong><a href='https://www.linkedin.com/in/joaolucascordeiro/'>Lucas Cordeiro</a></strong> ❤</p>
      </div>
    </div>
  )
}

export default Footer