import React, {useEffect, useState} from 'react';
//import React from "react";
//import '/App.css';

export interface data {
    id: number,
    name: string,
    price: number,
    category: string,
    count: any
}

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


function Home() {
    const [data, setData] = React.useState([]);
    const [sortDate, setSortData] = React.useState([]);
    const [sortType, setSortType] = React.useState('asc');
    const [cartItems, setCartItems] = useState([] as CartItemType[])


    useEffect(() => {
        fetch("http://localhost:3001/api/products/")
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                    setSortData(result)
                },)
    }, []);

    // sort array by desc and asc
    // useEffect(() => {
    //     console.log("sorting")
    //     const sortArray = (type: any) => {
    //
    //         let dataList = [...sortDate];
    //         if (type === 'asc') {
    //             dataList.sort((a: any, b: any) => a.price - b.price);
    //         }
    //         if (type === 'desc') {
    //             dataList.sort((a: any, b: any) => b.price - a.price);
    //         }
    //         setSortData(dataList);
    //         //testFunction(dataList);
    //     };
    //     sortArray(sortType);
    // }, [sortType]);





//     useEffect(() => {
//         const filterByCategoryTypeWithSorting = (type: any) => {
// console.log('type', type)
//             let dataList = [...data];
//             dataList = dataList.filter(product => product.category.id === type);
//             setData(dataList);
//         };
//         filterByCategoryTypeWithSorting(sortType);
//     }, [sortType]);



