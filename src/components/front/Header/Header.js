import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({cartItems}) => {
    return (
        <header className="header" >
            <div>
                <h1>
                    <Link to="/" className="logo">
                    <img className="image" src="https://blog.flamingtext.com/blog/2023/07/29/flamingtext_com_1690624136_1006539026.png" border="0" alt="logo"></img>

                    </Link>
                </h1>
            </div>

            <div className="header-links">
            <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/signup">SignUp</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/cart" className="cart">
                            <i class="fas fa-shopping-cart"></i>
                            <span className='cart-length'>
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header >
    );
};

export default Header;