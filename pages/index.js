import { Fragment } from "react";
import ContactUs from "../components/contacts/contactUs";
import MasterHeader from "../components/home-page/mastheader";
import Pristatymas from "../components/home-page/pristatymas";
import Storyline from "../components/home-page/storyline";
import Products from "../components/products/products";

export default function Home() {
  return (<Fragment>
        {/* TODO pakeist piesinio importa*/}
        <MasterHeader />
        <Products />
        <Pristatymas />
        <Storyline />
        {/* TODO sutvarkyt mapso css */}
        <ContactUs />
        
        
        
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="js/scripts.js"></script>
  </Fragment>
   
  )
}
