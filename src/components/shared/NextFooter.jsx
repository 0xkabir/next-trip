import React from 'react';
import logo from '../../assets/images/Logo.png';
import bgImage from '../../assets/images/bot.jpg';

const NextFooter = () => {
    return (
        <footer className="px-4 divide-y bg-[aliceblue] mt-10 py-10">
            <div className='py-10 flex flex-wrap justify-between mx-auto w-[80%] lg:text-center'>
                <div>
                    <p className='text-gray-500 mb-4'>Keep In Touch</p>
                    <h2 className='text-gray-700 text-4xl font-bold'>Travel With Us</h2>
                </div>
                <div className='mt-10'>
                    <input className='bg-white py-3 px-12 rounded-full text-center' type="text" placeholder='Type your message...' />
                    <button className='bg-cyan-400 py-3 px-8 md:ml-4 mt-4 lg:mt-0 mx-auto rounded-full text-white'>Send</button>
                </div>
            </div>
            <div className="container w-[80%] bg-white flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-[120px] h-[120px] rounded-full">
                            <img className="" src={logo} alt="" />
                        </div>
                        <span className="self-center text-2xl font-semibold">NEXT TRIP</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 text-sm gap-x-3 mx-auto gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-dark">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Features</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Integrations</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Pricing</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-dark">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-dark">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Public API</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Documentation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Guides</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-50">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                <img className="w-5 h-5 fill-current" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                <img className="w-5 h-5 fill-current" src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="" />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                <img className="w-5 h-5 fill-current" src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="py-6 text-sm text-center dark:text-white bg-sky-500 w-[80%] mx-auto">
                © 2023 shamima_kabir_antu. All rights reserved.
            </div>
        </footer>

    );
};

export default NextFooter;