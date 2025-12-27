import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { data } from '../../constants';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(firebase.auth, (currentUser) => {
    //         setUser(currentUser);
    //     });
    //     return () => unsubscribe();
    // }, []);

    // const handleLogout = async () => {
    //     try {
    //         await signOut(firebase.auth);
    //         alert('Logged out successfully!');
    //         navigate('/');
    //     } catch (error) {
    //         console.error('Logout error:', error);
    //         alert('Logout failed—check console.');
    //     }
    // };

    return (
        <header className="header">
            <div className="logo">{data.brandName}</div>
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
            </button>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                {/* <ul className="nav-list">
                    {user ? (
                        <>
                            <li className="nav-item">
                                <span className="user-greeting">Welcome, {user.displayName || 'User'}!</span>
                            </li>
                            <li className="nav-item">
                                <button onClick={handleLogout} className="logout-btn">
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                </ul> */}
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/courses">Cources</Link></li>
                    <li className="nav-item"><Link to="/canvas">Canvas</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;