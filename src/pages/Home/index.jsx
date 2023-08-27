import { useState } from 'react'
import Layout from '../../components/Layout.index.jsx'

function Home () {

    const  [items, setItmes] = useState(null)

    
    return (
        <Layout>
            Home
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
        </Layout>

    )
}

export default Home