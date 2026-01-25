import { useState } from 'react'
import './App.css'

 async function LoadChars() {
    const response = fetch("https://rickandmortyapi.com/api/character");
    const data = response.json();

    return data.results;
}


async function CharList2() {
  const [charList, setCharList] = useState([]);

  const charData = await LoadChars();
  setCharList(charData);

  return (
    <div className="charWrap">
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

const chr3 = CharList2();

export default chr3
