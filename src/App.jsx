import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'


 function CharsList() {
    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
            setCharList(data.results);
            setLoading(false);
        });
    }, []);
  
    if (loading) return <div>Загрузка...</div>;

    if (Array.isArray(charList)) {
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
  } else {
      return (
        <div className="charWrap">Nope!
        </div>
      );    
  }

}

function About() {
  return <h2>О проекте</h2>
}

function NotFound() {
  return <h2>Страница не найдена</h2>
}

function Site() {
  return (
    <div>
      {/* Простая навигация */}
      <nav>
        <Link to="/">Главная</Link> |{' '}
        <Link to="/about">О проекте</Link>
      </nav>
      {/* Определяем маршруты */}
      <Routes>
        <Route path="/" element={<CharsList />} />
        <Route path="/about" element={<About />} />
        {/* Этот маршрут сработает, если ничего не подошло */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Site
