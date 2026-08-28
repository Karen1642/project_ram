import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToMyCards } from '../../../features/myCard/myCardSlice'
import { removeFromCart, cartIds } from '../../../features/cart/cartSlice'
import CartCharRow from './CartCharRow'
import CartPayButton from './CartPayButton'
import EmptyCart from './EmptyCart'

function Cart() {
  const [markedChars, setMarkedChars] = useState([]);
  const cartList = useSelector(cartIds);
  const dispatch = useDispatch();
  
  const handleChange = (event, id) => {
    if (event.target.checked) {
      const newMarkedChars = [...markedChars, id];
      setMarkedChars(newMarkedChars);
    } else {
      setMarkedChars(markedChars.filter(charId => charId !== id));
    }
  };
 
  const handlePayOnClick = () => {
    dispatch(removeFromCart(markedChars));
    dispatch(addToMyCards(markedChars));    
  }  

  return (
    <div className='cart'>
      <div className='cart_list'>
        {
        cartList.length === 0 ?           
          <EmptyCart />:
          cartList.map((char, idx) => (       
            <CartCharRow
              rowId = {idx}
              markedChars = {markedChars}
              handleChange = {handleChange} 
              charId = {char.id}
              charImage = {char.image}
              charName = {char.name}
              charSpecies = {char.species}
              charStatus = {char.status}
            />
        ))}
      </div>
      <CartPayButton 
        handlePayOnClick = {handlePayOnClick}
      />
    </div>
  )
}

export default Cart