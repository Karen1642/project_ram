import { useState, useEffect } from 'react'
import { getData, getCharacters, getChars, postData, deleteData } from '../functions.jsx'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { addToCart, clearCart } from '../features/counter/counterSlice'
import { combineSlices } from '@reduxjs/toolkit'


async function checkout(ids) {
  try {
    const requests = ids.map(id => 
      postData(id, 'http://localhost:3000/my_cards')
    )
    await Promise.all(requests);
    //ВОПРОС не работает
    await deleteData("http://localhost:3000/cart?id:eq=3")
  } catch (error) {
    console.error("checkout", error);
  }
}


function Cart() {
  const [markedChars, setMarkedChars] = useState([]);
  const cartList = useSelector((state) => state.counter.cart);


  const handleChange = (event, id) => {
    if (event.target.checked) {
      const newMarkedChars = [...markedChars, id];
      setMarkedChars(newMarkedChars);
    } else {
      setMarkedChars(markedChars.filter(charId => charId !== id));
    }
  };

  const handlePayOnClick = async () => {
    await checkout(markedChars);
  }

  return (
    <div className='cart'>
      <div className='cart_list'>
        {cartList.map((char, idx) => (       
            <div className='cart_char' id={char.id}>
              <input id={char.id} type="checkbox" onChange={e => handleChange(e, char.id)} checked={markedChars.includes(char.id)}/>
              <Link to={"/cards/" + char.id}>              
                <span>{idx}. </span>
                <img src={char.image} alt=""></img>
                <span>{char.name}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                <span>{char.species}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                <span>{char.status}</span>
              </Link>  
            </div>          
        ))}
      </div>
      <div>
        <button onClick={handlePayOnClick}>
          Pay
        </button>
      </div>
    </div>
  )
}

export default Cart