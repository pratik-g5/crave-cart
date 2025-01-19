import image from "./logo.jpg";

const Header = () => {
    return (
        <div className="header">
            <img id="logo" src={image} />
        <div className="navItems">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <i id="icon" className="fas fa-user" />
            </ul>
        </div>
        </div>
    );
}


export default Header;