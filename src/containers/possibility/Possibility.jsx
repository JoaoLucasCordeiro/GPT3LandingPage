import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="Possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Solicite o seu acesso antecipado para obter o acesso</h4>
        <h1 className='gradient__text'>As possibilidades vão além da nossa imaginação</h1>
        <p>
          Laboris consequat amet duis et cillum sint amet exercitation consequat cupidatat consectetur aliquip. Cupidatat labore commodo in nisi magna minim id. Eu commodo cupidatat anim dolor cillum. Dolor id pariatur amet deserunt ullamco voluptate velit magna aliqua sit. Deserunt nisi ea aliquip fugiat ut excepteur reprehenderit occaecat nulla eiusmod.
        </p>
        <h4>Solicite o seu acesso antecipado para obter o acesso</h4>
      </div>
    </div>
  )
}

export default Possibility