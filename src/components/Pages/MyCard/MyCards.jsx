import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCharsRequest, myCardsSelector, myCardsIdsSelector, myCardsLoadingSelector } from '../../../features/myCard/myCardSlice'
import MyCardsCard from './MyCardsCard'

function MyCards() {
  const myCards = useSelector(myCardsSelector);
  const myCardsIds = useSelector(myCardsIdsSelector);
  const loading = useSelector(myCardsLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
      let charIds = "";

      const res = myCardsIds.forEach((res, idx) => (
        charIds = charIds + (idx==0?'':',') + res.id.toString()         
      ));
      dispatch(getCharsRequest(charIds));
  }, []);

  if (loading) return <div className='ldng_scrn'>Загрузка...</div>;

  return (
    <div className='my_cards'>
      {
      loading ? <div className='ldng_scrn'>Загрузка...</div>: 
        myCards ? myCards.map(char => (
          <MyCardsCard 
            charName = {char.name}
            charStatus = {char.status}
            charSpecies = {char.species}
            charType = {char.type}
            charGender = {char.gender}
            charImage = {char.image}
            charLocation = {char.location.name}   
          />
      )): <div className='void_scrn'>Нет данных</div>
      }
    </div>    
  )
}

export default MyCards