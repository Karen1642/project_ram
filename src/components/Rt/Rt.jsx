import { Routes, Route } from 'react-router-dom'
import App from '../../App.jsx'
import MainPage from '../Pages/MainPage/MainPage.jsx'
import CharList from '../Pages/CharListPage/CharList.jsx'
import MyCards from '../Pages/MyCard/MyCards.jsx'
import Cart from '../Pages/CartPage/Cart.jsx'
import CharCard from '../Pages/CharCardPage/CharCard.jsx'
import NotFound from '../Pages/NotFound/NotFound.jsx'

function Rt() {
  return (
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<MainPage />} />
            <Route path="cards" element={<CharList />} />
            <Route path="cards/:cardId" element={<CharCard />} />
            <Route path="my-cards" element={<MyCards />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default Rt;