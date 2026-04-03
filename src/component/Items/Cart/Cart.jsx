import React from 'react';
import { MdDelete } from 'react-icons/md';

const Cart = ({ selectedCarts, setSelectedCarts }) => {


    const handleSelecteCart = (product) => {
        console.log("selectedPlayers", selectedCarts);

        const filterPlayers = selectedCarts.filter(selectedCart => selectedCart.name != product.name)
        console.log("filterPlayers ", filterPlayers);

        setSelectedCarts(filterPlayers)



    }
    return (
        <div className='space-y-5'>
            <div>
                {selectedCarts.length === 0 ?

                    <div>
                        <h2>No Player Selected Yet </h2>
                        <p>Go to available tab for selecte players</p>
                    </div>
                    : selectedCarts.map((product,id) => {
                        return (
                            <div
                                key={id}
                                className='flex items-center  justify-between  p-10 rounded-2xl border'>

                                <div className='flex items-center gap-2 '>


                                    <h2 className='flex items-center gap-2 font-semibold text-2xl'>{product.name}</h2>

                                </div>

                                <button className='btn text-red-500' onClick={() => handleSelecteCart(product)}><MdDelete /></button>
                            </div>
                        );
                    })}
            </div>
        </div>

    );
};

export default Cart;