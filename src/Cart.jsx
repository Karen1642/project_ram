import { useState, useEffect } from 'react'
import { getCart, getChar } from './functions.jsx'
import { Link } from 'react-router-dom'

function Cart() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    const get = async () => {
      const cartData = await getCart();
      const contentList = await getChar(cartData);

      if (Array.isArray(contentList)) {
        setCharList(contentList);
      } else {
        setCharList([contentList]);
      }
    }
    get();
  }, []);

  return (
    <div className='cart'>
      <div className='cart_list'>
        {charList.map((char, idx) => (
          <Link to={"/cards/" + char.id}>
            <p>
              <span>{idx}. </span>
              <img src={char.image} alt="" style={{width:"100px"}}></img>
              <span>{char.name}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
              <span>{char.species}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
              <span>{char.status}</span>
            </p>
          </Link>
        ))}
      </div>
      <div>
        <button>Pay</button>
      </div>
    </div>   
  )
}

export default Cart