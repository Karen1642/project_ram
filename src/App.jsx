import { useState, useEffect } from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import './App.css'
import NotFound from './NotFound.jsx'
import MainPage from './MainPage.jsx'
import MyCards from './MyCards.jsx'
import { getAllChars, postData, getCart } from './functions.jsx'

async function GetChar(cardId) {
  const response = await fetch("https://rickandmortyapi.com/api/character/" + cardId)
  const data = await response.json();

  return data;  
}

function CharList() {
  const [charList, setCharList] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     fetch("https://rickandmortyapi.com/api/character")
  //     .then((response) => response.json())
  //     .then((data) => {
  //         setCharList(data.results);
  //         setLoading(false);
  //     });
  // }, []);

  // if (loading) return <div>Загрузка...</div>;
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

function Cart() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    const get = async () => {
      const cartData = await getCart();
      const response = await fetch("https://rickandmortyapi.com/api/character/" + cartData);
      const contentList = await response.json();
      setCharList(contentList);
    }
    get();
  }, []);

  return (
    <div className='cart'>
      <div className='cart_list'>
        {charList.map((char, idx) => (
          <Link to={"/cards/" + char.id}>
            <p>
              <span>{idx}. </span>
              <img src={char.image} alt="" style={{width:"100px"}}></img>
              <span>{char.name}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
              <span>{char.species}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
              <span>{char.status}</span>
            </p>
          </Link>
        ))}
      </div>
      <div>
        <button>Pay</button>
      </div>
    </div>   
  )
}

function App() {
  return (
    <div className='wrapper'>
      {/* Простая навигация */}
      <nav className='nav_pan'>
        <Link to="/">Главная</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to="/cards">Чары</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to="/my-cards">Мои карточки</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to="/cart">Корзина</Link>
      </nav>
      {/* Определяем маршруты */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cards" element={<CharList />} />
        <Route path="/cards/:cardId" element={<CharCard />} />
        <Route path="/my-cards" element={<MyCards />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
