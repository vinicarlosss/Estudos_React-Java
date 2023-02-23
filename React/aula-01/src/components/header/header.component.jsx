import './style.css'
import Logo from '../../assets/img/digadiga-logo.png'


export function Header() {
    return (
        <header className='header'>
            <img src={Logo} />
            <div className='navbar'>
                <a className='navitem' href=''>About us</a>
                <a className='navitem' href='#recent-project'>Our Projects</a>
                <a className='navitem' href='#'>Clients</a>
            </div>
        </header>

    )
}