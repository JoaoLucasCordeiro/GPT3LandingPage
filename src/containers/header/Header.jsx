import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Vamos juntos construir algo incrível com a GPT-3 OpenAI</h1>
        <p>Eu nulla eiusmod duis adipisicing commodo anim tempor elit qui ex eiusmod laborum exercitation. Commodo sunt mollit commodo ex consequat reprehenderit irure.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Seu Endereço De E-mail' />
          <button type='button'>Começar</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people"/>
          <p>1600 pessoas solicitaram acesso nas últimas 24 horas</p>
        </div>
      </div>

      <div className='gpt3__header-image'>
          <img src={ai} alt="ai"/>
        </div>
        
    </div>
  )
}

export default Header