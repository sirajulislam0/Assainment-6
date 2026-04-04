import React from 'react';

import PlayIcon from '../../assets/Play.png'
import Heroimg from '../../assets/banner.png'
const HeaderSection = () => {
    return (
        <div className='container mx-auto'>


            <div className='flex justify-center gap-3 items-center mt-[10px] grid grid-cols-1  md:grid-cols-2 '>

                <div className='space-y-3'>

                    <div className='flex bg-[#e1e7ff] rounded-full mr-[10px]'>
                        <div className='bg-amber-400 rounded-full'></div>
                        <p className='p-2 text-[#6c35f7]'>New: AI-Powered Tools Available</p>

                    </div>
                    <h2 className='font-semibold text-[30px]'>Supercharge Your <br />
                        Digital Workflow</h2>
                    <p className='text-[#939aa0]'>Access premium AI tools, design assets, templates, and productivity

                        <br /> software—all in one place. Start creating faster today.

                        <br /> Explore Products
                    </p>
                    <div className='space-x-3 grid grid-cols-1  md:grid-cols-2'>
                        <a className="btn bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl text-white">Explore Products</a>
                        <a className="btn border-2 border-purple-500 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition"> <span><img src={PlayIcon} alt="" /></span>Watch Demo</a>

                    </div>
                </div>

                <div>


                    <img src={Heroimg} alt="" className='h-[350px]' />
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;