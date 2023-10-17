import { useContext } from "react";
import { ShoppingCartContext } from "../../context"
import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'

function ProductDetail() {
    const context = useContext(ShoppingCartContext)

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setcount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    return (
        <aside
            className={`${context.isDetailProductOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon
                        className='h-6 w-6 text-black cursor-pointer'
                        onClick={() => context.closeProductDetail()}></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img
                    className='w-full h-full rounded-lg'
                    src={context.productToShow.image}
                    alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>${context.productToShow.title}</span>
                <span className='font-light text-sm'>${context.productToShow.description}</span>
            </p>
            <button onClick={(event) => addProductsToCart(event, context.productToShow)} className="font-medium bold border-black border mx-10 hover:from-white hover:to-#D9D9D9" >Add product to cart </button>
        </aside>
    )
}

export default ProductDetail