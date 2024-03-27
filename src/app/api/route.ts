import { getProducts } from "@/services/shopify/products";

export async function GET() {
    const products = await getProducts();
    console.log(products);

    return Response.json({ products });
}