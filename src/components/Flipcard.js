import React from 'react'
import './Flipcard.css'
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Flipcard({id,type,subject,chapter,grade}) {
//id="",type="",subject="",chapter="",grade=""
    const [{basket},dispatch] = useStateValue();
    console.log('This is the basket ', basket);
    const addToBasket = () => {
        //dispatch item into datalayer
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id: id,
                type: type,
                subject: subject,
                chapter: chapter,
                grade: grade,
                price: 99
            }
        })
    }
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
                    <button onClick={addToBasket}> Add to Cart </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flipcard