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

    //  Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase() || ''.includes(searchByTitle.toLowerCase() || ''))
    }



    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase() || ''.includes(searchByTitle.toLowerCase() || ''))
        }

        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])


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
                searchByTitle, setSearchByTitle,
                searchByCategory, setSearchByCategory

            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}