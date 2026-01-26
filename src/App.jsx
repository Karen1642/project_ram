import { useState, useEffect } from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import './App.css'

async function postData (item, link) {
  //DELETE
  console.log("5");
  await fetch(link, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"123":item})
  })
}

async function GetAllChars() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return data.results;    
}

async function GetChar(cardId) {
  const response = await fetch("https://rickandmortyapi.com/api/character/" + cardId)
  const data = await response.json();

  return data;  
}

function Main() {
  return (
    <div className='main_pic'></div>    
  )
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
      const allChars = await GetAllChars();
      console.log("effect", allChars);
      setCharList(allChars);
    } 
    get();
  }, []);

  // const allChars = GetAllChars();
  // console.log(allChars);
  // setCharList(allChars);

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

  // const loadedChar = GetChar(cardId);
  // setChar(loadedChar);

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


function MyCards() {
  return (
    <div className='my_cards'></div>    
  )
}

function Cart() {
  const [cart, setCart] = useState("1,2");
  const [charList, setCharList] = useState([]);


  useEffect(() => {
      fetch("http://localhost:3000/cart")
      .then((response) => {
        console.log("response", response);
        return response.json()
      })
      .then((data) => {
          const res = data.join(',');
          console.log("data", data);
          setCart(data.join(','));
          //после data использовать map
      });
  }, []);

  let cartCharSet = cart;

  useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character/" + cartCharSet)
      .then((response) => response.json())
      .then((data) => {
          setCharList(data);
      });
  }, []);

  return (
    <div className='cart'>
      <div className='cart_list'>
        {charList.map((char, idx) => (
          <Link to={"/cards/" + char.id}>
            <p>
              <span>{idx}. </span>
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
        <Link to="/">Главная</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to="/cards">Чары</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to="/my-cards">Мои карточки</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
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
