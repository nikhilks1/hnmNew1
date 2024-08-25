import logo from './assets/images/logo/logo.png'
function Header(){
    return(
        <>
       <header>
        <nav>
            <img className="logo" src={logo} alt="logo" />
            <ul className='navItems'>
                <li>Home</li>
                <li>Service</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            <input className="searchBox" placeholder="Search Here" type="text" />
            <button className="navBtn">Search</button>
        </nav>
       </header>
        </>
    )
}

export default Header