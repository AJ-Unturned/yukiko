/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';

const Home: NextPage = () =>
{
  return (
    <div>
      <Head>
        <title>AJ Unturned</title>
        <meta name='keywords' content='list,of,key,wordse' />
        <meta name='description' content='100 word desc' />
        <meta name='og:title' content='short name' />
        <meta name='og:description' content='short desc' />
        <meta name='og:iamge' content='url' />
        <meta name='og:image:width' content='width' />
        <meta name='og:image:height' content='height' />
        <meta name='theme-color' content='#ad6edd' />
      </Head>

      <main className='h-screen overflow-hidden'>
        <Header />
        <div className='hidden md:block lg:block' style={{ minHeight: '1000px' }}>
          <Slideshow />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
