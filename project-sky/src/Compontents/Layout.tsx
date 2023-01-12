import { Fragment } from "react"
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <Fragment>
            <h1>Layout</h1>
            <Outlet />
        </Fragment>
    );
}

export default Layout;