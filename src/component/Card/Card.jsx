import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({ product, selectedCarts, setSelectedCarts }) => {
    const { name, description, price, period, tag, tagType, features, icon } = product;

    const [selected, setSelected] = useState(false);

    const selectsCarts = () => {


        toast(`${product.name} is selected`)
        setSelected(true)
        setSelectedCarts([...selectedCarts, product])


    }
    return (
        <div className="  border rounded p-6 shadow-md  bg-white">



            <div className='flex justify-between'>

                <div className="bg-white rounded-full p-2 shadow">
                    <img src={product.icon} alt="" />
                </div>
                <p className='bg-green-200  rounded-full px-4 h-7'>{tag}</p>




            </div>




            <h2 className="text-xl font-bold">{name}</h2>


            <p className="text-gray-500 text-sm mt-1">{description}</p>


            <h3 className="text-2xl font-bold mt-3">
                ${price} <span className="text-sm text-gray-500">/{period}</span>
            </h3>


            <ul className="mt-3 space-y-1 grid grid-cols-1 lg:grid">
                {features.map((feature, index) => (
                    <li key={index} className="text-sm text-[#939aa0]">
                        ✓ {feature}
                    </li>
                ))}
            </ul>

            <button
                onClick={() => selectsCarts(product)}
                disabled={selected}
                className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">
                {selected ? "Selected" : "Buy Now"}
            </button>


        </div>
    );
};

export default Card;