import { useContext } from "react"
import  OrderCard  from "../../components/OrderCArd"
import { ShoppingCartContext } from "../../context"
import { Link } from "react-router-dom"
import Layout from "../../components/Layout"

function MyOrders() {

    context = useContext(ShoppingCartContext)


    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80'>
                <h1 className='font-semibold '>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts} />
                    </Link>
                ))
            }
        </Layout>
    )
}
export default MyOrders