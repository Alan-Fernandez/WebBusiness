import { shopifyUrls } from "./urls";
import { env } from "@/config/env";



export const getCollections = async ():Promise<Product[]> => {
    try {    
        const response = await fetch(shopifyUrls.collection.all,{
        headers: new Headers({
            'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
        })
        });

        const{smart_collections}= await response.json();
        const trasformedCollections = smart_collections.map((collection:Product)=>{
            return {
                id: collection.id,
                title: collection.title,
                handle: collection.handle,
            }
        })
        return trasformedCollections;

    } catch (error) {
        throw error;
    }
}


export const getCollectionProducts = async (id: string) => {
    try {
        const response = await fetch(shopifyUrls.collections.products(id), {
        headers: new Headers({
            'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
        })
        })
        const { products } = await response.json()
        return products
    } catch (error) {
        console.log(error)
    }
}