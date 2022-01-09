import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
    {
        url: '/image.png',
    },
    {
        url: '/image2.jpg',
    },
    {
        url: 'https://media.discordapp.net/attachments/519676608429293568/924915943598075904/unknown.png?width=652&height=533',
    }
];

const Slideshow = () =>
{
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div className='bg-no-repeat bg-cover bg-center' style={{ 'backgroundImage': `url(${ slideImage.url })`, height: '62rem' }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slideshow;