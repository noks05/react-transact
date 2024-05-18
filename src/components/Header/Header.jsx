import "./header.css";
import Logo from '../Logo/Logo.jsx';
import Lang from '../Lang/Lang.jsx';

function Header(){
    return(
        <header className="header container">
            <Logo/>
            <Lang/>
        </header>
    )
}

export default Header

