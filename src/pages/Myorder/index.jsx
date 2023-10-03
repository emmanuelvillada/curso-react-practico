import {Layout} from '../../components/Layout'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import {orderCard} from '../../components/OrderCArd'

function MyOrder () {
    const context = useContext(shoppingCartContext)

    return(
        <Layout>
            My order
            <div className='px-6 overflow-y-scroll'>
                {
                    context.order?.slice(-1)[0](product => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}
export default MyOrder