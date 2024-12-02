import { Link } from 'react-router-dom';
import './header.css';
import { NAVBAR } from './constants';
import { useAuth } from '../Auth/AuthContext';


function Header() {
  const {isAuthenticated} = useAuth()
  console.log('isAuthenticated====',isAuthenticated);
  
  return (
    <div className="header">
      {isAuthenticated && 
      <nav className='nav'>
        <ul>
          {NAVBAR.map((el, i) => {
            return (<li key={i}>
              <Link to={el.src}>{el.name}</Link>
            </li>)
          })}
        </ul>
      </nav>}
    </div>
  );
}

export default Header;