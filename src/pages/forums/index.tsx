/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header';


const Forums: NextPage = () =>
{
    return (
        <div>
            <Head>
                <title>title</title>
                <meta name='keywords' content='list,of,key,wordse' />
                <meta name='description' content='100 word desc' />
                <meta name='og:title' content='short name' />
                <meta name='og:description' content='short desc' />
                <meta name='og:image' content='url' />
                <meta name='og:image:width' content='width' />
                <meta name='og:image:height' content='height' />
                <meta name='theme-color' content='#ad6edd' />
            </Head>
            <main className='h-screen'>
                <Header />

                <div className='flex justify-center items-center'>
                    <div className='overflow-hidden h-screen bg-gray-900' style={{ 'width': '700px' }}>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Forums;