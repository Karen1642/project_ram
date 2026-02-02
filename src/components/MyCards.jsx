import { useState, useEffect } from 'react'
import { getData, getChar } from '../functions.jsx'

function MyCards() {
  const [myCardsList, setMyCardsList] = useState([]);

  useEffect(() => {
    const get = async () => {
      const myCharsData = await getData("http://localhost:3000/my_cards");
      const contentList = await getChar(myCharsData);

      if (Array.isArray(contentList)) {
        setMyCardsList(contentList);
      } else {
        setMyCardsList([contentList]);
      } 
    } 
    get();
  }, []);

  return (
    <div className='my_cards'>
      {myCardsList.map((char, idx) => (
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