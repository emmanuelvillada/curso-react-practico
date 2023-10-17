import { ShoppingCartProvider } from '../../context'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../Myaccount'
import MyOrder from '../Myorder'
import MyOrders from '../Myorders'
import NotFound from '../Notfound'
import SignIn from '../Signin'
import Navbar from '../../components/navbar'
import './App.css'

//crea las rutas de las diferentes paginas
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/jewlery', element: <Home /> },
    { path: '/mensclothes', element: <Home /> },
    { path: '/womensclothes', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
