/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { MdOutlineTimer } from 'react-icons/md';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import router from 'next/router';

const Profile: NextPage = () =>
{
    const { data: session, status } = useSession();

    const [username, setUsername] = useState<string>('');
    const [kills, setKills] = useState<number>(0);
    const [deaths, setDeaths] = useState<number>(0);
    const [kdr, setKDR] = useState<number>(0);

    useEffect(() =>
    {
        if (status === 'loading')
            return;

        if (status === 'unauthenticated')
        {
            router.push('/login?err=noauth');
            return;
        }
            
        axios({ method: 'GET', url: `/api/users/${ session!.user!.steam.id }`, headers: { 'Content-Type': 'application/json' } })
            .then((data) =>
            {
                if(!data.data.ok)
                {
                    setUsername('Failed to load profile..');
                    return;
                }

                setUsername(session!.user!.steam!.name);
                setKills(data.data.stats.kills);
                setDeaths(data.data.stats.deaths);
                setKDR(data.data.stats.kdr);
            });
    }, [status, session]);

    return (
        <div>
            <Head>
                <title>Your Profile</title>
                <meta name='keywords' content='list,of,key,wordse' />
                <meta name='description' content='100 word desc' />
                <meta name='og:title' content='short name' />
                <meta name='og:description' content='short desc' />
                <meta name='og:image' content='url' />
                <meta name='og:image:width' content='width' />
                <meta name='og:image:height' content='height' />
                <meta name='theme-color' content='#ad6edd' />
            </Head>
            <main className='h-screen w-screen'>
                <div className='flex flex-col h-full w-full items-center justify-center'>
                    <div className='bg-gray-900 rounded-lg shadow-2xl' style={{ 'height': '550px', 'width': '800px' }}>
                        <div className='flex flex-row items-center justify-center mt-10'>
                            <img src='/1655659.jpg' alt='User PFP' className='rounded-full border-2 border-white h-32 w-32' />
                        </div>

                        <div className='flex flex-col mt-10 justify-center items-center'>
                            <div className='text-center text-white font-bold text-xl'>
                                <span className='text-purple font-bold mono text-2xl'>{username}</span>&apos;s Profile
                            </div>

                            <div className='flex flex-col justify-center items-center mt-5'>
                                <div className='flex flex-row justify-center items-center'>
                                    <MdOutlineTimer className='text-purple text-xl' />
                                    <span className='text-white text-xl ml-5'>Joined</span>
                                </div>
                                <div className='flex flex-row justify-center items-center mt-1 space-x-1'>
                                    <span className='text-green-500 text-xl ml-5 font-bold'>1/2/2022</span>
                                    <span className='text-white text-xl ml-5'>at</span>
                                    <span className='text-green-500 text-xl ml-5 font-bold'>1:00pm</span>
                                </div>
                            </div>

                            <div className='flex flex-col mt-10 justify-center items-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    <img className='h-14' src="https://api.imperialplugins.com/v2/Products/22/ProductLogo?Size=Large" alt="PlayerStats Logo" />
                                    <div className='ml-5'>
                                        <div className='text-white font-bold text-2xl'>
                                            Statistics
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-row mt-5 items-center justify-center space-x-5 text-center'>
                                    <div>
                                        <h1 className='text-white text-xl flex flex-col'>
                                            <span className='text-purple font-bold'>
                                                Kills
                                            </span>
                                            {kills}
                                        </h1>
                                    </div>
                                    <div>
                                        <h1 className='text-white text-xl flex flex-col'>
                                            <span className='text-purple font-bold'>
                                                Deaths
                                            </span>
                                            {deaths}
                                        </h1>
                                    </div>
                                    <div>
                                        <h1 className='text-white text-xl flex flex-col'>
                                            <span className='text-purple font-bold'>
                                                KDR
                                            </span>
                                            {kdr}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;