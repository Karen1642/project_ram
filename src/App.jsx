import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './css/App.css'
import NavPanelComponent from './components/NavPanel/NavPanelComponent';

function App() {
  return (
    <div className='wrapper'>
      <ToastContainer />
      <NavPanelComponent />
      <Outlet />
    </div>
  )
}

export default App