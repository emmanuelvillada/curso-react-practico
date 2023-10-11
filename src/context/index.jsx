import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    //estado contador del carrito
    const [count, setcount] = useState(0);
    //estado del product detail
    const [isDetailProductOpen, setisDetailProductOpen] = useState(false);

    //estado del producto elegido para el product detail
    const [productToShow, setProductToShow] = useState({})

    //funciones para abrir y cerrar el product detail
    const openProductDetail = () => setisDetailProductOpen(true);
    const closeProductDetail = () => setisDetailProductOpen(false);

    //estado del checkoutsidemenu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

    //funciones para abrir y cerrar el checkoutsidemenu
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //estado para el carrito de compras
    const [cartProducts, setCartProducts] = useState([])

    //estado para las ordenes
    const [order, setOrder] = useState([])

    //estado para los productos que se muestran
    const [items, setItems] = useState(null)

    const [filteredItems, setFilteredItems] = useState(null)

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])


    return (
        <ShoppingCartContext.Provider value=
            {{
                count, setcount,
                isDetailProductOpen, setisDetailProductOpen, openProductDetail, closeProductDetail,
                productToShow, setProductToShow,
                isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
                cartProducts, setCartProducts,
                order, setOrder,
                items, setItems,
                filteredItems, setFilteredItems,
                searchByTitle, setSearchByTitle

            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}