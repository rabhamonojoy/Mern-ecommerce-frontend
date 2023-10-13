import Navbar from "../navbar/navbar";

import ProductList from "../Productlist/ProductList";

function Home(){
    return( 
        <div>
            <Navbar>
                <ProductList></ProductList>
            </Navbar>
        </div>
    );
}
export default Home;