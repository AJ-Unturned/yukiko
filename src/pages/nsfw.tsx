/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useRef } from 'react';

const Nsfw: NextPage = () =>
{
    const contentRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const buttonAudioRef = useRef<HTMLAudioElement>(null);

    return (
        <div>
            <Head>
                <title>?</title>
                <meta name='description' content='?' />
                <meta name='og:title' content='?' />
                <meta name='og:description' content='?' />
                <meta name='theme-color' content='#ad6edd' />
            </Head>

            <main className='h-screen overflow-hidden'>
                <div className='absolute h-full w-full flex flex-col items-center justify-center '>
                    <audio className='hidden' ref={buttonAudioRef}>
                        <source src='/media/button18.wav' />
                    </audio>

                    <button
                        onClick={((e) => 
                        {
                            e.preventDefault();

                            buttonAudioRef.current?.play();

                            // @ts-ignore
                            contentRef.current?.style.display = 'block';
                            // @ts-ignore
                            e.target.style.display = 'none';
                            
                            audioRef.current?.play();
                            // @ts-ignore
                            audioRef.current?.volume = 0.1;
                        })}
                        className='w-32 h-14 bg-purple
                     rounded-md text-black font-bold
                      mono text-2xl
                      hover:bg-pink-500/50 hover:text-white
                      hover:shadow-2xl
                      duration-500 transition-colors'>
                        Trust Me
                    </button>
                </div>
                <div className='h-full w-screen hidden absolute m-0 top-0 bottom-0 right-0 left-0' ref={contentRef}>
                    <audio controls preload='auto' className='hidden' loop ref={audioRef}>
                        <source src='/media/konga.mp3' type='audio/mp3' />
                        <embed src='/media/konga.mp3' />
                    </audio>
                    <video loop autoPlay muted className='w-full h-full absolute object-fill' onContextMenu={((e) => e.preventDefault())}>
                        <source src='/media/ditto.mp4' id='video' type='video/mp4' onContextMenu={((e) => e.preventDefault())} />
                        Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                </div>
            </main>
        </div>
    );
};

export default Nsfw;