// add product to basket
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


    // const handleAddToCart = (selectedProduct: CartItemType) => {
    //    setCartItems((cartItemsArray:any) => {
    //         //1. Is the item already added in the cart is (boolean true/false)
    //        const isItemInCart = cartItemsArray.find((eachCartItem:any) => eachCartItem.id === selectedProduct.id);
    //
    //
    //         if (isItemInCart) {
    //             return cartItemsArray.map((item:any) =>
    //                 item.id === selectedProduct.id ? {...item, count: item.count + 1} : item
    //             )
    //
    //         }
    //         //First time the item is added
    //         let newlyAddedItem: (CartItemType | { price: number; name: string; count: number; id: number; category: CategoryType; title: string })[];
    //         newlyAddedItem = [...cartItemsArray, {...selectedProduct, count: 1}];
    //         return newlyAddedItem
    //     })
    // }
    /////
    //$rooms = Imobil::select('rooms_nr')->distinct()->get();
    //
    console.log('cart', cartItems);
    // console.log('data', data);



    const filterByCategoryTypeWithSorting = (type: any) => {
        //1 filtering
        let filteredProducts = filterByCategoryType2(type);
        //2 sorting
        sortingProductsByType(sortType, filteredProducts);
    }

    const filterByCategoryType2 = (type: any) => {
        let dataList = [...data];
        dataList = dataList.filter(product => product.category.id === type);
        return dataList;
    }

    const sortingProductsByType = (sortType: any, filteredProducts: any) => {
        let dataList = [...filteredProducts];
        if (sortType === 'asc') {
            dataList.sort((a: any, b: any) => a.price - b.price);
        }
        if (sortType === 'desc') {
            dataList.sort((a: any, b: any) => b.price - a.price);
        }
        setSortData(dataList);
        setSortType(sortType);
    }

    //const categoryProducts:any = data.filter(product => product.category.id === 'vegetables')
    //console.log('vegetables', categoryProducts);
    // console.log('category', data);

    return (
        <div className="App">
            {/*<select onChange={(e) => filterByCategoryTypeWithSorting(e.target.value)}>*/}
            {/*    <option>Sort products by Category</option>*/}
            {/*    <option value="vegetables">Vegetables</option>*/}
            {/*    <option value="grain">Grain</option>*/}
            {/*    <option value="lactose">Lactose</option>*/}
            {/*</select>*/}

            {/*<select onChange={(e) => sortingProductsByType(e.target.value, sortDate)}>*/}
            {/*    <option defaultValue={"asc"} >Sort products by Price</option>*/}
            {/*    <option value="asc">Asc</option>*/}
            {/*    <option value="desc">Desc</option>*/}
            {/*</select>*/}
            {/*{sortDate.map(product => (*/}
            {/*    <div key={product.id} style={{margin: '30px'}}>*/}
            {/*        <div>{`Name: ${product.name}, id: ${product.id}`}</div>*/}
            {/*        <div>{`Category Id: ${product.category.id}`}</div>*/}
            {/*        <div>{`Category name: ${product.category.name}`}</div>*/}
            {/*        <div>{`Price: ${product.price}`}</div>*/}
            {/*        <button*/}
            {/*            type="button"*/}
            {/*            //onClick={() => handleAddToCart(product)}*/}
            {/*            onClick={() => handleAddProductToBasket(product)}*/}
            {/*        >*/}
            {/*            Add to basket*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*))}*/}
            <table>
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th><select onChange={(e) => filterByCategoryTypeWithSorting(e.target.value)}>
                        <option defaultValue={'grain'}>Sort products by Category</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="grain">Grain</option>
                        <option value="lactose">Lactose</option>
                    </select></th>
                    <th>Category name</th>
                    <th><select onChange={(e) => sortingProductsByType(e.target.value, sortDate)}>
                        <option defaultValue={'asc'}>Sort products by Price</option>
                        <option value="asc">Asc</option>
                        <option value="desc">Desc</option>
                    </select></th>
                    <th>cart</th>
                </tr>
                </thead>
                <tbody>
                {sortDate.map((product: any) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.category.id}</td>
                        <td>{product.category.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <button
                                type="button"
                                onClick={() => handleAddProductToBasket(product)}
                            >
                                Add to basket
                            </button>
                        </td>
                    </tr>
                    ))},</tbody>
                {/*<tfoot></tfoot>*/}
            </table>
            <br/>
            <br/>

            Total products in shopping cart {cartItems.length}
            <br/>
            Total items in cart {getTotalItems(cartItems)}
            <table>
                <thead>
                <tr>
                    <td>Product Name</td>
                    <td>Category Id</td>
                    <td>Category Name</td>
                    <td>Product Price</td>
                    <td>Add product</td>
                    <td>Remove</td>
                    <td>Count</td>
                    <td>Total Price</td>
                </tr>
                </thead>
                {cartItems.map((product: any) => (
                    <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.category.id}</td>
                        <td>{product.category.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <button
                                type="button"
                                onClick={() => handleAddProductToBasket(product)}
                            >
                                +
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                onClick={() => removeProductFromBasket(product)}
                            >
                                -
                            </button>
                        </td>
                        <td>
                            {product.count}
                        </td>
                        <td>
                            {product.count * product.price}
                        </td>
                    </tr>
                    </tbody>))},
                <tfoot>
                </tfoot>
            </table>

            {/*{cartItems.map((item: any) => (*/}
            {/*    <div key={item.id} style={{margin: '20px'}}>*/}
            {/*        <div>{`Name: ${item.name}, id: ${item.id}`}</div>*/}
            {/*        <div>{`Category Id: ${item.category.id}`}</div>*/}
            {/*        <div>{`Category name: ${item.category.name}`}</div>*/}
            {/*        <div>{`Price: ${item.price}`}</div>*/}
            {/*        <div> {`Count: ${item.count}`} </div>*/}
            {/*        <button*/}
            {/*            type="button"*/}
            {/*            onClick={() => handleAddProductToBasket(item)}*/}
            {/*        >*/}
            {/*            +*/}
            {/*        </button>*/}
            {/*        <button*/}
            {/*            type="button"*/}
            {/*            onClick={() => removeProductFromBasket(item)}*/}
            {/*        >*/}
            {/*            -*/}
            {/*        </button>*/}
            {/*        <br/>*/}
            {/*        <button*/}
            {/*            type="button"*/}
            {/*            onClick={() => deleteProductFromCart(item)}*/}
            {/*        >*/}
            {/*            delete*/}
            {/*        </button>*/}
            {/*        <div>{`Total price: ${item.price * item.count}$`}</div>*/}
            {/*    </div>))}*/}


        </div>
    );
}


export default Home;







