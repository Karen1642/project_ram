import { useState, useEffect } from 'react'
import { getData, getChars, postData, deleteData } from '../functions.jsx'
import { Link } from 'react-router-dom'

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [markedChars, setMarkedChars] = useState([]);

  useEffect(() => {
    const get = async () => {
      const cartData = await getData("http://localhost:3000/cart");

      let charIds = "";
      let arrayIds = [];

      cartData.map((res, idx) => (
            charIds = charIds + (idx==0?'':',') + res.id.toString(),
            arrayIds.push(+res.id)          
          ));

      const contentList = await getChars(charIds);

      setCartList(contentList);
      setMarkedChars(arrayIds);
    }     
    get();
  }, []);

  //ВОПРОС по удалению из массива
  const handleChange = (event, id) => {
                          //отменяем предыдущее действие
                          event.preventDefault();
                          event.stopPropagation();

                          //ВОПРОС event.target.checked
                          if (event.target.checked) {
                            const newMarkedChars = [...markedChars, id];
                            setMarkedChars(newMarkedChars);
                          } else {
                            setMarkedChars(markedChars.filter(charId => charId !== id));
                          }
                        };

  const handlePayOnClick = () => {markedChars.map( id => {
                                                  postData(id, 'http://localhost:3000/my_cards')}
                                                ),
                                    //ВОПРОС не работает
                                    deleteData("http://localhost:3000/cart"),
                                    //ВОПРОС можно ли использовать get()?
                                    setCartList([])
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