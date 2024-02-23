import { useState } from 'react';
import './App.scss';
import Content from './Content';


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <div className='intro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid necessitatibus, ipsam possimus earum animi quis nulla ut facilis repudiandae praesentium aut molestias tempore doloribus, consequuntur molestiae eos eaque ex est?
        Sed laborum possimus quod impedit voluptates saepe, optio corrupti! Odit soluta doloribus ad id sed hic beatae recusandae. Ipsam quis aliquam, reiciendis voluptas ratione alias aperiam culpa ullam cupiditate veritatis!</div>
        <Content/>
      </div>
    </>
  )
}

export default App
