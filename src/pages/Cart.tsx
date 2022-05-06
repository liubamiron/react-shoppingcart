import React, {useState} from "react";

export type CartItemType = {
    id: number
    name: string
    price: number
    amount: number
    count: number
    //category: any
    category: CategoryType
    title: string
    image: string
    item: any
    prevItems: any
    'category.name' : string

}

export type CategoryType = {
    id: string
    name: string
}

function Cart() {
    const [cartItems, setCartItems] = useState([] as CartItemType[]);

    const handleAddProductToBasket = (product: any) => {
        let newCartProducts = [...cartItems];

        let existProduct: any = 0;
        for (const item of newCartProducts) {
            if (item.id === product.id) {
                existProduct = item;
                break;
            }
        }

        if (existProduct !== 0) {
            existProduct.count = existProduct.count + 1

        } else {
            product.count = 1;
            newCartProducts.push(product)
        }
        return setCartItems(newCartProducts);

    };
    const removeProductFromBasket = (product: any) => {
        let newCartProducts = [...cartItems];

        let existProduct: any = 0;
        for (const item of newCartProducts) {
            if (item.id === product.id) {
                existProduct = item;
                break;
            }
        }

        if (existProduct.count > 1) {
            existProduct.count = existProduct.count - 1
            setCartItems(newCartProducts);

        } else {
            deleteProductFromCart(product)
        }

    };

    const deleteProductFromCart = (item: any) => {
        const newCartProducts = cartItems.filter(p => p !== item);
        setCartItems(newCartProducts);
    };

    const getTotalItems = (items: CartItemType[]) =>
        items.reduce((acc: number, item: CartItemType) => acc + item.count, 0)



    return (
        <div className="Cart">
            <div>
                Total products in shopping cart {cartItems.length}
                <br/>
                Total items in cart {getTotalItems(cartItems)}

                {cartItems.map((item: any) => (
                    <div key={item.id} style={{margin: '20px'}}>
                        <div>{`Name: ${item.name}, id: ${item.id}`}</div>
                        <div>{`Category Id: ${item.category.id}`}</div>
                        <div>{`Category name: ${item.category.name}`}</div>
                        <div>{`Price: ${item.price}`}</div>
                        <div> {`Count: ${item.count}`} </div>
                        <button
                            type="button"
                            onClick={() => handleAddProductToBasket(item)}
                        >
                            +
                        </button>
                        <button
                            type="button"
                            onClick={() => removeProductFromBasket(item)}
                        >
                            -
                        </button>
                        <br/>
                        <button
                            type="button"
                            onClick={() => deleteProductFromCart(item)}
                        >
                            delete
                        </button>
                        <div>{`Total price: ${item.price * item.count}$`}</div>
                    </div>))}

            </div>
        </div>
    );

}
export default Cart;