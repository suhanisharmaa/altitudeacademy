import React from 'react'
import './FlipcardCheckout.css'
import { useStateValue } from './StateProvider';

function FlipcardCheckout({id,type,subject,chapter,grade}) {
      
    const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div className="flip-card-inside">
                        <img src="https://cdn.10yearsquestionpaper.com/img/isc/maths/2014-previous-year-question-paper-01.jpg" alt="" />
                    </div>
                </div>
                <div class="flip-card-back">
                    <div className="flip-card-inside">
                    <h1>{type}</h1>
                    <p> {subject}</p>
                    <p> {chapter}</p>
                    <p> Class : {grade}</p>
                    <button onClick={removeFromBasket}> Remove from Cart </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FlipcardCheckout