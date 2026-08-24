import { Link } from 'react-router-dom'

function NavPanelComponent() { 
    return (
      <nav className='nav_pan'>
        <Link to="/cards">Чары</Link>
        <span className='separator'>|</span>
        <Link to="/my-cards">Мои карточки</Link>
        <span className='separator'>|</span>
        <Link to="/cart">Корзина</Link>
      </nav>
    )
}

export default NavPanelComponent;
