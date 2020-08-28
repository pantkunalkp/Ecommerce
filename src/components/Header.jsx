import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth, useUser } from 'reactfire';
import LoggedInHeader from './header/Header';
import LoggedOutHeader from './header/LoginHeader'
import Cart from './Cart.jsx'
const Header = () => {
    const user = useUser()
    const auth = useAuth();
    if(user) {
        return <LoggedInHeader user = {user} auth = {auth()}  />
    }
    return (
        <LoggedOutHeader />
        // <header>
        //     <nav>
        //         <Link to="/">Home</Link>
        //         <Link to="/About">About</Link>
        //         <Link to="/Contact">Contact</Link>
        //     </nav> 
        //     <nav>
        //         {
        //             user ? <>
        //                 <Cart user = {user}/>
        //                 <a>{`Welcome ${user.displayName}`}
        //                 </a><button onClick={() => {auth().signOut()}}>Log Out</button>
        //             </>:<Link to="/Login">Login</Link>
        //         }
        //     </nav> 
        // </header>
    )
}

export default Header
