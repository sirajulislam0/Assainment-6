import React from 'react';
import { MdDelete } from 'react-icons/md';
import Products from '../Products/Products';
import CartIcon from '../../../assets/shopping-cart.png'
import { IoCartOutline } from "react-icons/io5";

const Cart = ({ selectedCarts, setSelectedCarts }) => {



    const emptyarray = () => {
        setSelectedCarts([])
    }
    const handleSelecteCart = (product) => {
        console.log("selectedPlayers", selectedCarts);

        const filterPlayers = selectedCarts.filter(selectedCart => selectedCart.name !== product.name)
        console.log("filterPlayers ", filterPlayers);

        setSelectedCarts(filterPlayers)

    }
    return (
        <div>

            {selectedCarts.length === 0 ? (
                <div>

                    <div className="border-white rounded-2xl shadow-2xl p-5 container mx-auto text-center">
                        <h2 className="font-bold text-2xl text-left">Your Cart</h2>


                        <div className=' flex flex-col items-center text-center'> 
                          
                                <IoCartOutline  className='h-20 w-20'/>
                            
                            <h3 className='font-semibold text-[#626871d1]'>Yoru cart is empty</h3>

                        </div>

                    </div>



                </div>
            ) : (
                <div>

                    <div className="border-white rounded-2xl shadow-2xl p-5 container mx-auto  text-center">
                        <h2 className="font-bold text-2xl text-left">Your Cart</h2>

                        {selectedCarts.map((product, id) => (
                            <div key={id} className="mb-3 items-center text-center mt-5">

                                <div className="flex justify-between bg-[#f9fafc] shadow rounded p-5 ">

                                    <div className="flex gap-5">
                                        <div className="bg-white rounded-full p-2">
                                            <img src={product.icon} alt="" />
                                        </div>

                                        <div>
                                            <h2>{product.name}</h2>
                                            <p className='text-left text-[#00000062] font-semibold'>${product.price}</p>
                                        </div>
                                    </div>

                                    <button onClick={() => handleSelecteCart(product)} className="btn btn-ghost text-[#ff0000]">Remove</button>

                                </div>

                            </div>
                        ))}

                        <div className="mt-5 p-5 ">

                            <div className='flex justify-between'>
                                <h2 className='text-[#00000062]'>Total:</h2>
                                <h2 className="text-xl font-bold">
                                    Total Price:$ {selectedCarts.reduce((sum, product) => sum + product.price, 0)}
                                </h2>
                            </div>

                        </div>
                        <button onClick={() => emptyarray()}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-11/12 rounded-full font-semibold p-2 ">
                            Proceed to Checkout</button>
                    </div>



                </div>
            )}

        </div>
    );
};

export default Cart;