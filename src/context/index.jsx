import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export  const ShoppingCartProvider = ({children}) =>{
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
    const openCheckoutSideMenu = () => setisCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setisCheckoutSideMenuOpen(false);

    //estado para el carrito de compras
    const [cartProducts, setCartProducts] = useState([])

    return(
        <ShoppingCartContext.Provider value= 
        {{
            count, setcount,
            isDetailProductOpen,setisDetailProductOpen, openProductDetail, closeProductDetail, 
            productToShow, setProductToShow,
            isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
            cartProducts, setCartProducts
        
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}