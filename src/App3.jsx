import { useState, useEffect } from 'react'
import './App.css'


function CharsList() {
    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch("https://rickandmortyapi.com/api/character")
        // .then((response) => response.json())
        // .then((data) => {
        //     setCharList(data.results);
        //     setLoading(false);
        // });

        //вынести в отдельную функцию
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        setCharList(data.results);
    }, []);

    if (loading) return <div>Загрузка...</div>;

    return (
      <div className="charWrap">
            {charList.map(char => (
              <div id={char.id} className="char">
                <img src={char.image} width="300" height="300" alt=""></img>
                <div>{char.name}</div>
                <div>{char.species}</div>
                <div>{char.status}</div>
              </div>
            ))}
      </div>
    );

}

export default CharsList
