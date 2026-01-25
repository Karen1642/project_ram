import { useState, useEffect } from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import './App.css'


function Main() {
  return (
    <div className='main_pic'></div>    
  )
}

const AddData = async () => {
  await fetch('http://localhost:3000/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(), // Данные объекта превращаются в JSON-строку
  });
};

function PostData () {
  console.log("1");
  fetch("http://localhost:3000", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ title: "foo", body: "bar", userId: 1 })
  })
}

function CharList() {
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

function CharCard() {
  const {cardId} = useParams();
  const [char, setChar] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character/" + cardId)
      .then((response) => response.json())
      .then((data) => {
          setChar(data);
          setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className='char_card'>
      <div className='char_avatar'><img src={char.image} alt=""></img></div>
      <div className='char_info' onClick={PostData}>
        <p><span>Name</span><span>{char.name}</span></p>
        <p><span>Gender</span><span>{char.gender}</span></p>
        <p><span>Species</span><span>{char.species}</span></p>
        <p><span>Type</span><span>{char.type}</span></p>        
        <p><span>Status</span><span>{char.status}</span></p>
        <p><span>Location</span><span>{char.location.name}</span></p>        
      </div>
    </div>    
  )
}


function MyCards() {
  return (
    <div className='my_cards'></div>    
  )
}

function Cart() {
  return (
    <div className='cart'></div>    
  )
}

function NotFound() {
  return (
    <div className='not_found'>
      <div className='not_found_pic'></div>
      <p>Страница не найдена</p>
    </div>
  )
}

function Site() {
  return (
    <div className='wrapper'>
      {/* Простая навигация */}
      <nav className='nav_pan'>
        <Link to="/">Главная</Link>  | {' '}
        <Link to="/cards">Чары</Link>  | {' '}
        <Link to="/my-cards">Мои карточки</Link>  | {' '}
        <Link to="/cart">Корзина</Link>
      </nav>
      {/* Определяем маршруты */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cards" element={<CharList />} />
        <Route path="/cards/:cardId" element={<CharCard />} />
        <Route path="/my-cards" element={<MyCards />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Site
