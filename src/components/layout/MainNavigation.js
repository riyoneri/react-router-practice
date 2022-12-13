import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return <div className={classes.header}>
        <h3 className={classes.logo}>Great Quotes</h3>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href='/quotes'>All Quotes</a>
                </li>
                <li>
                    <a href='/add-quote'>Add a Quote</a>
                </li>
            </ul>
        </nav>
    </div>
}

export default MainNavigation