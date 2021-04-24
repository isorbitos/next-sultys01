import { Fragment } from "react";
import NavBar from "./navBar";
import Foot from "./foot"

function Layout(props){
    return<Fragment>
        <div id="page-top">
        <NavBar />
        <main>{props.children}</main>
        {/* <Foot /> */}
        </div>
        
    </Fragment>
};

export default Layout;