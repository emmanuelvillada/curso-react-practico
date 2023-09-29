import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
function Home () {

    const  [items, setItmes] = useState(null)
    useEffect ( () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItmes(json))

    },[])

    return (
        <Layout>
            Home
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {items?.map(item => (
                    <Card key={item.id} price={item.price} tittle={item.tittle} image={item.image} category={item.category} />
                ))}
            </div>
            <ProductDetail />
        </Layout>
        
    )
}

export default Home