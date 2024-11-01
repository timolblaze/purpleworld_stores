import React from 'react'
import Logo from '../assets/purpleworldLogo.png'
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <header>
            <Link to='/' className={styles.logoCtn}>
                <img src={Logo} />
            </Link>
            <div className={styles.searchbarCtn}>
                <input type='search' />
            </div>

            <div className={styles.cartDiv}>
                <Link to='/login'>Login / Register</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/cart'> <HiOutlineShoppingBag size={42}/> </Link>
                <p className={styles.price}> $0.00</p>
            </div>
        </header>
        <div className={styles.categoryDiv} />
        
        {/* <div className={styles.categoryDiv}>
            <div className={styles.categoryDropDown}>
                <FaBars size={28} color='#f4f4f4'/>
                <p> All  Categories </p>
            </div>

            <ul>
                <li>Shop</li>
                <li>Drinks</li>
                <li>Groceries</li>
                <li>Health & Beauty</li>
                <li>Home & Kitchen</li>
                <li>Baby Foods</li>
            </ul>
        </div> */}
    </div>
  )
}
