import React from 'react'

import './Banner.css';

function Banner() {
    
  
    return (
        <form className="form1">

        <input type="radio" name="fancy" autoFocus value="clubs" id="clubs" />
        <input type="radio" name="fancy" value="hearts" id="hearts" />
        <input type="radio" name="fancy" value="spades" id="spades" />
       			
        <label for="clubs">&#9827; Clubs</label><label for="hearts">&#9829; Hearts</label><label for="spades">&#9824; Spades</label><label for="diamonds">&#9830; Diamonds</label>


        <div className="keys">Use left and right keys to navigate</div>
</form>
    )
  }
  
  
export default Banner
