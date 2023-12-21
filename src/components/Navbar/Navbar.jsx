import './navbar.css'
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => {
    return (
        <nav>
            <ul className='listItem'>
                <li className='item'>
                    <FontAwesomeIcon icon={faCloud} />
                    WeatherApp
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;