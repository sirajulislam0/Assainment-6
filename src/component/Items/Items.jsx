import { use, useState } from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";


const Items = ({ productsPromised }) => {


    const products = use(productsPromised);

    const [selected, setSelected] = useState("selected");
    const [selectedCarts, setSelectedCarts] = useState([]);




    return (
        <div>
            <div className='flex flex-col text-center'>
                <h2 className='font-bold text-[30px]'>Premium Digital Tools</h2>
                <p className='text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

            </div>
            <div className='space-x-4 items-center text-center'>
                <button onClick={() => setSelected('selected')} className='btn btn-primary'>Products</button>
                <button onClick={() => setSelected('notselected')} className='btn'>Cart( {selectedCarts.length})</button>
            </div>





            {
                selected === "selected" ? <Products products={products} selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts}></Products> 
                :<Cart selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts}></Cart> 

            }

        </div>


    );
};

export default Items;