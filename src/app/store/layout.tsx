import { getCollections } from "@/services/shopify/collections"
import Link from "next/link"
import styles from './StoreLayout.module.sass'

export default async function  leyout ({children}:{children: React.ReactNode}) {
    const collection = await getCollections()
    return (
        <main className={styles.StoreLayout}>
            <h1>Explore</h1>
            <nav 
                className={styles.nav}
            >
                <ul className={styles.StoreLayout__list}>
                    {
                        collection.map((collection)=>{
                            return (
                                    <Link
                                        href={`/store/${collection.handle}`}
                                        className={styles.StoreLayout__chip}
                                        key={collection.id}
                                    >
                                        {collection.title}
                                    </Link>
                            )
                        })
                    }
                </ul>
            </nav>
            {children}
        </main>
    )
}