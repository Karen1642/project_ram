import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { fetchCharRequest } from '../features/charCard/charCardSlice'
import { charData, charLoading } from '../features/charCard/charCardSelectors'
import { addToCart } from '../features/cart/cartSlice'


function CharCard() {
  const {cardId} = useParams();
  const char = useSelector(charData);
  const loading = useSelector(charLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    // const get = async () => {
    //   const cardData = await getChar(cardId);
    //   setChar(cardData);
    //   setLoading(false);
    // }
    // get();
    dispatch(fetchCharRequest(cardId));
  }, [dispatch]);

  //if (loading) return <div className='ldng_scrn'>Загрузка...</div>;

  return (
    <div className='char_card'>
      <div className='char_avatar'><img src={char.image} alt=""></img></div>
      <div className='char_info'>
        <p><span>Name</span><span>{char.name}</span></p>
        <p><span>Gender</span><span>{char.gender}</span></p>
        <p><span>Species</span><span>{char.species}</span></p>
        <p><span>Type</span><span>{char.type}</span></p>        
        <p><span>Status</span><span>{char.status}</span></p>
        {/* <p><span>Location</span><span>{char.location.name}</span></p>         */}
      </div>
      <div className='void'></div>
      <div className='button'>
        <button onClick={() => {dispatch(addToCart(char))}}>Buy</button>
      </div>
    </div>    
  )
}

export default CharCard