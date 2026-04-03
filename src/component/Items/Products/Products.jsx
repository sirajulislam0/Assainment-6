import React from 'react';
import Card from '../../Card/Card';

const Products = ({ products,selectedCarts,setSelectedCarts }) => {




    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {

                    products.map(product => (<Card key={product.id} product={product} selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts} />))
                }
            </div>

        </div>
    );
};

export default Products;