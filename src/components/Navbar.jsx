import React from 'react'
import Logo from '../assets/purpleworldLogo.png'
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div>
        <header>
            <div className={styles.logoCtn}>
                <img src={Logo} />
            </div>
            <div className={styles.searchbarCtn}>
                <input type='search' />
            </div>

            <div className={styles.cartDiv}>
                <a>Login / Register</a>
                <CiHeart size={42}/>
                <HiOutlineShoppingBag size={42}/>
                <p className={styles.price}> ₦0.00</p>
            </div>
        </header>

        <div className={styles.categoryDiv}>
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
        </div>
    </div>
  )
}
