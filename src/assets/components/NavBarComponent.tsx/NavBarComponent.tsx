import { useState } from 'react';
import './NavBar.css';

function NavBarComponent() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <div className='navBar'>
            <div className='navBar-present'>
                <img className='navBar-present-img' src="https://i.pinimg.com/originals/98/29/21/9829215db6f9210c0ae4e318e854cb1f.png" alt="Logo" />
                <h3 className='navBar-present-title'>The Rick And Morty App</h3>
            </div>
            <div className={`navBar-menu ${isMenuOpen ? 'mobile-menu active' : 'mobile-menu'}`}>
                <a href="#" className="navBar-menu-option">Personajes</a>
                <a href="#" className="navBar-menu-option">Capitulos</a>
                <a href="#" className="navBar-menu-option">Escenarios</a>
            </div>
            <button className={`menu-toggle-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                ☰
            </button>
        </div>
    );

}

export default NavBarComponent;