

export const ButtonNavBar = ({handleMenuToggle, isMenuOpen}) => {
    return (
        <button
            className={`navbar-toggler ${isMenuOpen && 'collapsed'}`}
            type="button"
            onClick={handleMenuToggle}>
            <span className="navbar-toggler-icon"></span>
        </button>
    )
}
