import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharRequest, charLoading } from '../../../features/charCard/charCardSlice'
import CharCardLoading from './CharCardLoading'
import CharCardBlock from './CharCardBlock'



function CharCard() {
  const {cardId} = useParams();
  const loading = useSelector(charLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharRequest(cardId));
  }, [dispatch]);



  return (
    <div className='char_card_wrapper'>
      {
        loading ? <CharCardLoading /> : <CharCardBlock />
          
      }
    </div>    
  )
}

export default CharCard