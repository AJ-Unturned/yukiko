/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';

import { VscChromeClose } from 'react-icons/vsc';
import
{
    FaShoppingCart,
    FaBars,
    FaSignal,
    FaQuestionCircle,
    FaThList,
} from 'react-icons/fa';
import Signin from './modals/Signin';
import { useSession } from 'next-auth/react';

const Header = (): JSX.Element =>
{
    const { data: session } = useSession();

    const [showLoginModal, setShowLoginModel] = useState(false);
    const [showMobileMenu, setMobileMenu] = useState(false);

    function handleHandburger(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
    {
        e.preventDefault();
        setMobileMenu(!showMobileMenu);
    }

    function handleLoginModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)
    {
        e.preventDefault();
        setShowLoginModel(!showLoginModal);
    }

    return (
        <nav className={`border-b-2 border-gray-900 duration-300 ${ showMobileMenu ? 'backdrop-blur-2xl bg-white/30' : '' }`} style={{ 'background': '#0d111d' }}>
            <header className={'h-36 flex items-center justify-between'} style={{ 'background': '#090c15' }}>
                <div className={showMobileMenu ? 'hidden' : 'flex items-center flex-shrink-0 text-white ml-28 md:ml-24'}>
                    <h1 className='hover:text-pink-400 duration-1000 transition-colors ml-6 font-bold text-2xl'>
                        AJ Unturned
                    </h1>
                </div>
                <div className={showMobileMenu ? 'hidden' : 'text-white ml-9 mr-9'}>
                    <button onClick={((e) => handleHandburger(e))}>
                        <FaBars className='text-white md:hidden lg:hidden mt-2' />
                    </button>
                </div>
                <div className={'hidden md:flex lg:float-right'}>
                    <ul className='mr-20 flex flex-row space-x-5'>
                        {session ?
                            <>
                                <li>
                                    <button className='text-white hover:text-gray-300 duration-300 p-2 w-48 h-10' onClick={((e) => handleLoginModal(e))}>
                                        <Link href='/forums'>
                                            <a className='font-bold'>
                                                Forums
                                            </a>
                                        </Link>
                                    </button>
                                </li>
                                <li>
                                    <Link href='/profile' passHref>
                                        <button className='text-white bg-gray-700 p-2 w-36 h-10 hover:bg-gray-300 hover:text-black duration-300'>
                                            <a className='font-bold'>
                                                profile
                                            </a>
                                        </button>
                                    </Link>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <button className='text-white p-2 w-48 h-10 hover:text-gray-300 duration-300' onClick={((e) => handleLoginModal(e))}>
                                        Existing User? Sign In
                                    </button>
                                </li>
                                <li>
                                    <button className='text-white bg-red-500 p-2 w-36 h-10 hover:bg-red-300 hover:text-black duration-300'>
                                        <Link href='/'>
                                            <a className='font-bold'>
                                                Sign Up
                                            </a>
                                        </Link>
                                    </button>
                                </li>
                            </>
                        }
                    </ul>
                </div>

                <Signin show={showLoginModal} setShow={setShowLoginModel} />

                <div className={showMobileMenu ? 'sm:flex' : 'hidden'}>
                    <div className='duration-700 transition-colors absolute z-20 right-0 top-0 h-screen pt-5 w-3/4 bg-gray-900'>
                        <button className='float-right pb-2 pr-5' onClick={((e) => handleHandburger(e))}>
                            <VscChromeClose className='text-white md:hidden lg:hidden' />
                        </button>
                        <div className='flex flex-col items-center justify-center pt-24 text-white'>
                            <button className='w-full ml-10 bg-gray-700 hover:bg-indigo-500 p-2'>
                                <Link href='/login'>
                                    <a className='text-white'>
                                        Existing user? Sign In
                                    </a>
                                </Link>
                            </button>
                            <button className='w-full ml-10 mt-3 bg-red-500 hover:bg-indigo-500 p-2'>
                                <Link href='/'>
                                    <a className='text-white'>
                                        Sign Up
                                    </a>
                                </Link>
                            </button>

                            <div className='flex flex-col items-center justify-center mt-3'>
                                <ul className='space-y-1'>
                                    <li className='text-white ml-8 pt-2'>
                                        <Link href='/'>
                                            <a className='text-purple hover:text-white duration-300 flex flex-row'>
                                                <FaShoppingCart className='mt-1 mr-1 ' />  Store
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='text-white ml-8'>
                                        <Link href='/'>
                                            <a className='text-purple hover:text-white duration-300 flex flex-row'>
                                                <FaSignal className='mt-1 mr-1 ' />  Status
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='text-white ml-8'>
                                        <Link href='/'>
                                            <a className='text-purple hover:text-white duration-300f flex flex-row'>
                                                <FaQuestionCircle className='mt-1 mr-1 ' />  Support
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            { /* content links */}
            <div className='md:flex lg:flex h-16 hidden'>
                <div className='flex flex-row items-center space-x-3'>
                    <ul className='flex flex-row ml-32 space-x-16'>
                        <li>
                            <Link href='/'>
                                <a className='flex flex-row hover:text-white text-purple text-lg duration-500'>
                                    <FaThList className='mt-1 mr-2' /> Forums
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a className='flex flex-row hover:text-white text-purple text-lg duration-500'>
                                    <FaShoppingCart className='mt-1 mr-2' /> Store
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a className='flex flex-row hover:text-white text-purple text-lg duration-500'>
                                    <FaSignal className='mt-1 mr-2' /> Status
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a className='flex flex-row hover:text-white text-lg text-purple duration-500'>
                                    <FaQuestionCircle className='mt-1 mr-2' /> Support
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;