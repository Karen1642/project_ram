import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

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

  const handleBuyOnClick = () => {
      dispatch(addToCart(char));   
  }  

  return (
    <div className='char_card_wrapper'>
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
            handleBuyOnClick = {handleBuyOnClick}   
          />
          : <div className='void_scrn'>Нет данных</div>
      }
    </div>    
  )
}

export default CharCard