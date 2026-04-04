import React from 'react';

const ActiveUser = () => {
    return (
        <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10 text-center'>

            <div className='flex justify-center gap-6'>

                <div className='flex flex-col divide-x divide-white'>


                    <h2 className="text-2xl font-bold">50K+</h2>
                    <p>Active Users</p>


                </div>
                <hr className='bg-white' />
                <div className=' divide-x divide-white items-center text-center'></div>

                <div className='flex flex-col items-center text-center'>


                    <h2 className="text-2xl font-bold">50K+</h2>
                    <p>Active Users</p>


                </div>
                <hr className='bg-white' />

                <div className='flex flex-col'>


                    <h2 className="text-2xl font-bold">50K+</h2>
                    <p>Active Users</p>


                </div>



            </div>
        </div>
    );
};

export default ActiveUser;