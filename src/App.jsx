import { Routes, Route, Link} from 'react-router-dom'
import './css/App.css'
import MainPage from './components/MainPage.jsx'
import CharList from './components/CharList.jsx'
import MyCards from './components/MyCards.jsx'
import Cart from './components/Cart.jsx'
import CharCard from './components/CharCard.jsx'
import NotFound from './components/NotFound.jsx'

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