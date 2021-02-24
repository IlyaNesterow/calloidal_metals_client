import React from 'react'

interface Props {
  text: string
  title: string
}

const Intro: React.FC<Props> = ({ text, title }) => {
  return(
    <div id="intro">
      <div id="wrapper">
        <h2>{ title }</h2>
        <p>{ text }</p>
      </div>
    </div>
  )
}

export default Intro