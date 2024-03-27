import { env } from "@/config/env";



export const shopifyUrls = {
    products:{
        'all':`${env.SHOPIFY_HOSTNAME}/admin/api/2021-07/products.json`,
        mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/465664934182/products.json`,
    },
    collection: {
        'all':`${env.SHOPIFY_HOSTNAME}/admin/api/2021-07/smart_collections.json`,
        'products': (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`
    }
}