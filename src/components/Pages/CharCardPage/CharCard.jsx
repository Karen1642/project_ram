import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { fetchCharRequest, charData, charLoading } from '../../../features/charCard/charCardSlice'
import { addToCart } from '../../../features/cart/cartSlice'
import CharCardItem from './CharCardItem'


function CharCard() {
  const {cardId} = useParams();
  const char = useSelector(charData);
  const loading = useSelector(charLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharRequest(cardId));
  }, [dispatch]);
  return (
    <div className='char_card'>
      {
        loading ? <div className='ldng_scrn'>Загрузка...</div>: 
          char ? 
          <CharCardItem 
            charName = {char.name}
            charStatus = {char.status}
            charSpecies = {char.species}
            charType = {char.type}
            charGender = {char.gender}
            charImage = {char.image}   
          />
          : <div className='void_scrn'>Нет данных</div>
      }
        <Link to="/cards">
          <div className='button'>
            <button onClick={() => {dispatch(addToCart(char))}}>Buy</button>
          </div>
        </Link>
    </div>    
  )
}

export default CharCard