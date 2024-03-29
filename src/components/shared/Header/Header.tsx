import Link from "next/link";
import styles from './Header.module.sass'
import { cookies } from "next/headers";

export const Header = () => {
    const cookiesStore = cookies()
    const token = cookiesStore.get('accessToken')?.value

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
                </ul>
                    {token ? (<p>Hola!</p>) : (
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                    )}
            </nav>
        </header>
    )
}
