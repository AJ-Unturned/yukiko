import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document
{
    render(): JSX.Element
    {
        return (
            <Html lang='en'>
                <Head />
                <body className='h-screen bg-gray-800'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}