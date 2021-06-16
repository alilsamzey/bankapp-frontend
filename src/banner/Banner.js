import React from 'react'
import { Carousel } from 'react-bootstrap';
import './Banner.css';

function Banner() {
    
  
    return (
        <form className="form1">

        <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
        <input type="radio" name="fancy" value="hearts" id="hearts" />
        <input type="radio" name="fancy" value="spades" id="spades" />
       			
        <label for="clubs"> </label><label for="hearts"> </label><label for="spades"> </label>

        <div class="keys">Use left and right keys to navigate</div>
</form>
    )
  }
  
  
export default Banner
