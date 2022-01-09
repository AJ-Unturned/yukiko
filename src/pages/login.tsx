/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';

const Login: NextPage = () =>
{
    const [errorMessage, setErrorMessage] = useState<string>('');
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
        <div>
            <Head>
                <title>title</title>
                <meta name='keywords' content='list,of,key,wordse' />
                <meta name='description' content='100 word desc' />
                <meta name='og:title' content='short name' />
                <meta name='og:description' content='short desc' />
                <meta name='og:iamge' content='url' />
                <meta name='og:image:width' content='width' />
                <meta name='og:image:height' content='height' />
                <meta name='theme-color' content='#ad6edd' />
            </Head>

            <main className='h-screen'>
                <div className='flex flex-col h-full w-full items-center justify-center'>
                    <div className='bg-gray-900 rounded-lg shadow-2xl' style={{ 'height': '550px', 'width': '800px' }}>
                        <div className='flex flex-col justify-center items-center h-full w-full'>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-white text-center text-2xl mb-3'>Login</h1>
                                <p className='text-red-500 duration-200 flex flex-row mb-2'><MdErrorOutline className={errorMessage ? 'mt-1 mr-1' : 'hidden'} /> {errorMessage ? errorMessage : ''}</p>
                                <form action="" className='flex space-y-5' onSubmit={handleSubmit}>
                                    <div className='flex flex-col left-0'>
                                        <input
                                            type="text" name="username"
                                            className='
                                        w-full p-3 mt-1 mb-3 rounded-xl
                                        focus:outline-none focus:shadow-outline focus:shadow-lg
                                        focus:border-red-500/90 border-2 border-black text-white'
                                            placeholder='Display Name' style={{ background: '#28314c' }}
                                            required
                                        />

                                        <input
                                            type="password" name="password"
                                            className='
                                        w-full p-3 mt-1 mb-3 rounded-xl
                                        focus:outline-none focus:shadow-outline focus:shadow-lg
                                        focus:border-red-500/90 border-2 border-black text-white'
                                            placeholder="Password" style={{ background: '#28314c' }}
                                            required
                                        />

                                        <div className='flex flex-row items-center justify-between mb-3 -mt-5'>
                                            <input type="checkbox" disabled className='mr-1 bg-gray-900 text-gray-900' />
                                            <p className='text-purple mt-5'>
                                                Remember Me
                                                <br />
                                                Not recommended on shared computers.
                                            </p>
                                        </div>

                                        <button type="submit"
                                            className='
                                        w-full p-3 mt-1 mb-3 rounded-xl
                                        hover:shadow-outline hover:shadow-lg
                                        hover:border-red-500/90 border-2 duration-300 
                                        border-black text-white transition-colors
                                        hover:bg-white'
                                            style={{ background: '#28314c' }}
                                        >
                                            Login
                                        </button>

                                        <hr className='mt-3' />

                                        <button
                                            onClick={(() => signIn('discord'))}
                                            className='mt-5 w-full p-3 rounded-md bg-indigo-400 text-white hover:bg-indigo-700 duration-300'>
                                            Login with Discord
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;