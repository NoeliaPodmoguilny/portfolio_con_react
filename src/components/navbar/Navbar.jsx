import { useState } from 'react';
import { MenuItems, ButtonNavBar } from './';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent paddingLeft">
            <div className="container justify-content-end">
                <ButtonNavBar 
                    handleMenuToggle={handleMenuToggle} 
                    isMenuOpen={isMenuOpen}/>
                <div className={`collapse navbar-collapse ${isMenuOpen && 'show'}`}>
                    <MenuItems 
                        handleMenuToggle={handleMenuToggle}/>
                </div>
            </div>
        </nav>
    );
}

