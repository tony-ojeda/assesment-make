import styles from './Header.module.scss';
import make from '../../assets/images/make.png';

function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={ styles.navbar }>
                    <div className="navbar__brand">
                        <img className={ styles.logo } src={ make } alt="logo" />
                    </div>
                    <div className={ styles.navbar__links }>
                        <ul>
                            <li className={ styles.navbar__link }>
                                <a href="#">Home</a>
                            </li>
                            <li className={ styles.navbar__link }>
                                <a href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
