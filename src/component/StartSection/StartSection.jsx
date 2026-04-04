import React from 'react';
import UserIcon from '../../assets/user.png'
import PackageIcon from '../../assets/package.png'
import RocketIcon from '../../assets/rocket.png'

const StartSection = () => {
    return (

        <div className=' bg-[#f9fafc] '>
            <div className='container mx-auto p-9 items-center text-center'>


                <h2 className='font-bold text-[34px] '>Get Started in 3 Steps</h2>

                <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>


                <div className='grid grid-cols-3 gap-5'>
                    <div className=' flex flex-col  shadow-sm items-end'>



                        <h1 className='bg-gradient-to-r ml-10 from-blue-500 to-purple-600 rounded-full w-8 text-center   p-1 text-white' >01</h1>

                        <div className='flex flex-col items-center text-center p-3'>
                            <div className='bg-[#f0eafe] rounded-[100%]'>
                                <img src={UserIcon} alt="" className='p-5' />
                            </div>
                            <h2 className='font-bold text-[20px]'>Create Account</h2>
                            <p className='text-[#a8b2ba]'>Sign up for free in seconds. No credit card <br />required to get started.</p>
                        </div>






                    </div>
                    <div className=' flex flex-col  shadow-sm items-end'>



                        <h1 className='bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-8 text-center   p-1 text-white' >01</h1>

                        <div className='flex flex-col items-center text-center p-3'>
                            <div className='bg-[#f0eafe] rounded-[100%]'>
                                <img src={UserIcon} alt="" className='p-5' />
                            </div>
                            <h2 className='font-bold text-[20px]'>Create Account</h2>
                            <p className='text-[#a8b2ba]'>Sign up for free in seconds. No credit card <br />required to get started.</p>
                        </div>






                    </div>
                    <div className=' flex flex-col  shadow-sm items-end'>



                        <h1 className='bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-8 text-center   p-1 text-white' >01</h1>

                        <div className='flex flex-col items-center text-center p-3'>
                            <div className='bg-[#f0eafe] rounded-[100%]'>
                                <img src={UserIcon} alt="" className='p-5' />
                            </div>
                            <h2 className='font-bold text-[20px]'>Create Account</h2>
                            <p className='text-[#a8b2ba]'>Sign up for free in seconds. No credit card <br />required to get started.</p>
                        </div>






                    </div>


                </div>
            </div>



        </div>

    );
};

export default StartSection;