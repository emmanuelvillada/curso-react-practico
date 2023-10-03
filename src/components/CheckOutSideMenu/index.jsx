import { useContext } from "react";
import { ShoppingCartContext } from "../../context"
import { totalPrice } from "../../Utils";

function CheckOutSideMenu() {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handlecheckout = () => {
        const orderToAdd={
        date: Date.now(),
        products : context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice : totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order,orderToAdd])
    }
    context.setCartProducts([])
    context.setCount(0)

    

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"
                        onClick={() => Context.closeProductDetail()}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete = {handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6">
                <p className="flex justify-between items-center">
                    <span className="font-light">Precio total:</span>
                    <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className="w-full py-3 bg-black text-white" onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckOutSideMenu