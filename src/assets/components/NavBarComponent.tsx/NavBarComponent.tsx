import { useState } from 'react';
import './NavBar.css';

function NavBarComponent() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <div className='navBar'>
            <a href="/"><div className='navBar-present'>
                <img className='navBar-present-img' src="https://i.pinimg.com/originals/98/29/21/9829215db6f9210c0ae4e318e854cb1f.png" alt="Logo" />
                <h3 className='navBar-present-title'>The Rick And Morty App</h3>
            </div></a>
            
            <div className={`navBar-menu ${isMenuOpen ? 'mobile-menu active' : 'mobile-menu'}`}>
                <a href="characters" className="navBar-menu-option">Characters</a>
                <a href="chapters" className="navBar-menu-option">Chapters</a>
                <a href="scenarios" className="navBar-menu-option">Scenarios</a>
            </div>
            <button className={`menu-toggle-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                ☰
            </button>
        </div>
    );

}

export default NavBarComponent;