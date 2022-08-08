import React from 'react'
import './Reviews.css';

function Reviews() {
  return (
    <div className='reviews'>
        <h2>WORDS OF APPRECIATION</h2>   
        <div className="gallery">
      <div class="row">
  <div class="column a">
    <img src="images/reviews/Screenshot (541).png"/>
    <img src="images/reviews/Screenshot (542).png"/>
    <img src="images/reviews/Screenshot (543).png"/>
    <img src="images/reviews/Screenshot (550).png"/>
  </div>
  <div class="column b">
    <img src="images/reviews/Screenshot (552).png"/>
    <img src="images/reviews/Screenshot (544).png"/>
    <img src="images/reviews/Screenshot (545).png"/>
    <img src="images/reviews/Screenshot (551).png"/>
  </div>
  <div class="column c">
    <img src="images/reviews/Screenshot (547).png"/>
    <img src="images/reviews/Screenshot (548).png"/>
    <img src="images/reviews/Screenshot (549).png"/>
    <img src="images/reviews/Screenshot (546).png"/>
  </div>
  {/* <div class="column">
    <img src="images/reviews/Screenshot (550).png"/>
    <img src="images/reviews/Screenshot (551).png"/>
    <img src="images/reviews/Screenshot (544).png"/>
  </div> */}
</div>
</div>
    </div>
  )
}

export default Reviews