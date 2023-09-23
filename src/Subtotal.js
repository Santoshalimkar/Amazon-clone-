import React from 'react'
import { useStatevalue } from './StateProvider';
import './Subtotal.css'
import { BasketTotal } from './reducer';

const Subtotal = () => {
  const [{basket},dispatch]=useStatevalue();

  return (
    <div className='subtotal'>
    <span className='subtitle'>Subtotal ({basket.length} items):<b>₹{BasketTotal(basket)}</b></span>
    <button className='btt'> Procced to Buy</button>
        
    </div>
  )
}

export default Subtotal