import Link from "next/link";
import styles from './Header.module.sass'
import { validateAccessToken } from '@/utils/auth/validateAccessToken'

export const Header = async () => {
    // const customer = await validateAccessToken()

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
                    {/* {customer?.firstName ? 
                        (<p>Hola! {customer.firstName}</p>) : 
                        (<Link href="/login">
                            Login
                        </Link>)
                    } */}
                </ul>
            </nav>
        </header>
    )
}
