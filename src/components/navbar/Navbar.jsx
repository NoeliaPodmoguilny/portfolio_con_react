import { useEffect, useState } from 'react';
import { MenuItems, ButtonNavBar } from './';

export const Navbar = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const shouldRenderButton = windowWidth <= 991;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent animate__animated animate__fadeIn">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                {
                    shouldRenderButton &&
                    <ButtonNavBar
                        handleMenuToggle={handleMenuToggle}
                        isMenuOpen={isMenuOpen}
                    />
                }
                <div className={`collapse navbar-collapse ${isMenuOpen && 'show'}`}>
                    <MenuItems
                        handleMenuToggle={handleMenuToggle}
                    />
                </div>
            </div>
        </nav>
    );
}

