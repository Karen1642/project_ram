import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllChars } from './functions.jsx'

function CharList() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    const get = async () => {
      const allChars = await getAllChars();
      setCharList(allChars);
    } 
    get();
  }, []);

  return (
    <div className="charsWrapper">
          {charList.map(char => (
            <Link to={"/cards/" + char.id}>
              <div className="char">
                <img src={char.image} alt=""></img>
                <div>{char.name}</div>
                <div>{char.species}</div>
                <div>{char.status}</div>
              </div>
            </Link>
          ))}
    </div>
  );
}

export default CharList