import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return <div className={classes.header}>
        <h3 className={classes.logo}>Great Quotes</h3>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/quotes' activeClassName={classes.active} >All Quotes</NavLink>
                </li>
                <li>
                    <NavLink to='/add-quote' activeClassName={classes.active} >Add a Quote</NavLink>
                </li>
            </ul>
        </nav>
    </div>
}

export default MainNavigation