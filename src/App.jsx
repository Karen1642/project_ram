import { Routes, Route, Link, useParams } from 'react-router-dom'
import './App.css'
import MainPage from './MainPage.jsx'
import CharList from './CharList.jsx'
import MyCards from './MyCards.jsx'
import Cart from './Cart.jsx'
import CharCard from './CharCard.jsx'
import NotFound from './NotFound.jsx'

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