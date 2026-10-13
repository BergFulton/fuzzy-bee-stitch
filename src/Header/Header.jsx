import Nav from './Nav'
import "./Header.css"
function Header (){
    return (
        <header className='header-container'>
            <h1>Fuzzy Bee Stitchery</h1>
            <Nav/>
        </header>
    )
}

export default Header;