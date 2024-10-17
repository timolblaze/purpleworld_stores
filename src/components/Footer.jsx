import React from 'react'
import Logo from '../assets/purpleworldLogo.png'
import styles from './Footer.module.css'

export default function Footer() {
 
    return (
        <footer>
            <div className={styles.footer}>

                <div>
                    <div>
                        <img src={Logo} alt="PurpleWorld Logo" />
                    </div>
                    <p>Shop smart, shop savvy – your one-stop destination for all things trendy!</p>
                    <ul>
                        <li>Shop D 133, ElRufai Plaza, Wuse Market, Wuse, Abuja.</li>
                        <li>Phone: 08188938913</li>
                        <li>support@ninolynks.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Product Categories</h3>
                    <ul>
                        <li>Back to School</li>
                        <li>Cleaning Agents</li>
                        <li>Cooking Condiments</li>
                        <li>Drinks</li>
                        <li>Groceries</li>
                        <li>Health & Beauty</li>
                        <li>Home & Kitchen</li>
                        <li>Pet Food</li>
                        <li>Toiletries</li>
                    </ul>
                </div>
                <div>
                    <h3>Links</h3>
                    <ul>
                        <li>Shop</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                <p>Copyright &copy; 2024</p>
            </div>
        </footer>
    
  )
}
