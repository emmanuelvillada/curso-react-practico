import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../context"
function Card({  price, tittle, image, category }) {
    const context = useContext(ShoppingCartContext)
    //creamos la variable para almacenar la informacion del producto
    const productData = { price, tittle, image, category }

    //funcion de click sobre una card
    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }
    //funcion para añadir productos al carrito de compra
    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }



    function isInCart() {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
    }

    const renderIcon = (id) => {
        isIncart()
    }

    //si el producto esta almacenado en el carrito se renderiza con un check icon sino pasa a la sifuiente funcion y se renderiza con un icono para agregar
    if (isInCart()) {
        return (
            <div
                className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>


            </div>
        )
    } else {
        return (
            <div
                className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                onClick={(event) => addProductsToCart(event, productData)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>


            </div>
        )
    }



    return (
        <div
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={() => showProduct(productData)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{tittle}</span>
                <img className='w-full h-full object-cover rounded-lg' src={image} alt={category} />
                {renderIcon(id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{tittle}</span>
                <span className='text-lg font-medium'>${price}</span>
            </p>
        </div>
    )
}



export default Card


