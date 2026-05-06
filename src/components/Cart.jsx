import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { addToMyCards } from '../features/myCard/myCardSlice'
import { removeFromCart, cartIds } from '../features/cart/cartSlice'

// async function checkout(ids) {
//   try {
//     const requests = ids.map(id => 
//       postData(id, 'http://localhost:3000/my_cards')
//     )
//     await Promise.all(requests);
//     //ВОПРОС не работает
//     await deleteData("http://localhost:3000/cart?id:eq=3")
//   } catch (error) {
//     console.error("checkout", error);
//   }
// }

function Cart() {
  const [markedChars, setMarkedChars] = useState([]);
  const cartList = useSelector(cartIds);
  const dispatch = useDispatch();
  
  console.log("cartList", cartList)

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

  if (cartList.length === 0) return <div className='ldng_scrn'>Корзина пуста</div>;

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