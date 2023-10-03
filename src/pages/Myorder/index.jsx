import {Layout} from '../../components/Layout'

function MyOrder () {

    return(
        <Layout>
            My order
            <div className='px-6 overflow-y-scroll'>
                {
                    context.order?.slice(-1)[0].map(product => (
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