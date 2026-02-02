import { useState, useEffect, useRef } from 'react'
import { getData, getChar, postData } from '../functions.jsx'
import { Link } from 'react-router-dom'

function Cart() {
  const containerRef = useRef(null);
  const [cartList, setCartList] = useState([]);
  const [markedChars, setMarkedChars] = useState([]);

  useEffect(() => {
    const get = async () => {
      const cartData = await getData("http://localhost:3000/cart");
      const contentList = await getChar(cartData);

      if (Array.isArray(contentList)) {
        setCartList(contentList);
      } else {
        setCartList([contentList]);
      } 
      
      if (containerRef.current) {
        // Ищем элементы с классом 'cart-char' внутри контейнера
        const elements = containerRef.current.querySelectorAll('.cart-char');
        console.log('elements', elements);
        const ids = Array.from(elements).map(el => el.id);
        console.log('ID элементов:', ids);
        setMarkedChars(ids);
        console.log('markedChars', markedChars);        
      }
      //const ids = Array.from(cartList).map(el => el.id);
      const trr = markedChars.join(',');
      console.log('trr', trr);
    }     
    get();
  }, []);

  
  return (
    <div className='cart'>
      <div className='cart_list' ref={containerRef}>
        {cartList.map((char, idx) => (       
            <div className='cart_char' id={char.id}>
              <input type="checkbox"/>
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
        <button onClick={() => { cartList.map( char => {
                                  postData(char.id, 'http://localhost:3000/my_cards')}
                                )}}>
          Pay
        </button>
      </div>
    </div>
  )
}

export default Cart