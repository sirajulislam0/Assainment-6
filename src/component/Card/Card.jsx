import React, { useState } from 'react';

const Card = ({ product ,selectedCarts,setSelectedCarts}) => {
    const { name, description, price, period, tag, tagType, features, icon } = product;

    const [selected ,setSelected] = useState(false);

    const selectsCarts =()=>{

        console.log("button CLicked-",product);
        setSelected(true)
        setSelectedCarts([...selectedCarts,product])
        
    }
    return (
        <div className="border rounded-xl p-6 shadow-md  bg-white">


            <div className='flex justify-between'>
                <img src={icon} alt={name} className=" " />
                <h2 className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                    {tag}
                </h2>

                
            </div>




            <h2 className="text-xl font-bold">{name}</h2>


            <p className="text-gray-500 text-sm mt-1">{description}</p>


            <h3 className="text-2xl font-bold mt-3">
                ${price} <span className="text-sm text-gray-500">/{period}</span>
            </h3>


            <ul className="mt-3 space-y-1">
                {features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600">
                        ✓ {feature}
                    </li>
                ))}
            </ul>

            {/* button */}
            <button
            onClick={()=>selectsCarts()}
            className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">
               {selected ? "Selected" : "Buy Now"}
            </button>
        </div>
    );
};

export default Card;