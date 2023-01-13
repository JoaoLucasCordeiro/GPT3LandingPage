import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>

      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Muita coisa está acontecendo, e aqui nós te deixamos por dentro de tudo</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article  imgUrl={blog01} date="Sep 26, 2022" title="GPT-3 é o futuro? vamos explorar isso!"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Set 26, 2022" title="GPT-3 é o futuro? vamos explorar isso!"/>
          <Article imgUrl={blog03} date="Set 26, 2022" title="GPT-3 é o futuro? vamos explorar isso!"/>
          <Article  imgUrl={blog04} date="Set 26, 2022" title="GPT-3 é o futuro? vamos explorar isso!"/>
          <Article  imgUrl={blog05} date="Set 26, 2022" title="GPT-3 é o futuro? vamos explorar isso!"/>
        </div>
      </div>

    </div>
  )
}

export default Blog