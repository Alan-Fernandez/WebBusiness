import Link from "next/link";
import styles from './Header.module.sass'

export const Header = () => {
    return (
        <header
            className={styles.Header}
        >
            <nav
                className={styles.nav}
            >
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/store">store</Link>
                    </li>
                    <li>
                        <Link href="/test">test</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
