import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCharsRequest } from '../features/myCard/myCardSlice'
import { myCardsSelector, myCardsIdsSelector } from '../features/myCard/myCardSelectors'

function MyCards() {
  const [myCardsList, setMyCardsList] = useState([]);
  const myCards = useSelector(myCardsSelector);
  const myCardsIds = useSelector(myCardsIdsSelector);
  const dispatch = useDispatch();

  console.log("my_cards", myCards);
  console.log("my_cards_ids", myCardsIds);

  useEffect(() => {
    // const get = async () => {
    //   const myCharsData = await getData("http://localhost:3000/my_cards");

    //   let charIds = "";
    //   myCharsData.map((res, idx) => (
    //         charIds = charIds + (idx==0?'':',') + res.id.toString()         
    //       ));

    //   const contentList = await getChars(charIds);
    //   setMyCardsList(contentList);
    // } 
    // get();
      let charIds = "";
      myCardsIds.map((res, idx) => (
        charIds = charIds + (idx==0?'':',') + res.id.toString()         
      ));
      console.log("charIds", charIds);
      const contentList = dispatch(getCharsRequest(charIds));
      console.log("contentList", contentList);
      setMyCardsList(contentList);
  }, []);

  //if (loading) return <div className='ldng_scrn'>Загрузка...</div>;

  return (
    <div className='my_cards'>
      {myCards.map(char => (
        <div className='my_char_card'>
          <div className='my_char_avatar'><img src={char.image} alt=""></img></div>
          <div className='my_char_info'>
            <p><span>Name</span><span>{char.name}</span></p>
            <p><span>Gender</span><span>{char.gender}</span></p>
            <p><span>Species</span><span>{char.species}</span></p>
            <p><span>Type</span><span>{char.type}</span></p>        
            <p><span>Status</span><span>{char.status}</span></p>
            <p><span>Location</span><span>{char.location.name}</span></p>        
          </div>
        </div> 
      ))}
    </div>    
  )
}

export default MyCards