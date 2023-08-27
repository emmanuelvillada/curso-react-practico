import { NavLink } from 'react-router-dom'

function Navbar () {
    // activa el estilo para el underline de la pagina que este activa en el momento
    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className = 'flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className = 'flex justify-between items-center gap-3'>
                
                <li>
                    <NavLink to='/'> 
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className ='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to ='/clothes' className ='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' className ='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures' className ='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' className ='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        Toys
                    </NavLink>
                    <li>
                    <NavLink to='/others' className ='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        Others
                    </NavLink>
                </li>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to = '/my-orders' className ='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/my-account' className ='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to = 'sign-in' className ='{({ isActive }) =>
                isActive ? activeStyle : undefined
            }'>
                        Sign in
                    </NavLink>
                </li>
                <li>
                        carrito 0
                </li>
                <li>
                    emmanuelvillada1903@gmail.com
                </li>
            </ul>
        </nav>
    )
}

export default Navbar