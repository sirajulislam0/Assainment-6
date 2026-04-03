import React from 'react';

import Heroimg from '../../assets/banner.png'
const HeaderSection = () => {
    return (
        <div className='container mx-auto'>


            <div className='flex justify-center gap-3 items-center mt-[10px]'>

                <div className='space-y-3'>

                    <p className='bg-amber-100 rounded-full mr-[10px]'>New: AI-Powered Tools Available</p>
                    <h2 className='font-bold text-[30px]'>Supercharge Your <br />
                        Digital Workflow</h2>
                    <p>Access premium AI tools, design assets, templates, and productivity

                        <br /> software—all in one place. Start creating faster today.

                        <br /> Explore Products
                    </p>
                    <div className='space-x-3'>
                        <a className="btn btn-primary rounded-3xl">Button</a>
                        <a className="btn btn-primary rounded-3xl">Button</a>

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