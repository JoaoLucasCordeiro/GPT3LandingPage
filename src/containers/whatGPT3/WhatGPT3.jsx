import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__marin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='O que é o GPT-3?' text='Officia laborum Lorem proident nisi officia adipisicing laboris commodo ad cillum esse id. Qui esse aliqua officia qui laboris tempor proident adipisicing ad enim adipisicing do est consequat. Proident dolore nisi adipisicing elit officia incididunt culpa enim excepteur deserunt consectetur dolore.'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>As possibilidades vão além da sua imaginação</h1>
        <p>Explore a nossa biblioteca</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='Cillum et cupidatat do incididunt sit. Exercitation irure consequat cillum nostrud. Ex tempor laboris pariatur laboris consectetur.'/>
        <Feature title='Base de dados' text='Cillum et cupidatat do incididunt sit. Exercitation irure consequat cillum nostrud. Ex tempor laboris pariatur laboris consectetur.'/>
        <Feature title='Educação' text='Cillum et cupidatat do incididunt sit. Exercitation irure consequat cillum nostrud. Ex tempor laboris pariatur laboris consectetur.'/>
      </div>
    </div>
  )
}

export default WhatGPT3