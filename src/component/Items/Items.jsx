import { use, useState } from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";


const Items = ({ productsPromised }) => {


    const products = use(productsPromised);

    const [selected, setSelected] = useState("selected");
    const [selectedCart, setSelectedCart] = useState([]);




    return (
        <div>
            <div className='flex flex-col text-center'>
                <h2 className='font-bold text-[30px]'>Premium Digital Tools</h2>
                <p className='text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

            </div>
            <div className='space-x-4 items-center text-center'>
                <button onClick={() => setSelected('selected')} className='btn btn-primary'>Products</button>
                <button onClick={() => setSelected('notselected')} className='btn'>Cart (2)</button>
            </div>



        

            {
                selected === "selected" ?<Products products={products}></Products>: 
                <Cart selectedCart = {selectedCart} setSelectedCart  = {setSelectedCart}></Cart> 
                
            }

        </div>


    );
};

export default Items;