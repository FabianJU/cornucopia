import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className = "nav_bar">
        <div id = "nav_container">
            <img src = {require("../static/logo.png")} alt = "LOGO"/>
            <div class = "right">
                <ul>
                    <li><Link to='/'>Fridge</Link></li>
                    <li><a>Favorites</a></li>
                    <li><a>Profile</a></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar;