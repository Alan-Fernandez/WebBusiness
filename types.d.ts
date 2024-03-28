interface Image {
    id: number;
    alt: null | string;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: number[];
}


interface Product {
    id: string; // Cambia el tipo de id a string
    title: string;
    body_html: string;
    vendor: string;
    product_type: string;
    created_at: string;
    handle: string;
    updated_at: string;
    published_at: string;
    template_suffix: null | string;
    published_scope: string;
    tags: string;
    status: string;
    admin_graphql_api_id: string;
    variants: Array<{ /* Detalles de la variante */ }>; // Necesitarías definir el tipo para las variantes
    options: Array<{ /* Detalles de las opciones */ }>; // Necesitarías definir el tipo para las opciones
    images: Image[]; 
    image: Image; 
    description: string; // Añade las propiedades que faltan
    price: number;
    quantity: number;
}


interface CategoryProps {
    params: {
        categories: string[],
    }
    searchParams?: string
}

interface ErrorProps {
    error: Error;
    reset: () => void;
}


interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

type ProductType = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
};


interface ProductCardInterface {
    product: ProductType
}

interface ProductsWrapperProps {
    products: ProductType[]
}


interface ProductPageProps {
    searchParams: {
        id: string;
    }
}


interface ProductViewItemsOrderProps {
    maxQuantity: number,
}

interface ProductViewProps {
    product: ProductType
}


type SanitizeHTMLProps = {
    children: string;
    tag: string;
} & HTMLAttributes<HTMLElement>;
