import React from 'react'
import './features.css'
import { Feature } from '../../components'



const featuresData = [
  {
    title: 'Proident et consectetur nostrud qui occaecat.',
    text: 'Magna voluptate id eiusmod occaecat quis aliquip qui culpa cillum commodo enim anim aliquip ipsum. Est eu adipisicing culpa cupidatat dolor dolore pariatur duis id sunt sit id esse.'
  },
  {
    title: 'Incididunt irure cillum aute cillum.',
    text: 'Magna voluptate id eiusmod occaecat quis aliquip qui culpa cillum commodo enim anim aliquip ipsum. Est eu adipisicing culpa cupidatat dolor dolore pariatur duis id sunt sit id esse.'
  },
  {
    title: 'Aliquip Lorem sint enim minim et.',
    text: 'Magna voluptate id eiusmod occaecat quis aliquip qui culpa cillum commodo enim anim aliquip ipsum. Est eu adipisicing culpa cupidatat dolor dolore pariatur duis id sunt sit id esse.'
  },
  {
    title: 'Adipisicing aliqua cillum nulla velit proident ea.',
    text: 'Magna voluptate id eiusmod occaecat quis aliquip qui culpa cillum commodo enim anim aliquip ipsum. Est eu adipisicing culpa cupidatat dolor dolore pariatur duis id sunt sit id esse.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>O futuro começa agora, e nós precisamos de você. Dê o primeiro passo para o amanhã e faça parte do futuro.</h1>
        <p>Solicite o seu acesso antecipado</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) =>
          <Feature title={item.title} text={item.text} key={item.title}/>)}
      </div>
    </div>
  )
}

export default Features