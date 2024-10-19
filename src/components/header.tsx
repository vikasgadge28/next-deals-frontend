import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
export const Header = ()=>{

    const location = useLocation();
    const path = location.pathname;
    console.log(path)

    return (
        <div className="w-full absolute h-fit bg-primary flex items-center justify-between py-2 px-8 rounded-b-xl">
            <img src={logo} className='w-[150px]'></img>

            <ul className=' space-x-8 hidden md:flex lg:flex items-center'>
                <Link to={'/'} className={`${path==='/' && "text-secondary"}`}>Home</Link>
                <Link to={'/about'} className={`${path==='/about' && "text-secondary"}`}>About Us</Link>
                <Link to={'/projects'} className={`${path==='/projects' && "text-secondary"}`}>Projects</Link>
                <Link to={'/hotels'} className={`${path==='/hotels' && "text-secondary"}`}>Hotels</Link>
                <Link to={'/lands'} className={`${path==='/lands' && "text-secondary"}`}>Lands</Link>
                <Link to={'/contact'} className={`${path==='/contact' && "text-secondary"}`}>Contact Us</Link>
            </ul>

            <div>
                <h3>city</h3>
            </div>

        </div>
    )
}