import React from 'react';
import cartIcon from '../../assets/shopping-cart.png'

const NavBar = ({ selectedCarts }) => {
    return (

        <header className="sticky top-0 bg-white shadow-md">
            <div className='container mx-auto'>
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Products</a></li>
                                <li><a>Features</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Testimonials</a></li>
                                <li><a>FAQ</a></li>
                                <li><a>login</a></li>

                            </ul>
                        </div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                            DigiTools
                        </h1>
                    </div>
                    <div className="navbar-center hidden sm:hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>



                        </ul>
                    </div>
                    <div className="navbar-end gap-4 ">
                        <div className="indicator">

                            {
                                selectedCarts.length === 0 ? <span className='indicator-item badge bg-red-500 text-white rounded-full w-3 h-4 hidden'>  {selectedCarts.length} </span>

                                    : <span className='indicator-item badge bg-red-500 text-white rounded-full w-3 h-4 '>  {selectedCarts.length} </span>
                            }



                            <img src={cartIcon} alt="Cart" className="w-5 h-5" />



                        </div>


                        <ul className="menu menu-horizontal px-1 hidden sm:hidden md:flex">
                            <li><a>login</a></li>




                        </ul>


                        <a className="btn bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl text-white font-semibold">Get Started</a>


                    </div>
                </div>
            </div>
        </header>

    );
};

export default NavBar;