import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCharsRequest, myCardsIdsSelector, myCardsLoadingSelector } from '../../../features/myCard/myCardSlice'
import MyCardRoster from './MyCardRoster'
import MyCardLoading from './MyCardLoading'

function MyCards() {
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

  return (
    <div className='my_cards'>
      {
      loading ? <MyCardLoading /> : <MyCardRoster />
     }
    </div>    
  )
}

export default MyCards