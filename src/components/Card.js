import React from 'react'
import './Card.css'

function Card({title,description}) {
  return (
    <div class="f-card">
  <div class="f-card-inner">
    <div class="f-card-front">
      <h1>{title}</h1>
    </div>
    <div class="f-card-back">
      <p>{description}</p>
    </div>
  </div>
</div>
  )
}

export default Card