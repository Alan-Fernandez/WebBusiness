import { ProductView } from "@/components/product/ProductView"
import { getProducts } from "@/services/shopify/products"


export default async function ProductPage({ searchParams }: ProductPageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

    return (
        <ProductView 
            product={product}
        />
    )
}