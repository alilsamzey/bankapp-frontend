import React from 'react'

import './Banner.css';

function Banner() {
    
  
    return (
        <form className="form1">

        <input type="radio" name="fancy" autoFocus value="clubs" id="clubs" />
        <input type="radio" name="fancy" value="hearts" id="hearts" />
        <input type="radio" name="fancy" value="spades" id="spades" />
       			
        

        <div className="keys">Use left and right keys to navigate</div>
</form>
    )
  }
  
  
export default Banner
