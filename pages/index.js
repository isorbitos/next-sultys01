import { Fragment } from "react";
import ContactUs from "../components/contacts/contactUs";
import MasterHeader from "../components/home-page/mastheader";
import Pristatymas from "../components/home-page/pristatymas";
import Storyline from "../components/home-page/storyline";
import Foot from "../components/layout/foot";
import Products from "../components/products/products";
import { getFeaturedProducts } from "../lib/products-util";
import { getAllStorys } from "../lib/story-util";

function Home(props) {
  return (<Fragment>
        {/* TODO pakeist piesinio importa*/}
        <MasterHeader />
        <Products products={props.products}/>
        <Pristatymas />
        <Storyline storys={props.storys}/>
        {/* TODO sutvarkyt mapso css */}
        <ContactUs />
        <Foot />
        
        
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="js/scripts.js"></script>
  </Fragment>
   
  )
}

export function getStaticProps(){
  const featuredProducts = getFeaturedProducts();
  const allStorys = getAllStorys();

  return{
    props:{
      products:featuredProducts,
      storys: allStorys
    }
  }
}

export default Home;