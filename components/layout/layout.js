import { Fragment } from "react";
import NavBar from "./navBar";
import Foot from "./foot"

function Layout(props){
    return<Fragment>
        <div id="page-top">
        <NavBar />
        <main>{props.children}</main>
        </div>
        <Foot />
    </Fragment>
};

export default Layout;