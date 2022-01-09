import Link from 'next/link';
import React, { useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { MdErrorOutline } from 'react-icons/md';
import { signIn } from 'next-auth/react';

interface SigninProps
{
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signin = (props: SigninProps): JSX.Element =>
{
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        e.stopPropagation();

        // make a request to the server to check if the user is valid
        // if the user is valid, redirect to the home page
        // if the user is not valid, display an error message

        setErrorMessage('Failed to connect to server..');
    }

    return (
        <div className={props.show ? 'absolute z-20 right-12 top-28' : 'hidden'}>
            <div className='h-96 mt-1 top-0' style={{ width: '600px', background: '#101523' }}>
                <div className='flex justify-between items-center h-12'>
                    <div className='flex items-center'>
                        <VscChromeClose className='text-white ml-5' onClick={(() => props.setShow(false))} />

                        <form onSubmit={((e) => handleSubmit(e))} className='mt-60 space-y-5 space-x-5'>
                            <div className='flex flex-col items-center'>
                                <h1 className='mt-24 mb-5 font-bold text-2xl text-white'>
                                    Sign In
                                </h1>

                                <p className='text-red-500 duration-200 flex flex-row mb-2'><MdErrorOutline className={errorMessage ? 'mt-1 mr-1' : 'hidden'} /> {errorMessage ? errorMessage : ''}</p>

                                <input type='username' id='username' required
                                    className='
                                w-full p-1 mt-1 mb-3 rounded-xl
                                focus:outline-none focus:shadow-outline focus:shadow-lg
                                focus:border-red-500/90 border-2 border-black text-white'
                                    placeholder='Display Name' style={{ background: '#28314c' }} />


                                <input type='password' id='password' required
                                    className='
                                w-full p-1 mt-1 mb-3 rounded-xl
                                focus:outline-none focus:shadow-outline focus:shadow-lg
                                focus:border-red-500/90 border-2 border-black text-white'
                                    placeholder='Password' style={{ background: '#28314c' }} />

                                <button type='submit' className='p-2 w-full rounded-md mt-5 bg-red-500 text-white hover:bg-red-300 hover:text-black duration-300'>
                                    login
                                </button>

                                <div className='flex flex-row items-center justify-between'>
                                    <input type="checkbox" disabled className='mr-1' />
                                    <p className='text-purple mt-5'>
                                        Remember Me
                                        <br />
                                        Not recommended on shared computers.
                                    </p>
                                </div>

                            </div>
                            <p className='text-white hover:text-white/80 flex flex-row mt-2 text-base float-right text-right duration-300'>
                                <Link href='/reset-password'>
                                    Forgot password?
                                </Link>
                            </p>
                        </form>
                    </div>

                    <div className='flex items-center mr-9'>
                        <button
                            onClick={(() => signIn('discord'))}
                            className='mt-36 w-full p-3 rounded-md bg-indigo-400 text-white hover:bg-indigo-700 duration-300'>
                            Login with Discord
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Signin;