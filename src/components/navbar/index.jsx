import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

function Navbar() {
    // activa el estilo para el underline de la pagina que este activa en el momento
    const activeStyle = 'underline underline-offset-4'
    //consumimos el contexto 
    const context = useContext(ShoppingCartContext)
    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex justify-between items-center gap-3'>

                <li>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink to='/' className='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' className='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' className='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures' className='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' className='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        Toys
                    </NavLink>
                    <li>
                        <NavLink to='/others' className='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                            Others
                        </NavLink>
                    </li>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to='/my-orders' className='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' className='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='sign-in' className='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        Sign in
                    </NavLink>
                </li>
                <li className='flex items-center'> 
                    {/* icono de carrito de compras desde heroicons */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    {context.count}
                </li>
                <li>
                    emmanuelvillada1903@gmail.com
                </li>
            </ul>
        </nav>
    )
}

export default Navbar