import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Footer = () => {
    const location = useLocation()
    return (
        <footer>
            <p>Copyright &copy; 2020</p>
            {location.pathname === '/tasktrackerapp' && (< Link to='/about'>About</Link>)}
        </footer>
    )
}

export default Footer
