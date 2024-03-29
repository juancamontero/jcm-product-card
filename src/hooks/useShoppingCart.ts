import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/productInterfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});
    const onProductCountChange = ({
        count,
        product,
    }: {
        count: number;
        product: Product;
    }) => {
        setShoppingCart((oldShoppingCart) => {

            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                console.log(toDelete);

                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count },
            };
        });
    };

    return {
        shoppingCart,
        onProductCountChange
    }
}