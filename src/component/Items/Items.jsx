import { use, useState } from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";


const Items = ({ productsPromised, cart, setCart, selectedCarts, setSelectedCarts }) => {


    const products = use(productsPromised);

    const [selected, setSelected] = useState("selected");





    return (
        <div>
            <div className='flex flex-col text-center'>
                <h2 className='font-bold text-[30px]'>Premium Digital Tools</h2>
                <p className='text-center text-[#939aa0]' >Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

            </div>
            <div className='flex justify-center items-center space-x-2 m-4'>

                
                <button onClick={() => setSelected('selected')}
                    className={` btn ${selected === "selected" ? "bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl text-white font-semibold" : "  bg-white rounded-full"}`}
                >Products</button>
                <button onClick={() => setSelected('notselected')}
                    className={` btn ${selected === "notselected" ? "bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl text-white font-semibold" : "bg-white rounded-full"}`}
                >Cart( {selectedCarts.length})</button>
            </div>





            {
                selected === "selected" ? <Products
                    products={products}
                    selectedCarts={selectedCarts}
                    setSelectedCarts={setSelectedCarts}
                    cart={cart}
                    setCart={setCart}

                ></Products>
                    : <Cart
                        selectedCarts={selectedCarts}
                        setSelectedCarts={setSelectedCarts}
                        cart={cart}
                        setCart={setCart}

                    ></Cart>

            }

        </div>


    );
};

export default Items;