/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MdOutlineTimer } from 'react-icons/md';
import axios from 'axios';
import Link from 'next/link';

const Profile: NextPage = () =>
{
    const router = useRouter();
    const { id } = router.query;

    const [error, setError] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [profilePic, setProfilePic] = useState<string>('');
    const [lastUpdated, setLastUpdated] = useState<string>('');
    const [userID, setID] = useState<string>('');
    const [kills, setKills] = useState<number>(0);
    const [deaths, setDeaths] = useState<number>(0);
    const [kdr, setKDR] = useState<number>(0);

    useEffect(() =>
    {
        if(!id)
            return;

        axios({ method: 'GET', url: `/api/users/${ id }`, headers: { 'Content-Type': 'application/json' } })
            .then((data) =>
            {
                if(!data.data.ok)
                {
                    setError(data.data.ok);
                    return;
                }

                setUsername(data.data.username);
                setID(data.data.id);
                setProfilePic(data.data.profilePic);
                setLastUpdated(data.data.stats.lastUpdated);
                setKills(data.data.stats.kills);
                setDeaths(data.data.stats.deaths);
                setKDR(data.data.stats.kdr);
            })
            .catch(() =>
            {
                setError(true);
            });
    }, [id, router]);

    return (
        <div>
            <Head>
                <title>{error ? 'No Profile Found' : `${ username }'s Profile`} </title>
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
                        {error ? null :
                            <div className='flex flex-row items-center justify-center mt-10'>
                                <img src={profilePic} alt='User PFP' className='rounded-full border-2 border-white h-32 w-32' />
                            </div>
                        }

                        <div className='flex flex-col mt-10 justify-center items-center'>

                            {error ?
                                <div className='h-full w-full flex flex-col justify-center items-center text-center text-white font-bold text-xl'>
                                    <h1>
                                        <span className='text-purple/80 font-bold mono text-2xl'>Failed to find user, are you sure thats correct?</span>
                                    </h1>

                                    <div className='flex flex-row space-x-5 justify-center items-center'>
                                        <h2>
                                            <Link href='/'>
                                                <a className='text-purple/80 hover:text-purple/50 duration-300 transition-colors'>Return Home</a>
                                            </Link>
                                        </h2>

                                        <h2>
                                            <Link href='/profile'>
                                                <a className='text-purple/80 hover:text-purple/50 duration-300 transition-colors'>Return to Profile</a>
                                            </Link>
                                        </h2>

                                        <h2>
                                            <Link href='/support'>
                                                <a className='text-purple/80 hover:text-purple/50 duration-300 transition-colors'>Report Error</a>
                                            </Link>
                                        </h2>
                                    </div>
                                </div>
                                :
                                <>
                                    <div className='text-center text-white font-bold text-xl'>
                                        <h1>
                                            <span className='text-purple/80 hover:text-purple/50 duration-300 transition-colors font-bold mono text-2xl'>{username}</span>&apos;s Profile
                                        </h1>
                                        <span className='text-purple/80 hover:text-purple/50 duration-300 transition-colors'>
                                            <Link href={`https://steamcommunity.com/profiles/${ userID }`}>
                                                <a>
                                                    Steam Profile
                                                </a>
                                            </Link>
                                        </span>
                                    </div>

                                    <div className='flex flex-col justify-center items-center mt-5'>
                                        <div className='flex flex-row justify-center items-center'>
                                            <MdOutlineTimer className='text-purple text-xl' />
                                            <span className='text-white text-xl ml-5'>Last Updated</span>
                                        </div>
                                        <div className='flex flex-row justify-center items-center mt-1 space-x-1'>
                                            <span className='text-green-500 text-xl ml-5 font-bold'>{new Date(lastUpdated).toDateString()}</span>
                                        </div>
                                    </div>

                                    <div className='flex flex-col mt-10 justify-center items-center'>
                                        <div className='flex flex-row justify-center items-center'>
                                            <img className='h-14' src="/playerstats.png" alt="PlayerStats Logo" />
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
                                </>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;