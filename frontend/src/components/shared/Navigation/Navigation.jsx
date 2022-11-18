import React from 'react'
import { Link } from 'react-router-dom' //page not refreshed
import styles from './Navigation.module.css';

const Navigation = () => {
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'centre'
    }

    const logoText = {
        marginLeft: "10px"
    }
    return (
        <nav className={`${styles.navbar} container`}>
            <Link to="/" style={brandStyle}>
                <img src="/images/logo.png" alt="logo" />
                <span style={logoText}>Clubhouse</span>
            </Link>
        </nav>
    )
}


export default Navigation