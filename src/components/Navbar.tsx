import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
    <nav className={styles.navbar}>
        <div>
            
            <span className={styles.logo}>
                <a href="#">sneakers</a>
            </span>
            
            <ul className={styles.navLink}>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div>
            <span>🛒</span>
            <img src="" alt="" />
        </div>
    </nav>
    )
}

export default Navbar