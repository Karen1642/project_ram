import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { postData, getChar } from '../functions.jsx'

function CharCard() {
  const {cardId} = useParams();
  const [char, setChar] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      const cardData = await getChar(cardId);
      setChar(cardData);
      setLoading(false);
    }
    get();
  }, []);

  if (loading) return <div className='ldng_scrn'>Загрузка...</div>;

  return (
    <div className='char_card'>
      <div className='char_avatar'><img src={char.image} alt=""></img></div>
      <div className='char_info'>
        <p><span>Name</span><span>{char.name}</span></p>
        <p><span>Gender</span><span>{char.gender}</span></p>
        <p><span>Species</span><span>{char.species}</span></p>
        <p><span>Type</span><span>{char.type}</span></p>        
        <p><span>Status</span><span>{char.status}</span></p>
        <p><span>Location</span><span>{char.location.name}</span></p>        
      </div>
      <div className='void'></div>
      <div className='button'>
        <button onClick={() => {postData(char.id, 'http://localhost:3000/cart')}}>Buy</button>
      </div>
    </div>    
  )
}

export default CharCard